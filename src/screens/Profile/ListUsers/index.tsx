import React from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LoadingPage } from "@core/components/LoadingPage";
import { useListUsers } from "./useListUser";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons/faLockOpen";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Switch } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { Colors } from "@core/constants/colors";
import { ErrorList } from "@core/components/Error/List";
import UserItem from "./UserItem";
import WithoutImgUser from "@assets/images/without-img-user.png";
import * as S from "./styles";

export default function ListUsers() {
  const {
    users,
    loading,
    snapPoints,
    errorFetch,
    selectedUser,
    bottomSheetModalRef,
    getAllUsers,
    onChangeDetails,
    handleUpdateUser,
    handlePresentModalPress,
  } = useListUsers();

  if (loading) {
    return <LoadingPage />;
  }

  if (errorFetch) {
    return (
      <ErrorList
        onPress={getAllUsers}
        textError="Ocorreu um erro ao buscar os usuários!"
      />
    );
  }

  return (
    <View>
      <S.Container>
        <S.ViewProductsHeader>
          <S.TextHeader>Nome</S.TextHeader>
          <S.TextHeader>E-mail</S.TextHeader>
          <S.TextHeader> </S.TextHeader>
        </S.ViewProductsHeader>

        <FlatList
          contentContainerStyle={{
            paddingRight: 15,
            paddingLeft: 15,
            paddingBottom: 100,
          }}
          data={users}
          keyExtractor={(item: any) => item.cpf.toString()}
          renderItem={({ item }) => (
            <UserItem
              item={item}
              onPress={() => handlePresentModalPress(item)}
            />
          )}
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

          <S.AvatarContainer>
            <Avatar
              rounded
              source={WithoutImgUser}
              containerStyle={{
                shadowColor: Colors.blue,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
              }}
              // source={{
              //   uri: "https://media.licdn.com/dms/image/D4D03AQH831Yo3eXp5w/profile-displayphoto-shrink_800_800/0/1703015487827?e=1717027200&v=beta&t=kZZV55PGB7mMRySA8xNbGxn1eZGohlfKH7a4MJHZACo",
              // }}
              size="xlarge"
            />
          </S.AvatarContainer>

          <S.DetailNameView>
            <S.DetailNameText>{selectedUser?.fullName}</S.DetailNameText>
            <S.DetailEmailText>{selectedUser?.email}</S.DetailEmailText>
          </S.DetailNameView>

          <S.ContainerList>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <S.Icon>
                <FontAwesomeIcon
                  icon={selectedUser?.isValidated ? faLockOpen : faLock}
                  color={Colors.blue}
                  size={25}
                />
              </S.Icon>
              <View style={{ marginLeft: 15 }}>
                <S.TitleList>Acesso ao App</S.TitleList>
                <S.Access>Libere acesso ao usuário no aplicativo</S.Access>
              </View>

              <Switch
                color={Colors.blue}
                style={{ marginLeft: 10 }}
                value={selectedUser?.isValidated}
                onValueChange={onChangeDetails}
              />
            </View>
          </S.ContainerList>

          <S.ContainerSave>
            <S.ButtonSaveView onPress={handleUpdateUser}>
              <S.ButtonSaveText>Salvar</S.ButtonSaveText>
            </S.ButtonSaveView>
          </S.ContainerSave>
        </BottomSheetModal>
      </S.Container>
    </View>
  );
}
