import React from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Text,
  Button,
  TextInput,
} from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { LoadingPage } from "@core/components/LoadingPage";
import { DataComponent } from "@core/constants/data";
import { Avatar } from "react-native-elements";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons/faFloppyDisk";

import { Switch } from "react-native-paper";
// import { Switch } from "react-native-switch";

import * as S from "./styles";
import { useListUsers } from "./useListUser";
import AlertPage from "@assets/images/alert.png";
import { Colors } from "@core/constants/colors";

export default function ListUsers() {
  const {
    users,
    snapPoints,
    selectedUser,
    bottomSheetModalRef,
    setSelectedUser,
    getAllUsers,
    handleUpdateUser,
    handlePresentModalPress,
  } = useListUsers();

  const renderRow = ({ item }: any) => (
    <TouchableOpacity onPress={() => handlePresentModalPress(item)}>
      <S.ViewListUsers>
        <S.usersText>{item.fullName}</S.usersText>
        <S.usersText>{item.email}</S.usersText>
      </S.ViewListUsers>
    </TouchableOpacity>
  );

  return (
    <S.Container>
      <S.ViewProductsHeader>
        <S.TextHeader>Código</S.TextHeader>
        <S.TextHeader>Produto</S.TextHeader>
        <S.TextHeader>Estoque</S.TextHeader>
      </S.ViewProductsHeader>

      <FlatList
        contentContainerStyle={{ paddingRight: 15, paddingLeft: 15 }}
        data={users}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderRow}
      />

      <BottomSheetModal
        backdropComponent={BottomSheetBackdrop}
        ref={bottomSheetModalRef}
        index={1}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 7,
        }}
        snapPoints={snapPoints}
        enableDismissOnClose={true}
        onChange={() => null}
      >
        <S.ViewHeadeSheet>
          <S.HeaderLabelSheet>Usuário</S.HeaderLabelSheet>
        </S.ViewHeadeSheet>

        <S.Separator />

        <View style={{ padding: 20 }}>
          <S.Input
            onChangeText={(text) =>
              setSelectedUser({ ...selectedUser, fullName: text })
            }
            value={selectedUser.fullName}
          />
          <S.Input
            onChangeText={(text) =>
              setSelectedUser({ ...selectedUser, email: text })
            }
            value={selectedUser.email}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Liberar acesso? </Text>
            <Switch
              value={selectedUser.isValidated}
              color={Colors.blue}
              onValueChange={(value) =>
                setSelectedUser({ ...selectedUser, isValidated: value })
              }
            />
          </View>
        </View>

        <S.ProductView>
          <S.ButtonProductView onPress={handleUpdateUser}>
            <S.ProductViewText>Salvar</S.ProductViewText>
            <FontAwesomeIcon
              icon={faFloppyDisk}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            />
          </S.ButtonProductView>
        </S.ProductView>
      </BottomSheetModal>
    </S.Container>
  );
}
