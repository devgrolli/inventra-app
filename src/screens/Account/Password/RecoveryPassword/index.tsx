import React, { memo } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { useRecoveryPassword } from "./useRecoveryPassword";
import { CommonString } from "@core/constants/strings";
import { DSButton } from "@core/components/Button";
import { Colors } from "@core/constants/colors";
import InputController from "@core/components/Input/InputController";
import CountdownTimer from "@core/components/Countdown";
import padlock from "@assets/images/padlock.png";
import Snack from "@core/components/SnackBar";
import { CodeValidationViewProps, NewPasswordViewProps } from "./types";
import * as S from "./styles";

const { white, blue, orange, grey } = Colors;

const CodeValidationView = ({
  ref,
  value,
  styles,
  expiry,
  loading,
  CELL_COUNT,
  resendMail,
  onChangeCode,
  handleTokenPassword,
  getCellOnLayoutHandler,
}: CodeValidationViewProps) => (
  <>
    <View style={{ paddingTop: 10, backgroundColor: white }}>
      <S.Label>Insira o Código</S.Label>
      <S.SubtitleCode>
        Um código de 4 dígitos foi enviado para o seu email
      </S.SubtitleCode>
    </View>
    <S.ContainerCode>
      <CodeField
        ref={ref}
        value={value}
        onChangeText={onChangeCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </S.ContainerCode>

    {expiry > 0 && (
      <CountdownTimer expiryTimestamp={expiry} onPress={resendMail} />
    )}

    <S.CenteredView>
      <DSButton
        loading={loading}
        onPress={handleTokenPassword}
        name="Validar"
        typeButton="primary"
      />
    </S.CenteredView>
  </>
);

const NewPasswordView = ({
  errors,
  control,
  loading,
  password,
  handleSubmit,
  handleNewPassword,
}: NewPasswordViewProps) => (
  <>
    <S.CenteredView>
      <S.StyledImage source={padlock} />
    </S.CenteredView>

    <S.PaddedView>
      <S.Label>Nova senha</S.Label>
      <S.SubtitleCode>Proteja sua conta com uma senha segura</S.SubtitleCode>
    </S.PaddedView>

    <S.ContainerInputs>
      <InputController
        control={control}
        name="passwordOne"
        type="custom"
        placeholder="Digite uma nova senha"
        error={errors.passwordOne}
        msgError={password}
        secureTextEntry
      />
      <InputController
        control={control}
        name="passwordTwo"
        type="custom"
        placeholder="Repita a senha"
        error={errors.passwordTwo}
        msgError={password}
        secureTextEntry
      />
    </S.ContainerInputs>

    <S.CenteredView>
      <DSButton
        loading={loading}
        onPress={handleSubmit(handleNewPassword)}
        name="Salvar"
        typeButton="primary"
      />
    </S.CenteredView>
  </>
);

const RecoveryPassword = memo(() => {
  const { password } = CommonString.errors.fieldsRequiredRegister;
  const {
    ref,
    value,
    errors,
    expiry,
    control,
    loading,
    snackbar,
    errorCode,
    CELL_COUNT,
    codeValidated,
    resendMail,
    cleanErrors,
    onChangeCode,
    handleSubmit,
    handleNewPassword,
    onDismissSnackBar,
    handleTokenPassword,
    getCellOnLayoutHandler,
  } = useRecoveryPassword();
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 100 * 0.4,
          backgroundColor: white,
        }}
      >
        {codeValidated ? (
          <NewPasswordView
            control={control}
            password={password}
            errors={errors}
            handleSubmit={handleSubmit}
            handleNewPassword={handleNewPassword}
            loading={loading}
          />
        ) : (
          <CodeValidationView
            control={control}
            password={password}
            errors={errors}
            ref={ref}
            value={value}
            onChangeCode={onChangeCode}
            CELL_COUNT={CELL_COUNT}
            getCellOnLayoutHandler={getCellOnLayoutHandler}
            styles={styles}
            expiry={expiry}
            resendMail={resendMail}
            handleTokenPassword={handleTokenPassword}
            loading={loading}
          />
        )}
      </ScrollView>

      <Snack
        color={errorCode ? orange : blue}
        onDismiss={onDismissSnackBar}
        snackVisible={snackbar.visible}
        msg={snackbar.message}
        onClose={cleanErrors}
      />
    </>
  );
});

const styles = StyleSheet.create({
  root: { flex: 1, padding: 0 },
  title: { textAlign: "center", fontSize: 30, borderRadius: 30 },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: 50,
    height: 55,
    fontSize: 20,
    lineHeight: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: grey,
    textAlign: "center",
    margin: 20,
  },
  focusCell: {
    borderWidth: 2,
    borderColor: blue,
  },
});

export default RecoveryPassword;
