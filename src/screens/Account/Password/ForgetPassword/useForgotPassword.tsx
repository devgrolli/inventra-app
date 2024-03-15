// import React, { useState, useCallback } from "react";
import React, { useState, useCallback, useEffect } from "react";

import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";
import authService from "services/authService";

import { useRoute } from "@react-navigation/native";
import { storage } from "@utils/storage";
// import { useDispatch } from "react-redux";
// import {
//   selectState,
//   setCpf,
// } from "redux/login/loginActions";

export function useForgotPassword() {
  // const dispatch = useDispatch();
  // const cpf = selectState("cpf");
  const route = useRoute();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [emailRecovery, setEmailRecovery] = useState(null);
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "Erro ao enviar o email",
  });

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handleEmailFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const forgot = await authService.forgotPassword(email);
      console.log("forgot", forgot.data.message);
      navigate("RecoveryPassword", {
        emailRecovery: email,
        messageSnack: { msg: forgot?.data?.message, visible: true },
      });
      // setSnackbar({ visible: true, message: forgot?.data?.message });
      setEmailRecovery(forgot?.data?.email);
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
  }, [email, signIn, navigate]);

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
    emailRecovery,
    handleBlur,
    cleanErrors,
    handleSubmit,
    handleEmailFocus,
    handleEmailChange,
    onDismissSnackBar,
  };
}
