import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";
import * as S from "./styles";
import Skeleton from "@core/components/Skeleton";
import { Colors } from "@core/constants/colors";

interface User {
  name: string;
}

const ButtonUser = () => {
  const { user } = useAuth();
  const getFirstName = (user: User | null) => user?.name?.split(" ")[0];
  const loading = user === null;

  return (
    <TouchableOpacity onPress={() => navigate("Home")}>
      {loading ? (
        <View style={{ marginLeft: 30 }}>
          <Skeleton
            width={50}
            height={50}
            borderRadius={100}
            backgroundColor={Colors.blueLoading}
          />
        </View>
      ) : (
        <S.IconView>
          <FontAwesome size={22} name="user" color="#80B3FF" />
        </S.IconView>
      )}
      <S.ViewName>
        {loading ? (
          <Skeleton
            width={120}
            height={20}
            borderRadius={10}
            backgroundColor={Colors.blueLoading}
          />
        ) : (
          <S.TextUser>Olá, {getFirstName(user)}</S.TextUser>
        )}
      </S.ViewName>
    </TouchableOpacity>
  );
};

export default ButtonUser;
