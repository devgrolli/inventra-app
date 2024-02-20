import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import Initial from "@assets/images/logo-initial.png";
import { Colors } from "@core/constants/colors";
import * as S from "./styles";
import { navigate } from "@core/navigation/navigator";

export const InitialScreen = () => {
  const headerHeight = 100;
  const paddingTop = headerHeight * 0.9;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop,
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <Animated.Image
        source={Initial}
        style={{
          height: "45%",
          resizeMode: "contain",
          opacity: fadeAnim,
        }}
      />

      <Animated.View style={{ opacity: fadeAnim }}>
        <S.LabelLogo>
          App <S.Label2>Stock</S.Label2>
        </S.LabelLogo>
      </Animated.View>

      <S.ProductView>
        <S.ButtonProductView onPress={() => navigate("Login")}>
          <S.ProductViewText>Entrar</S.ProductViewText>
        </S.ButtonProductView>
      </S.ProductView>
    </View>
  );
};
