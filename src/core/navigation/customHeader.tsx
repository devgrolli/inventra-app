import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { Colors } from "@core/constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { goBack } from "./navigator";

export const CustomHeadeGoBack = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} color={Colors.blue} size={16} />
        <Text style={{ fontSize: 16, marginLeft: 0, color: Colors.blue }}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
