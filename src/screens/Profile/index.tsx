import React, { memo, useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { Switch } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPen,
  faBell,
  faBellSlash,
  faLocationDot,
  faBarcode,
  faChartPie,
  faUserCheck,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Importar o tipo para o prop de ícone

import { Colors } from "@core/constants/colors";

interface ProfileOptionProps {
  icon: IconProp;
  title: string;
  access?: string;
  disabled?: boolean;
  hasSwitch?: boolean;
  onPress: () => void;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

const ListItem: React.FC<ProfileOptionProps> = memo(
  ({
    icon,
    title,
    access,
    disabled,
    hasSwitch,
    onPress,
    switchValue,
    onSwitchChange,
  }) => (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={{
          marginBottom: 25,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <S.Icon>
            <FontAwesomeIcon icon={icon} color={Colors.blue} size={25} />
          </S.Icon>
          <View style={{ marginLeft: 15, width: hasSwitch ? "70%" : "90%" }}>
            <S.TitleList>{title}</S.TitleList>
            <S.Access>{access}</S.Access>
          </View>
        </View>

        {hasSwitch && (
          <Switch
            color={Colors.blue}
            value={switchValue} // Usado aqui
            onValueChange={onSwitchChange} // Usado aqui
          />
        )}
      </View>
    </TouchableOpacity>
  )
);

export default function ProfileScreen() {
  const { signOut } = useAuth();

  const navigateToEditProfile = useCallback(() => navigate("EditProfile"), []);
  const navigateToListUsers = useCallback(() => navigate("ListUsers"), []);

  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      <S.Container>
        <S.ContainerList>
          <ListItem
            onPress={navigateToEditProfile}
            icon={faPen}
            title="Perfil"
            access="Acesse seu perfil para atualizar"
          />

          <ListItem
            onPress={navigateToListUsers}
            icon={faUserCheck}
            title="Gerenciar Acesso"
            access="Libere acesso dos usuários no aplicativo"
          />

          <ListItem
            onPress={navigateToListUsers}
            icon={faBarcode}
            title="Vendas"
            access="Planeje suas vendas"
          />

          <ListItem
            onPress={navigateToListUsers}
            icon={faChartPie}
            title="Movimentação"
            access="Veja as movimentações do seu negócio"
          />

          <ListItem
            disabled
            icon={faBell}
            title="Notificações"
            access="Receba noticias no seu app"
            switchValue={false}
            onSwitchChange={(newValue) => {
              console.log(newValue);
            }}
            hasSwitch
          />

          <ListItem
            disabled
            icon={faLocationDot}
            title="Localização"
            access="Ative sua localização"
            switchValue={false}
            onSwitchChange={(newValue) => {
              console.log(newValue);
            }}
            hasSwitch
          />

          <ListItem
            onPress={signOut}
            icon={faArrowRightFromBracket}
            title="Sair"
          />
        </S.ContainerList>
      </S.Container>
    </ScrollView>
  );
}
