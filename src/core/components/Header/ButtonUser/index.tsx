import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import { Colors } from "@core/constants/colors";
import { storage } from "@utils/storage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/home/homeTypes";
import { setLoading } from "redux/home/homeActions";
import Skeleton from "@core/components/Skeleton";
import * as S from "./styles";

interface User {
  name: string;
}

const ButtonUser = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.home.loading);
  const [user, setUser] = useState<User | null>(null);
  const getFirstName = (user: User | null) => user?.name?.split(" ")[0];

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(await storage.getItem("userInfo"));
      if (user?.id) {
        dispatch(setLoading(false));
        setUser(user);
      }
    };

    fetchData();
  }, []);

  return (
    <TouchableOpacity onPress={() => navigate("Home")}>
      {loading ? (
        <View style={{ marginLeft: 30 }}>
          <Skeleton
            width={50}
            height={50}
            borderRadius={100}
            backgroundColor={Colors.primaryLoading}
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
            borderRadius={5}
            backgroundColor={Colors.primaryLoading}
          />
        ) : (
          <S.TextUser>Olá, {getFirstName(user)}</S.TextUser>
        )}
      </S.ViewName>
    </TouchableOpacity>
  );
};

export default ButtonUser;
