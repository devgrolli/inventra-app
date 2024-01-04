import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import User from "@assets/images/users.png";
import Lucros from "@assets/images/lucros.png";
import Moviment from "@assets/images/movement.png";
import Basket from "@assets/images/basket.png";
import Loss from "@assets/images/loss.png";
import Relatorio from "@assets/images/relatorio.png";
import { Card } from "@components/Card";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingLeft: 32, paddingTop: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 20 }}>Guia</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Card
            loading={loading}
            img={User}
            navigateRoute="Home"
            nameLabel="Clientes"
          />
          <Card
            loading={loading}
            img={Basket}
            navigateRoute="Teste"
            nameLabel="Estoque"
          />
          <Card
            loading={loading}
            img={Moviment}
            navigateRoute="Home"
            nameLabel="Vendas"
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Card
            loading={loading}
            img={Lucros}
            navigateRoute="Lucros"
            nameLabel="Lucros"
          />
          <Card
            loading={loading}
            img={Loss}
            navigateRoute="Home"
            nameLabel="Prejuízos"
          />
          <Card
            loading={loading}
            img={Relatorio}
            navigateRoute="Home"
            nameLabel="Relatórios"
          />
        </View>
      </ScrollView>
    </View>
  );
}
