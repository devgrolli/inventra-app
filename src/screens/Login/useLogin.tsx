import React, { useEffect, useState, useCallback } from "react";
import { navigate } from "@core/navigation/navigator";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { CommonString } from "@core/constants/strings";
import { useSelector, useDispatch } from "react-redux";

export function useLogin() {
  const [msgError, setMsgError] = useState("Erro ao realizar login");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getKeyboardVerticalOffset = useCallback(() => {
    const statusBarHeight = getStatusBarHeight();
    const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;

    return Platform.OS === "ios"
      ? 120
      : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
  }, []);

  const handleEmailFocus = () => {
    setEmailFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setEmailFocused(false);
  };

  const handleBlur = () => {
    setEmailFocused(false);
    setPasswordFocused(false);
  };

  const isLogged = useSelector((state: any) => state.user.profile.isLogged);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const emailteste = "Login";
    const senhateste = "123456";

    if (email === emailteste && senhateste === password) {
      navigate("Home");
    } else {
      // setError(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$i.test(email));
      setMsgError("E-mail ou senha inválido");
      setError(true);
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

  useEffect(() => {
    dispatch({ type: "LOGGED" });
  });

  return {
    error,
    email,
    msgError,
    password,
    loading,
    emailFocused,
    passwordFocused,
    getKeyboardVerticalOffset,
    setEmail,
    setPassword,
    handleBlur,
    handlePasswordFocus,
    handleEmailFocus,
    cleanErrors,
    handleSubmit,
    handleTestError,
    onDismissSnackBar,
  };
}
