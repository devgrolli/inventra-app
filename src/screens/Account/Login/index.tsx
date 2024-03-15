import React, { memo } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "@assets/images/Login-logo.png";
import { DSButton } from "@core/components/Button";
import { Snackbar } from "react-native-paper";
import { useLogin } from "./useLogin";
import { Colors } from "@core/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";
import { navigate } from "@core/navigation/navigator";
import Snack from "@core/components/SnackBar";

const Login = memo(() => {
  const {
    cpf,
    error,
    loading,
    focus,
    snackbar,
    rightIcon,
    paddingTop,
    passwordVisibility,
    handlePasswordVisibility,
    cleanErrors,
    onDismissSnackBar,
    handlePasswordChange,
    handleCpfFocus,
    handleBlur,
    handlePasswordFocus,
    handleSubmit,
    handleCpfChange,
    getKeyboardVerticalOffset,
  } = useLogin();

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
            App <S.Label2>Stock</S.Label2>
          </S.LabelLogo>
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
            <S.InputCpf
              type="cpf"
              value={cpf}
              onChangeText={handleCpfChange}
              placeholder="CPF"
              hasError={error}
              isFocused={focus.cpf}
              onBlur={handleBlur}
              onFocus={handleCpfFocus}
              onSubmitEditing={handleSubmit}
            />
          </View>

          <S.InputPassowrd hasError={error} isFocused={focus.password}>
            <S.InputWithEye
              onBlur={handleBlur}
              onFocus={handlePasswordFocus}
              placeholder="Senha"
              autoCapitalize="none"
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              enablesReturnKeyAutomatically
              onChangeText={handlePasswordChange}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={18}
                color="#232323"
              />
            </Pressable>
          </S.InputPassowrd>

          <View
            style={{
              alignContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={() => navigate("ForgotPassword")}>
              <Text style={{ color: Colors.blue }}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <DSButton
            loading={loading}
            onPress={handleSubmit}
            name="Entrar"
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
          <Text style={{ color: Colors.greyDark }}>Não possui cadastro? </Text>
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text style={{ color: Colors.blue }}>Cadastre-se</Text>
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

      <Snackbar
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: "auto",
          borderRadius: 15,
          position: "absolute",
          alignItems: "center",
          backgroundColor: error ? Colors.orange : Colors.blue,
        }}
        visible={snackbar.visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Fechar",
          textColor: Colors.white,
          onPress: cleanErrors,
        }}
      >
        <S.textToast>{snackbar.message}</S.textToast>
      </Snackbar>
    </KeyboardAvoidingView>
  );
});

export default Login;
