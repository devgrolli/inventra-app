import React, { useState } from "react";
import { Card } from "@screens/Home/components/Card";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ViewCard, ViewLabel } from "./styles";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ViewLabel>
          <Text style={{ fontSize: 20 }}>Guia</Text>
        </ViewLabel>

        <ViewCard>
          <Card
            size={30}
            img="handshake-o"
            loading={loading}
            navigateRoute="Home"
            nameLabel="Clientes"
          />
          <Card
            img="shopping-cart"
            loading={loading}
            navigateRoute="Stock"
            nameLabel="Estoque"
          />
          <Card
            size={35}
            img="barcode"
            loading={loading}
            navigateRoute="Home"
            nameLabel="Vendas"
          />
        </ViewCard>

        <ViewCard>
          <Card
            size={30}
            img="line-chart"
            loading={loading}
            navigateRoute="Lucros"
            nameLabel="Lucros"
          />
          <Card
            img="cart-arrow-down"
            loading={loading}
            navigateRoute="Home"
            nameLabel="Prejuízos"
          />
          <Card
            size={32}
            img="pie-chart"
            loading={loading}
            navigateRoute="Home"
            nameLabel="Relatórios"
          />
        </ViewCard>
      </ScrollView>
    </View>
  );
}
