import React, { useState } from "react";
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
import { TextInputMask } from "react-native-masked-text";

import * as S from "./styles";

export default function Login() {
  const {
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
  } = useLogin();

  const headerHeight = 100;
  const paddingTop = headerHeight * 0.9;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={getKeyboardVerticalOffset()}
    >
      <ScrollView style={{ flex: 1, paddingTop }}>
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} />
          <S.LabelLogo>
            App <S.Label2> Stock</S.Label2>
          </S.LabelLogo>
        </View>

        <View style={{ padding: 20 }}>
          <S.InputCpf
            type="cpf"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            placeholder="CPF"
            hasError={error}
            isFocused={cpfFocused}
            onBlur={handleBlur}
            onFocus={handleCpfFocus}
            onSubmitEditing={handleSubmit}
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
          borderRadius: 15,
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
