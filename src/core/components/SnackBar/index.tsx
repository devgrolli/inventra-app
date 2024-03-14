import React from "react";
import { Text } from "react-native";
import { Colors } from "@core/constants/colors";
import { Snackbar } from "react-native-paper";

const Snack = ({
  color,
  errors,
  snackVisible,
  clearErrors,
  setSnackVisible,
}: {
  color: string;
  errors: any;
  snackVisible: boolean;
  clearErrors: () => void;
  setSnackVisible: (visible: boolean) => void;
}) => (
  <Snackbar
    style={{
      left: 0,
      right: 0,
      bottom: 0,
      height: "auto",
      borderRadius: 15,
      position: "absolute",
      alignItems: "center",
      backgroundColor: color,
    }}
    onDismiss={() => setSnackVisible(false)}
    visible={snackVisible}
    action={{
      label: "Fechar",
      textColor: Colors.white,
      onPress: clearErrors,
    }}
  >
    <Text style={{ color: Colors.white, letterSpacing: 0.5 }}>{errors}</Text>
  </Snackbar>
);

export default Snack;