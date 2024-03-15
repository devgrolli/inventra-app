import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";
import * as S from "./styles";

export default function ProfileScreen() {
  const { signOut } = useAuth();

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
            <S.LabelConfig>Configuração</S.LabelConfig>
          </View>

          <S.Separator />

          <View style={{ paddingTop: 15 }}>
            <TouchableOpacity onPress={() => navigate("EditProfile")}>
              <S.ViewListItem>
                <FontAwesome
                  name="pencil"
                  size={30}
                  style={{ color: "#acafb3", marginRight: 10 }}
                />
                <S.LabelLink>Alterar perfil</S.LabelLink>
              </S.ViewListItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate("ListUsers")}>
              <S.ViewListItem>
                <FontAwesome
                  name="users"
                  size={25}
                  style={{ color: "#acafb3", marginRight: 10 }}
                />
                <S.LabelLink>Gerenciar usuários</S.LabelLink>
              </S.ViewListItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => signOut()}>
              <S.ViewListItem>
                <FontAwesome
                  name="sign-out"
                  size={30}
                  style={{ color: "#acafb3", marginRight: 10 }}
                />
                <S.LabelLink>Sair</S.LabelLink>
              </S.ViewListItem>
            </TouchableOpacity>
          </View>
        </S.ViewConfigures>
      </S.Container>
    </ScrollView>
  );
}
