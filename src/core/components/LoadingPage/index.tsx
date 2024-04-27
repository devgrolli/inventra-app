import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import box3D from "@assets/animations/box3d.json";

export const LoadingPage = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          style={{
            width: 400,
            height: 400,
          }}
          source={box3D}
          autoPlay
          resizeMode="contain"
          loop
          speed={3}
        />
      </View>
    </View>
  );
};
