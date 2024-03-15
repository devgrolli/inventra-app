import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormData } from "./types";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { CommonString } from "@core/constants/strings";
import { Platform } from "react-native";
import authService from "services/authService";
import { navigate } from "@core/navigation/navigator";

export function useSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const headerHeight = 100;
  const paddingTop = headerHeight * 0.9;
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    register("fullName", { required: true });
    register("cpf", { required: true });
    register("birthDate", { required: true });
    register("email", { required: true });
    register("phone", { required: true });
    register("password", { required: true });
    register("generic", { required: false });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    setSnackVisible(false);
    try {
      setIsLoading(true);
      const body = {
        ...data,
        cpf: data.cpf.replace(/\D/g, ""),
      };
      await authService.signUp(body);
      navigate("Login", { signupSuccess: true });
    } catch (error: any) {
      console.log("error", error.message[0]);
      setError("generic", {
        type: "manual",
        message: Array.isArray(error.message)
          ? error.message[0]
          : error.message,
      });
      setSnackVisible(true);
      setIsLoading(false);
    }
  };

  const getKeyboardVerticalOffset = useCallback(() => {
    const statusBarHeight = getStatusBarHeight();
    const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;
    return Platform.OS === "ios"
      ? 120
      : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
  }, []);

  const clearErrors = useCallback(() => {
    setSnackVisible(false);
    setIsLoading(false);
  }, []);

  return {
    snackVisible,
    paddingTop,
    isLoading,
    control,
    errors,
    onSubmit,
    clearErrors,
    handleSubmit,
    setSnackVisible,
    getKeyboardVerticalOffset,
  };
}
