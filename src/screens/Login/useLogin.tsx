import React, { useEffect, useState, useCallback } from "react";
import { navigate } from "@core/navigation/navigator";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { CommonString } from "@core/constants/strings";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "context/AuthContext";
import authService from "services/authService";

export function useLogin() {
  const { signIn } = useAuth();

  const [msgError, setMsgError] = useState("Erro ao realizar login");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [cpfFocused, setCpfFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");

  const getKeyboardVerticalOffset = useCallback(() => {
    const statusBarHeight = getStatusBarHeight();
    const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;

    return Platform.OS === "ios"
      ? 120
      : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
  }, []);

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setCpfFocused(false);
  };

  const handleCpfFocus = () => {
    setCpfFocused(true);
    setPasswordFocused(false);
  };

  const handleBlur = () => {
    setPasswordFocused(false);
    setCpfFocused(false);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const regexCPF = cpf.replace(/[\.-]/g, "");
      const userLogged = await authService.login(regexCPF, password);

      signIn({
        name: userLogged?.data?.body.fullName,
        id: userLogged?.data?.access_token, // Access the access_token property from the data object
      });

      navigate("Home");
    } catch (error: any) {
      setMsgError(error?.message);
      setError(true);
      setLoading(false);
    }
  };

  const onDismissSnackBar = () => setVisible(false);

  const handleTestError = () => {
    setError(true);
    setLoading(true);
  };

  const cleanErrors = () => {
    setError(false);
    setLoading(false);
  };

  return {
    cpf,
    error,
    loading,
    msgError,
    password,
    cpfFocused,
    passwordFocused,
    setCpf,
    handleBlur,
    cleanErrors,
    setPassword,
    handleSubmit,
    handleCpfFocus,
    handleTestError,
    onDismissSnackBar,
    handlePasswordFocus,
    getKeyboardVerticalOffset,
  };
}
