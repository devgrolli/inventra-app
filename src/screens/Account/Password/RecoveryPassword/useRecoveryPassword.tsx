import { useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CELL_COUNT,
  ERROR_MSG,
  FormData,
  RecoveryRouteParams,
  SnackbarState,
} from "./types";
import { navigate } from "@core/navigation/navigator";
import authService from "services/authService";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export function useRecoveryPassword() {
  const route = useRoute();
  const [expiry, setExpiry] = useState<number>(0);
  const [value, setValue] = useState("");
  const [errorCode, setErrorCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeValidated, setCodeValidated] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    visible: false,
    message: ERROR_MSG,
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const params = route.params as RecoveryRouteParams;
    const { emailRecovery, messageSnack, expiryTime } = params;

    if (emailRecovery) {
      setExpiry(expiryTime);
      setSnackbar({
        visible: messageSnack?.visible ?? false,
        message: messageSnack?.msg ?? "",
      });
    }
  }, [route.params]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    register("passwordOne", { required: true });
    register("passwordTwo", { required: true });
  }, [register]);

  const handleError = (error: any) => {
    setSnackbar({
      visible: true,
      message: Array.isArray(error.message) ? error.message[0] : error.message,
    });
    setErrorCode(true);
    setLoading(false);
  };

  const handleNewPassword = useCallback(
    async (data: FormData) => {
      const email = (route.params as RecoveryRouteParams).emailRecovery;
      const { passwordOne, passwordTwo } = data;
      setLoading(true);

      if (passwordOne !== passwordTwo) {
        return handleError({ message: "As senhas não conferem" });
      }

      try {
        await authService.updatePassword(value, email, passwordOne);
        setLoading(false);
        navigate("Login", { passwordChangedSuccess: true });
      } catch (error: any) {
        handleError(error);
      }
    },
    [value, route.params, handleError]
  );

  const handleTokenPassword = useCallback(async () => {
    const email = (route.params as RecoveryRouteParams).emailRecovery;
    try {
      setLoading(true);
      await authService.validateRecoveryCode(email, value);
      setCodeValidated(true);
      setLoading(false);
    } catch (error: any) {
      handleError(error);
    }
  }, [value]);

  const cleanErrors = useCallback(() => {
    setErrorCode(false);
    setLoading(false);
    setSnackbar({ visible: false, message: "" });
  }, []);

  const onDismissSnackBar = useCallback(() => {
    setSnackbar({ visible: false, message: "" });
  }, []);

  const onChangeCode = useCallback((text: string) => {
    setValue(text.replace(/[^0-9]/g, ""));
  }, []);

  const resendMail = useCallback(async () => {
    try {
      const email = (route.params as RecoveryRouteParams).emailRecovery;
      const forgot = await authService.forgotPassword(email);
      const { message, expiryTime } = forgot?.data;
      setExpiry(expiryTime);
      setSnackbar({ visible: true, message: message });
    } catch (error: any) {
      handleError(error);
    }
  }, []);

  return {
    ref,
    value,
    errors,
    expiry,
    control,
    loading,
    snackbar,
    errorCode,
    CELL_COUNT,
    codeValidated,
    resendMail,
    cleanErrors,
    onChangeCode,
    handleSubmit,
    handleNewPassword,
    onDismissSnackBar,
    handleTokenPassword,
    getCellOnLayoutHandler,
  };
}
