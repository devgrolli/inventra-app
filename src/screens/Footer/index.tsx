import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de ter o pacote de ícones instalado
import { Navbar, Button } from "./styles";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";

export default function Footer() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleRoute = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <Navbar>
      <Button onPress={() => handleRoute("Home")}>
        <FontAwesome name="home" size={24} style={{ color: "#9f9f9f" }} />
        <Text style={{ color: "#9f9f9f", fontSize: 10 }}>Início</Text>
      </Button>
      <Button onPress={() => handleRoute("Perfil")}>
        <FontAwesome name="user" size={24} style={{ color: "#9f9f9f" }} />
        <Text style={{ color: "#9f9f9f", fontSize: 10 }}>Perfil</Text>
      </Button>
      <Button onPress={() => handleRoute("Home")}>
        <FontAwesome name="gear" size={24} style={{ color: "#9f9f9f" }} />
        <Text style={{ color: "#9f9f9f", fontSize: 10 }}>Ajuda</Text>
      </Button>
    </Navbar>
  );
}
