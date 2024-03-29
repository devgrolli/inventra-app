import React, { memo } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { DSButton } from "@core/components/Button";
import { Colors } from "@core/constants/colors";
import { useForgotPassword } from "./useForgotPassword";
import { goBack } from "@core/navigation/navigator";
import { getPaddingKeyboard } from "@utils/keyboardConfig";
import Snack from "@core/components/SnackBar";
import * as S from "./styles";

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
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 100 * 0.4,
          backgroundColor: Colors.white,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <S.LabelLogo>Esqueceu a Senha?</S.LabelLogo>

          <View style={{ marginTop: 10, width: "90%" }}>
            <S.SubTitle>
              Digite o e-mail da sua conta e em instantes, receberá o código
              para recuperar a senha.
            </S.SubTitle>
          </View>
        </View>

        <S.Container>
          <View style={{ marginBottom: 15 }}>
            <S.Input
              value={email}
              onChangeText={handleEmailChange}
              placeholder="E-mail"
              hasError={error}
              isFocused={focus}
              onBlur={handleBlur}
              onFocus={handleEmailFocus}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </S.Container>

        <View style={{ alignItems: "center" }}>
          <DSButton
            loading={loading}
            onPress={handleSubmit}
            name="Enviar"
            typeButton="primary"
          />
        </View>
      </ScrollView>

      <Snack
        color={error ? Colors.orange : Colors.blue}
        onDismiss={onDismissSnackBar}
        snackVisible={snackbar.visible}
        msg={snackbar.message}
        onClose={cleanErrors}
      />
    </>
  );
});

export default ForgotPassword;
