import React, { useEffect, useRef } from "react";
import Initial from "@assets/images/logo-initial.png";
import { View, Animated } from "react-native";
import { Colors } from "@core/constants/colors";
import { navigate } from "@core/navigation/navigator";
import * as S from "./styles";

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
        <S.LabelOne>
          Inven<S.LabelTwo>tra</S.LabelTwo>
        </S.LabelOne>
      </Animated.View>

      <S.ContainerButton>
        <S.Button onPress={() => navigate("Login")}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.ContainerButton>
    </View>
  );
};
