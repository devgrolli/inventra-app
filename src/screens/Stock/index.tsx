import React from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { LoadingPage } from "@core/components/LoadingPage";
import { DataComponent } from "@core/constants/data";
import { Avatar } from "react-native-elements";
import { Colors } from "@core/constants/colors";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft";
import { faBarcode } from "@fortawesome/free-solid-svg-icons/faBarcode";

import * as S from "./styles";
import { useStock } from "./useSotck";
import AlertPage from "@assets/images/alert.png";

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
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image
          source={AlertPage}
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <View style={{ paddingTop: 20 }}>
          <Text>Ocorreu um erro ao buscar produtos</Text>
          <Button title="Tentar novamente" onPress={getProducts} />
        </View>
      </View>
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
        {/* <TouchableOpacity
          onPress={() => bottomSheetModalRef.current?.collapse()}
        >
          <FontAwesomeIcon icon={faXmark} size={25} />
        </TouchableOpacity> */}
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
              Em estoque {productSelected.qtd}
            </S.ProductQtdSheet>
          </S.ViewProductSheet>
        </S.ViewContextSheet>

        {/* <S.Divider /> */}
        <S.ProductView>
          <S.ButtonProductView>
            <S.ProductViewText>Adicionar Estoque</S.ProductViewText>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            />
            {/* <FontAwesome name="bars" size={20} color={Colors.white} /> */}
          </S.ButtonProductView>

          <S.ButtonSale>
            <S.ProductViewText>Vender</S.ProductViewText>
            <FontAwesomeIcon
              icon={faBarcode}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            />
            {/* <FontAwesome name="bars" size={20} color={Colors.white} /> */}
          </S.ButtonSale>
        </S.ProductView>
      </BottomSheetModal>
    </S.Container>
  );
}
