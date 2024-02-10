import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { LoadingPage } from "@core/ds/Loading";
import { Avatar } from "react-native-elements";

import * as S from "./styles";

export default function Stock() {
  const loading = true;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) {
    return <LoadingPage />;
  }

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
