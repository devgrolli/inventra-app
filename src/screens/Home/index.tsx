import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import User from "@assets/images/users.png";
import Lucros from "@assets/images/lucros.png";
import Cesta from "@assets/images/cesta.png";
import { Card } from "@components/Card";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{ flexDirection: "row", paddingTop: 10, paddingLeft: 4 }}
          >
            <Card loading={loading} img={User} navigateRoute="Home" />
            <Card loading={loading} img={Cesta} navigateRoute="Teste" />
          </View>

          <View style={{ flexDirection: "row", paddingLeft: 4 }}>
            <Card loading={loading} img={Lucros} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
