import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import * as S from "../styles";
import { User } from "../type";

interface UserListItemProps {
  item: User;
  onPress: () => void;
}

const UserListItem: React.FC<UserListItemProps> = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <S.ViewListUsers>
      <S.AvatarContainer>
        <Avatar
          rounded
          source={{
            uri: "https://media.licdn.com/dms/image/D4D03AQH831Yo3eXp5w/profile-displayphoto-shrink_800_800/0/1703015487827?e=1717027200&v=beta&t=kZZV55PGB7mMRySA8xNbGxn1eZGohlfKH7a4MJHZACo",
          }}
          size="large"
        />
      </S.AvatarContainer>
      <View style={{ width: "70%" }}>
        <S.usersName numberOfLines={1} ellipsizeMode="tail">
          {item.fullName}
        </S.usersName>
        <S.usersEmail>{item.email}</S.usersEmail>
        <S.Badge typeColor={item.isValidated}>
          <S.BadgeText>
            {item.isValidated ? "Liberado" : "Sem acesso"}
          </S.BadgeText>
        </S.Badge>
      </View>
    </S.ViewListUsers>
  </TouchableOpacity>
);

export default UserListItem;
