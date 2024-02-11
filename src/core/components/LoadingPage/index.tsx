import React from "react";
import { View, Image } from "react-native";
import spinnerGif from "@assets/images/ballSpinner.gif"; // Certifique-se de que o caminho está correto

export const LoadingPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={spinnerGif} style={{ width: 180, height: 180 }} />
    </View>
  );
};
