import React, { FC } from "react";
import AlertPage from "@assets/images/alert.png";
import { View, Image, Text, Button } from "react-native";

interface ErrorListProps {
  onPress: () => void;
  textError: string;
}

export const ErrorList: FC<ErrorListProps> = ({ onPress, textError }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        source={AlertPage}
        style={{
          height: 100,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <View style={{ paddingTop: 20 }}>
        <Text>{textError}</Text>
        <Button title="Tentar novamente" onPress={onPress} />
      </View>
    </View>
  );
};
