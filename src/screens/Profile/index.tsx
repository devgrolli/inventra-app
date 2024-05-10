import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  faPen,
  faBell,
  faLocationDot,
  faBarcode,
  faChartPie,
  faUserCheck,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { MenuProfileList } from "../Profile/MenuProfileList";
import { Colors } from "@core/constants/colors";
import { useProfile } from "./useProfile";
import Snack from "@core/components/SnackBar";
import * as S from "./styles";

export default function ProfileScreen() {
  const {
    notifiction,
    onNotify,
    signOut,
    setOnNofify,
    onChangeNotification,
    navigateToListUsers,
    navigateToEditProfile,
  } = useProfile();

  const profileOptions = [
    {
      onPress: navigateToEditProfile,
      icon: faPen,
      title: "Perfil",
      access: "Acesse seu perfil para atualizar",
    },
    {
      onPress: navigateToListUsers,
      icon: faUserCheck,
      title: "Gerenciar Acesso",
      access: "Libere acesso dos usuários no aplicativo",
    },
    {
      onPress: navigateToListUsers,
      icon: faBarcode,
      title: "Vendas",
      access: "Planeje suas vendas",
    },
    {
      onPress: navigateToListUsers,
      icon: faChartPie,
      title: "Movimentação",
      access: "Veja as movimentações do seu negócio",
    },
    {
      disabled: true,
      icon: faBell,
      title: "Notificações",
      access: "Receba noticias no seu app",
      switchValue: notifiction,
      onSwitchChange: onChangeNotification,
      hasSwitch: true,
    },
    {
      disabled: true,
      icon: faLocationDot,
      title: "Localização",
      access: "Ative sua localização",
      switchValue: false,
      hasSwitch: true,
    },
    {
      onPress: signOut,
      icon: faArrowRightFromBracket,
      title: "Sair",
    },
  ];

  return (
    <>
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <S.Container>
          <S.ContainerList>
            {profileOptions.map((option, index) => (
              <MenuProfileList key={index} {...option} />
            ))}
          </S.ContainerList>
        </S.Container>
      </ScrollView>

      <Snack
        bottom={0}
        color={Colors.primary}
        snackVisible={onNotify}
        msg="As notificações foram habilitadas"
        onDismiss={() => setOnNofify(false)}
        onClose={() => setOnNofify(false)}
      />
    </>
  );
}
