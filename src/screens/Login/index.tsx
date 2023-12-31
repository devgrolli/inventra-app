import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";

import { DSButton } from "@core/ds/Button";
import { Snackbar } from "react-native-paper";
import { Logo } from "@assets/images/Login-logo.png";

import * as S from "./styles";
const screenHeight = Dimensions.get("window").height;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  const handleLogin = () => {};
  const handleChange = () => {};
  const handleSubmit = () => {};

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleTestError = () => {
    setError(true);
  };

  const cleanErrors = () => {
    setError(false);
  };

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} />
          <S.LabelLogo>
            App <S.Label2> Stock</S.Label2>
          </S.LabelLogo>
        </View>

        <View style={{ padding: 20 }}>
          <S.Input
            hasError={error}
            // defaultValue={"uaheuhaeuahe"}
            placeholder="E-mail"
            // value={"uaehua"}
            onChangeText={handleChange}
            onSubmitEditing={handleSubmit}
            keyboardType="numeric"
            returnKeyType="done"
            maxLength={9}
          />
          <S.Input
            hasError={error}
            // defaultValue={"uaheuhaeuahe"}
            placeholder="Senha"
            // value={"uaehua"}
            onChangeText={handleChange}
            onSubmitEditing={handleSubmit}
            keyboardType="numeric"
          />

          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <DSButton
              onPress={handleTestError}
              name="Entrar"
              typeButton="secundary"
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
    </>
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
