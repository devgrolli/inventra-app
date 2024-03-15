import { useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export function useRecoveryPassword() {
  const route = useRoute();
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "Erro com o código de recuperação",
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if ((route.params as any)?.emailRecovery) {
      setSnackbar({
        visible: (route.params as any)?.messageSnack?.visible ?? false,
        message: (route.params as any)?.messageSnack?.msg ?? "",
      });
    }
  }, [route.params]);

  const handleSubmitPassword = useCallback(async () => {
    try {
      setLoading(true);
      // const forgot = await authService.validateCodePassword(code);
      // console.log("forgot", forgot.data.message);
      // setSnackbar({ visible: true, message: forgot?.data?.message });
      setLoading(false);
    } catch (error: any) {
      setSnackbar({
        visible: true,
        message: Array.isArray(error.message)
          ? error.message[0]
          : error.message,
      });
      setError(true);
      setLoading(false);
    }
  }, []);

  const cleanErrors = useCallback(() => {
    setError(false);
    setLoading(false);
    setSnackbar({ visible: false, message: "" });
  }, []);

  const onDismissSnackBar = useCallback(() => {
    setSnackbar({ visible: false, message: "" });
  }, []);

  return {
    ref,
    value,
    props,
    loading,
    CELL_COUNT,
    snackbar,
    setValue,
    cleanErrors,
    onDismissSnackBar,
    handleSubmitPassword,
    getCellOnLayoutHandler,
  };
}
