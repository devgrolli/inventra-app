import React from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { LoadingPage } from "@core/components/LoadingPage";
import { DataComponent } from "@core/constants/data";
import { Avatar } from "react-native-elements";
import { Colors } from "@core/constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { ErrorList } from "@core/components/Error/List";
import { useStock } from "./useSotck";
import * as S from "./styles";

export default function Stock() {
  const {
    products,
    loading,
    errorFetch,
    snapPoints,
    productSelected,
    bottomSheetModalRef,
    getProducts,
    handlePresentModalPress,
    handleSheetChanges,
  } = useStock();

  if (loading) {
    return <LoadingPage />;
  }

  if (errorFetch) {
    return (
      <ErrorList
        onPress={getProducts}
        textError="Ocorreu um erro ao buscar produtos"
      />
    );
  }

  const renderRow = ({ item }: any) => (
    <TouchableOpacity onPress={() => handlePresentModalPress(item)}>
      <S.ViewProducts>
        <Avatar rounded source={{ uri: item.imageUrl }} size="small" />
        <S.TextProd>{item.name}</S.TextProd>
        <S.TextProd>{item.qtd}</S.TextProd>
      </S.ViewProducts>
    </TouchableOpacity>
  );

  return (
    <S.Container>
      <S.ViewProductsHeader>
        <S.TextProdHeader>Código</S.TextProdHeader>
        <S.TextProdHeader>Produto</S.TextProdHeader>
        <S.TextProdHeader>Estoque</S.TextProdHeader>
      </S.ViewProductsHeader>

      <FlatList
        contentContainerStyle={{ paddingRight: 15, paddingLeft: 15 }}
        data={DataComponent.stockData}
        keyExtractor={(item: any) => item.productId.toString()}
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
        onChange={handleSheetChanges}
      >
        <View style={{ alignItems: "flex-end", paddingRight: 20 }}>
          <TouchableOpacity
            onPress={() => bottomSheetModalRef.current?.dismiss()}
          >
            <FontAwesomeIcon icon={faXmark} color={Colors.grey} size={20} />
          </TouchableOpacity>
        </View>
        <S.ViewHeadeSheet>
          <S.HeaderLabelSheet>Detalhes do Produto</S.HeaderLabelSheet>
        </S.ViewHeadeSheet>

        <S.Separator />

        <S.ViewContextSheet>
          <Avatar
            containerStyle={{ shadowColor: "black" }}
            source={{ uri: productSelected.imageUrl }}
            size="xlarge"
          />

          <S.ViewProductSheet>
            <S.ProductNameSheet>{productSelected.name}</S.ProductNameSheet>
            <S.ProductQtdSheet>
              Estoque
              <S.Badge>
                <Text style={{ color: "white" }}>{productSelected.qtd}</Text>
              </S.Badge>
            </S.ProductQtdSheet>
          </S.ViewProductSheet>
        </S.ViewContextSheet>

        {/* <S.Divider /> */}
        <S.ProductView>
          <S.ButtonProductView>
            <S.ProductViewText>Adicionar Estoque</S.ProductViewText>

            {/* <FontAwesomeIcon
              icon={faPlus}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            /> */}

            {/* <FontAwesome name="bars" size={20} color={Colors.white} /> */}
          </S.ButtonProductView>

          <S.ButtonSale>
            <S.SaleText>Vender</S.SaleText>
            {/* <FontAwesomeIcon
              icon={faBarcode}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            /> */}
            {/* <FontAwesome name="bars" size={20} color={Colors.white} /> */}
          </S.ButtonSale>
        </S.ProductView>
      </BottomSheetModal>
    </S.Container>
  );
}
