import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Colors } from "@core/constants/colors";
import { DSButton } from "@core/components/Button";
import { CommonString } from "@core/constants/strings";
import InputController from "@core/components/Input/InputController";
import Snack from "@core/components/SnackBar";
import { useSignUp } from "./useSignUp";
import * as S from "./styles";

export default function SignUp() {
  const { birthDate, cpf, email, fullName, phone, password } =
    CommonString.errors.fieldsRequiredRegister;
  const { white, orange } = Colors;

  const {
    snackVisible,
    isLoading,
    control,
    errors,
    onSubmit,
    clearErrors,
    handleSubmit,
    setSnackVisible,
    getKeyboardVerticalOffset,
  } = useSignUp();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={getKeyboardVerticalOffset()}
    >
      <ScrollView style={{ flex: 1, backgroundColor: white }}>
        <S.LabelOne>
          Inven<S.LabelTwo>tra</S.LabelTwo>
        </S.LabelOne>
        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <InputController
            control={control}
            name="fullName"
            type="custom"
            placeholder="Nome Completo"
            error={errors.fullName}
            msgError={fullName}
          />

          <InputController
            control={control}
            name="cpf"
            type="cpf"
            placeholder="CPF"
            secureTextEntry={false}
            error={errors.cpf}
            options={{ maskType: "CPF" }}
            msgError={cpf}
          />

          <InputController
            control={control}
            name="birthDate"
            type="datetime"
            placeholder="Data Nascimento"
            error={errors.birthDate}
            options={{ format: "DD/MM/YYYY" }}
            msgError={birthDate}
          />

          <InputController
            control={control}
            name="phone"
            type="custom"
            placeholder="Telefone"
            error={errors.phone}
            options={{ mask: "(99) 99999-9999" }}
            msgError={phone}
          />

          <InputController
            control={control}
            name="email"
            type="custom"
            placeholder="E-mail"
            error={errors.email}
            msgError={email}
          />

          <InputController
            control={control}
            name="password"
            type="custom"
            placeholder="Senha"
            error={errors.password}
            msgError={password}
            secureTextEntry
          />
        </View>

        <View style={{ alignItems: "center", paddingBottom: 150 }}>
          <DSButton
            loading={isLoading}
            onPress={handleSubmit(onSubmit)}
            name="Cadastrar"
            typeButton="primary"
          />
        </View>
      </ScrollView>

      <Snack
        color={orange}
        setSnackVisible={setSnackVisible}
        snackVisible={snackVisible}
        errors={errors?.generic?.message}
        clearErrors={clearErrors}
      />
    </KeyboardAvoidingView>
  );
}
