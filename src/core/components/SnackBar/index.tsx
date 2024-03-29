import React from "react";
import { Text } from "react-native";
import { Colors } from "@core/constants/colors";
import { Snackbar } from "react-native-paper";
import { CommonString } from "@core/constants/strings";

const Snack = ({
  bottom = 30,
  color,
  msg,
  snackVisible,
  onClose,
  onDismiss,
}: {
  bottom?: number;
  color: string;
  msg: any;
  snackVisible: boolean;
  onClose: () => void;
  onDismiss: (visible: boolean) => void;
}) => (
  <Snackbar
    style={{
      left: 0,
      right: 0,
      bottom: bottom,
      height: "auto",
      borderRadius: 15,
      position: "absolute",
      alignItems: "center",
      backgroundColor: color,
    }}
    onDismiss={() => onDismiss(false)}
    visible={snackVisible}
    action={{
      label: "Fechar",
      textColor: Colors.white,
      onPress: onClose,
    }}
  >
    <Text
      style={{
        color: Colors.white,
        letterSpacing: 0.5,
        fontFamily: CommonString.fonts.openSans,
      }}
    >
      {msg}
    </Text>
  </Snackbar>
);

export default Snack;
