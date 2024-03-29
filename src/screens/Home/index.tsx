import React, { useState, useRef } from "react";
import { Card } from "@screens/Home/Card";
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { DataComponent } from "@core/constants/data";

import { ViewCard, ViewLabel } from "./styles";
import { useAuth } from "context/AuthContext";
import { Colors } from "@core/constants/colors";
import { LoadingPage } from "@core/components/LoadingPage";

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
        navigateRoute={card.navigateRoute}
        nameLabel={card.nameLabel}
      />
    ));
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
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
        {DataComponent.cardDataHome.map((group: CardGroup, index: number) => (
          <ViewCard key={index}>{renderCards(group)}</ViewCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
