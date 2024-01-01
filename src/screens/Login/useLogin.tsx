import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

  const isLogged = useSelector((state: any) => state.user.profile.isLogged);
  const dispatch = useDispatch();

  const handleLogin = () => {};
  const handleSubmit = () => {};

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

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
    handleSubmit,
    cleanErrors,
    handleTestError,
    onDismissSnackBar,
  };
}
