// import React, { useState, useCallback } from "react";
import React, { useState, useCallback, useEffect } from "react";

import { navigate } from "@core/navigation/navigator";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { CommonString } from "@core/constants/strings";
import { useAuth } from "context/AuthContext";
import authService from "services/authService";

import { IconName } from "./types";
import { useRoute } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import {
//   selectState,
//   setCpf,
// } from "redux/login/loginActions";

export function useLogin() {
  // const dispatch = useDispatch();
  // const cpf = selectState("cpf");
  const route = useRoute();
  const { signIn } = useAuth();

  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rightIcon, setRightIcon] = useState<IconName>("eye");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [focus, setFocus] = useState({ cpf: false, password: false });
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "Erro ao realizar login",
  });

  const headerHeight = 100;
  const paddingTop = headerHeight * 0.9;

  useEffect(() => {
    if ((route.params as { signupSuccess?: boolean })?.signupSuccess) {
      setSnackbar({ visible: true, message: "Cadastro realizado com sucesso" });
    }
  }, [(route.params as { signupSuccess?: boolean })?.signupSuccess]);

  const getKeyboardVerticalOffset = useCallback(() => {
    const statusBarHeight = getStatusBarHeight();
    const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;
    return Platform.OS === "ios"
      ? 120
      : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
  }, []);

  const handleCpfChange = useCallback((text: string) => {
    setCpf(text);
  }, []);

  const handlePasswordFocus = useCallback(() => {
    setFocus({ cpf: false, password: true });
  }, []);

  const handleCpfFocus = useCallback(() => {
    setFocus({ cpf: true, password: false });
  }, []);

  const handleBlur = useCallback(() => {
    setFocus({ cpf: false, password: false });
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const regexCPF = cpf?.replace(/[\.-]/g, "");
      const userLogged = await authService.login(regexCPF, password);

      signIn({
        name: userLogged?.data?.body.fullName,
        id: userLogged?.data?.access_token,
      });

      navigate("Home");
    } catch (error: any) {
      setSnackbar({ visible: true, message: error?.message });
      setError(true);
      setLoading(false);
    }
  }, [cpf, password, signIn, navigate]);

  const onDismissSnackBar = useCallback(() => {
    setSnackbar({ visible: false, message: "" });
  }, []);

  const cleanErrors = useCallback(() => {
    setError(false);
    setLoading(false);
    setSnackbar({ visible: false, message: "" });
  }, []);

  const handlePasswordVisibility = useCallback(() => {
    setPasswordVisibility((prevVisibility) => !prevVisibility);
    setRightIcon((prevIcon) => (prevIcon === "eye" ? "eye-off" : "eye"));
  }, []);

  // const handleCpfChange = (text: string) => {
  //   dispatch(setCpf(text));
  // };

  return {
    cpf,
    error,
    loading,
    focus,
    snackbar,
    rightIcon,
    paddingTop,
    passwordVisibility,
    handlePasswordVisibility,
    cleanErrors,
    onDismissSnackBar,
    handlePasswordChange,
    handleCpfFocus,
    handleBlur,
    handlePasswordFocus,
    handleSubmit,
    handleCpfChange,
    getKeyboardVerticalOffset,
  };
}
