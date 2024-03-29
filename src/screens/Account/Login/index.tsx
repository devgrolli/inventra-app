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
import { useLogin } from "./useLogin";
import { Colors } from "@core/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import Snack from "@core/components/SnackBar";
import * as S from "./styles";

const Login = memo(() => {
  const { white, blue, greyDark, orange } = Colors;
  const {
    cpf,
    error,
    loading,
    focus,
    snackbar,
    rightIcon,
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
      <ScrollView style={{ flex: 1, backgroundColor: white }}>
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} />
          <S.LabelLogo>
            Inven<S.Label2>tra</S.Label2>
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
              <Text style={{ color: blue }}>Esqueceu a senha?</Text>
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
          <Text style={{ color: greyDark }}>Não possui cadastro? </Text>
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text style={{ color: blue }}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snack
        color={error ? orange : blue}
        setSnackVisible={onDismissSnackBar}
        snackVisible={snackbar.visible}
        errors={snackbar.message}
        clearErrors={cleanErrors}
      />
    </KeyboardAvoidingView>
  );
});

export default Login;
