import React, { useCallback } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  Text,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { CommonString } from "@core/constants/strings";
import { DSButton } from "@core/ds/Button";
import { Snackbar } from "react-native-paper";
import Logo from "@assets/images/Login-logo.png";
import { useLogin } from "./useLogin";
import * as S from "./styles";

export default function Login() {
  const {
    error,
    loading,
    emailFocused,
    passwordFocused,
    handleBlur,
    cleanErrors,
    handleSubmit,
    handleTestError,
    onDismissSnackBar,
    handleEmailFocus,
    handlePasswordFocus,
  } = useLogin();

  const getKeyboardVerticalOffset = useCallback(() => {
    const statusBarHeight = getStatusBarHeight();
    const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;

    return Platform.OS === "ios"
      ? 120
      : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={getKeyboardVerticalOffset()}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} />
          <S.LabelLogo>
            App <S.Label2> Stock</S.Label2>
          </S.LabelLogo>
        </View>

        <View style={{ padding: 20 }}>
          <S.Input
            hasError={error}
            isFocused={emailFocused}
            placeholder="E-mail"
            onBlur={handleBlur}
            onFocus={handleEmailFocus}
            onSubmitEditing={handleSubmit}
            keyboardType="email-address"
          />
          <S.Input
            hasError={error}
            isFocused={passwordFocused}
            placeholder="Senha"
            onBlur={handleBlur}
            onFocus={handlePasswordFocus}
            onSubmitEditing={handleSubmit}
            secureTextEntry
          />

          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <DSButton
              loading={loading}
              onPress={handleTestError}
              name="Entrar"
              typeButton="primary"
            />
          </View>
        </View>
      </ScrollView>

      <Snackbar
        style={styles.toast}
        visible={error}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Fechar",
          textColor: "#ffff",
          onPress: cleanErrors,
        }}
      >
        <Text style={styles.textToast}>Usuário/senha inválidos</Text>
      </Snackbar>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  toast: {
    backgroundColor: "#fd5025",
    color: "#ffff",
    height: 60,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  textToast: {
    letterSpacing: 0.5,
    color: "#ffffff",
    fontWeight: "400",
  },
});
