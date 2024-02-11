import React from "react";
import {
  View,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { DSButton } from "@core/components/Button";
import { Snackbar } from "react-native-paper";
import { useLogin } from "./useLogin";
import { Colors } from "@core/constants/colors";
import Logo from "@assets/images/Login-logo.png";
import * as S from "./styles";

export default function Login() {
  const {
    error,
    loading,
    email,
    msgError,
    password,
    emailFocused,
    passwordFocused,
    getKeyboardVerticalOffset,
    setEmail,
    setPassword,
    handleBlur,
    cleanErrors,
    handleSubmit,
    handleTestError,
    onDismissSnackBar,
    handleEmailFocus,
    handlePasswordFocus,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            onChangeText={(text) => setEmail(text)}
            value={email}
            hasError={error}
            isFocused={emailFocused}
            placeholder="E-mail"
            onBlur={handleBlur}
            onFocus={handleEmailFocus}
            onSubmitEditing={handleSubmit}
            keyboardType="email-address"
          />
          <S.Input
            onChangeText={(text) => setPassword(text)}
            value={password}
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
              onPress={handleSubmit}
              name="Entrar"
              typeButton="primary"
            />
          </View>
        </View>
      </ScrollView>

      <Snackbar
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: 60,
          borderRadius: 10,
          position: "absolute",
          alignItems: "center",
          backgroundColor: Colors.orange,
        }}
        visible={error}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Fechar",
          textColor: Colors.white,
          onPress: cleanErrors,
        }}
      >
        <S.textToast>{msgError}</S.textToast>
      </Snackbar>
    </KeyboardAvoidingView>
  );
}
