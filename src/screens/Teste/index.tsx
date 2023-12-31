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

import { Snackbar } from "react-native-paper";

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

  return (
    <ScrollView>
      {/* <View style={{ flexDirection: "row" }}> */}

      {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        /> */}
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
          // returnKeyType="done"
          // maxLength={9}
        />

        <S.Button onPress={handleLogin}>
          <S.TextButton>UAHEUAHEAHUEHA</S.TextButton>
        </S.Button>

        <S.Button onPress={onToggleSnackBar}>
          <S.TextButton>testar</S.TextButton>
          {/* {visible ? "Hide" : "Show"} */}
        </S.Button>

        {/* <S.Button title="Entrar" onPress={handleLogin} /> */}
      </View>

      {/* </View> */}
      <Snackbar
        style={styles.toast}
        visible={true}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Fechar",
          textColor: "#ffff",
          onPress: () => {
            // Do something
          },
        }}
      >
        Usuário/senha inválidos
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end", // Empurra o conteúdo para o final da tela
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  toast: {
    backgroundColor: "#F8572D",
    color: "#ffff",
    height: 60,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
    // justify-content: center;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // align-items: center;
  },
});
