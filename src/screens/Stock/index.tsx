import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { Avatar } from "react-native-elements";

import * as S from "./styles";

export default function Stock() {
  return (
    <ScrollView>
      <S.Container>
        <S.AvatarContainer>
          <Avatar
            rounded
            source={{
              uri: "https://media.licdn.com/dms/image/D4D03AQH831Yo3eXp5w/profile-displayphoto-shrink_400_400/0/1703015487827?e=1708560000&v=beta&t=MlEAWa3e8q5BstH1b61oX-bkc6z7Kh3yd5SDpx5-L5U",
            }}
            size="xlarge"
          />
        </S.AvatarContainer>

        <S.ViewConfigures>
          <View style={{ padding: 20 }}>
            <S.LabelConfig>ESTOQUE</S.LabelConfig>
          </View>
        </S.ViewConfigures>
      </S.Container>
    </ScrollView>
  );
}
