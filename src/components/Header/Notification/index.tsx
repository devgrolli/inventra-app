import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { navigate } from "@core/navigation/navigator";
import { Colors } from "@core/constants/colors";
import * as S from "./styles";

const NotificationBadge = ({ count }: any) => {
  return (
    <S.Badge>
      <S.TextBadge>{count}</S.TextBadge>
    </S.Badge>
  );
};

const Notification = ({ notificationCount = 3 }) => {
  return (
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
