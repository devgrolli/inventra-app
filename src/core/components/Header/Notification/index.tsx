import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import { Colors } from "@core/constants/colors";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "redux/home/homeTypes";
import Skeleton from "@core/components/Skeleton";

const NotificationBadge = ({ count }: any) => {
  return (
    <S.Badge>
      <S.TextBadge>{count}</S.TextBadge>
    </S.Badge>
  );
};

const Notification = ({ notificationCount = 3 }) => {
  const loading = useSelector((state: RootState) => state.home.loading);

  return loading ? (
    <View
      style={{
        position: "relative",
        width: 45,
        alignItems: "center",
        marginRight: 8,
      }}
    >
      <Skeleton
        width={30}
        height={30}
        borderRadius={5}
        backgroundColor={Colors.primaryLoading}
      />
    </View>
  ) : (
    <TouchableOpacity
      onPress={() => navigate("Home")}
      style={{ position: "relative", width: 45, alignItems: "center" }}
    >
      {notificationCount > 0 && <NotificationBadge count={notificationCount} />}
      <S.IconView>
        <Feather name="message-square" size={25} color={Colors.white} />
      </S.IconView>
    </TouchableOpacity>
  );
};

export default Notification;
