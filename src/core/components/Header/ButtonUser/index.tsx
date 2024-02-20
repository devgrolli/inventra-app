import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";
import * as S from "./styles";

const ButtonUser = () => {
  const { user } = useAuth();

  console.log("UAHEUHA", user?.name.split(" ")[0]);

  return (
    <TouchableOpacity onPress={() => navigate("Home")}>
      <S.IconView>
        <FontAwesome size={22} name="user" color="#80B3FF" />
      </S.IconView>
      <S.ViewName>
        {/* <S.TextUser numberOfLines={1} ellipsizeMode="tail"> */}
        <S.TextUser>Olá, {user?.name.split(" ")[0]}</S.TextUser>
      </S.ViewName>
    </TouchableOpacity>
  );
};

export default ButtonUser;
