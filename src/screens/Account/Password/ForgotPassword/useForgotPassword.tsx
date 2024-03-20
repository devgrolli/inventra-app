import { useState, useCallback } from "react";
import { navigate } from "@core/navigation/navigator";
import authService from "services/authService";
import { selectState, setExpiryTime } from "redux/password/passwordActions";
import { useDispatch } from "react-redux";

export function useForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "Erro ao enviar o email",
  });

  const handleEmailChange = (text: string) => {
    setEmail(text.toLowerCase());
  };

  const handleEmailFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleError = (error: any) => {
    setSnackbar({
      visible: true,
      message: Array.isArray(error.message) ? error.message[0] : error.message,
    });
    setError(true);
    setLoading(false);
  };

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const forgot = await authService.forgotPassword(email);
      const { message, expiryTime } = forgot?.data;
      dispatch(setExpiryTime(expiryTime));
      navigate("RecoveryPassword", {
        emailRecovery: email,
        expiryTime: expiryTime,
        messageSnack: { msg: message, visible: true },
      });
      setLoading(false);
    } catch (error: any) {
      handleError(error);
    }
  }, [email]);

  const onDismissSnackBar = useCallback(() => {
    setSnackbar({ visible: false, message: "" });
  }, []);

  const cleanErrors = useCallback(() => {
    setError(false);
    setLoading(false);
    setSnackbar({ visible: false, message: "" });
  }, []);

  return {
    email,
    error,
    focus,
    loading,
    snackbar,
    handleBlur,
    cleanErrors,
    handleSubmit,
    handleEmailFocus,
    handleEmailChange,
    onDismissSnackBar,
  };
}
