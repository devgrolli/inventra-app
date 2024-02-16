import React, { useEffect, useState } from "react";
import { Card } from "@screens/Home/components/Card";
import { View, Text, ScrollView } from "react-native";
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
  const { user, signOut } = useAuth();

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
