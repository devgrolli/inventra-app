import React, { useEffect, useState, useRef } from "react";
import { Card } from "@screens/Home/components/Card";
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { DataComponent } from "@core/constants/data";
import LottieView from "lottie-react-native";
import Aprove from "@assets/animations/aprove.json";

import { ViewCard, ViewLabel } from "./styles";
import { useAuth } from "context/AuthContext";

interface CardProps {
  img: string;
  navigateRoute: string;
  nameLabel: string;
  size?: number;
}

type CardGroup = CardProps[];

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [expanded, setExpanded] = useState(false);
  const { user, signOut } = useAuth();

  const animationHeight = useRef(new Animated.Value(100)).current;

  const toggleAnimation = () => {
    const finalValue = expanded ? 100 : 200;

    Animated.timing(animationHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const renderCards = (cards: CardGroup) => {
    return cards.map((card, index) => (
      <Card
        key={index}
        size={card.size}
        img={card.img}
        loading={loading}
        navigateRoute={card.navigateRoute}
        nameLabel={card.nameLabel}
      />
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ViewLabel>
          <Text style={{ fontSize: 20 }}>Guia</Text>
        </ViewLabel>

        {/* <TouchableWithoutFeedback onPress={toggleAnimation}>
          <Animated.View
            style={{
              width: "100%", // Ajuste conforme necessário
              height: animationHeight, // Altura animada
              backgroundColor: "skyblue", // Ajuste conforme necessário
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Pressione para {expanded ? "Diminuir" : "Aumentar"}</Text>
          </Animated.View>
        </TouchableWithoutFeedback> */}

        {/* <LottieView
          style={{ width: 200, height: 200 }}
          source={Aprove}
          autoPlay={true}
          resizeMode="contain"
          loop={true}
        /> */}

        {DataComponent.cardDataHome.map((group: CardGroup, index: number) => (
          <ViewCard key={index}>{renderCards(group)}</ViewCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
