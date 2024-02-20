import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { navigate } from "@core/navigation/navigator";
import Logo from "@assets/images/Login-logo.png";
import * as S from "./styles";

const LogoHeader = () => {
  return (
    <TouchableOpacity onPress={() => navigate("Home")}>
      <S.IconView>
        <Image source={Logo} style={{ height: 70, width: 70 }} />
      </S.IconView>
    </TouchableOpacity>
  );
};

export default LogoHeader;
