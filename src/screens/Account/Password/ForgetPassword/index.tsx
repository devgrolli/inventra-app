import React, { memo, useState } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { DSButton } from "@core/components/Button";
import { Colors } from "@core/constants/colors";
import Snack from "@core/components/SnackBar";
import * as S from "./styles";
import { useForgotPassword } from "./useForgotPassword";
import { goBack } from "@core/navigation/navigator";
import { getPaddingKeyboard } from "@utils/keyboardConfig";

const ForgotPassword = memo(() => {
  const {
    email,
    error,
    focus,
    loading,
    snackbar,
    handleBlur,
    cleanErrors,
    handleSubmit,
    handleEmailFocus,
    handleEmailChange,
    onDismissSnackBar,
  } = useForgotPassword();

  return (
    <>
      <ScrollView style={{ flex: 1, paddingTop: getPaddingKeyboard() }}>
        <View style={{ alignItems: "center" }}>
          <S.LabelLogo>Recuperação de Senha</S.LabelLogo>
        </View>

        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <View style={{ paddingBottom: 15 }}>
            <S.Input
              value={email}
              autoCapitalize="none"
              onChangeText={handleEmailChange}
              placeholder="E-mail"
              hasError={error}
              isFocused={focus}
              onBlur={handleBlur}
              onFocus={handleEmailFocus}
              onSubmitEditing={handleSubmit}
            />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <DSButton
            loading={loading}
            onPress={handleSubmit}
            name="Enviar"
            typeButton="primary"
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: Colors.brown }}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snack
        color={error ? Colors.orange : Colors.blue}
        setSnackVisible={onDismissSnackBar}
        snackVisible={snackbar.visible}
        errors={snackbar.message}
        clearErrors={cleanErrors}
      />
    </>
  );
});

export default ForgotPassword;
