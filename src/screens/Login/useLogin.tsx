import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

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

  const handleSubmit = () => {};
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
    loading,
    emailFocused,
    passwordFocused,
    handleBlur,
    handlePasswordFocus,
    handleEmailFocus,
    cleanErrors,
    handleSubmit,
    handleTestError,
    onDismissSnackBar,
  };
}
