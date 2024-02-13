import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { LoadingPage } from "@core/components/LoadingPage";
import { DataComponent } from "@core/constants/data";
import { Avatar } from "react-native-elements";
import { Colors } from "@core/constants/colors";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import * as S from "./styles";

export default function Stock() {
  const [visible, setVisible] = useState(false);
  const [productSelected, setProductSelected] = useState("");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback((item: any) => {
    setProductSelected(item);
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) {
    return <LoadingPage />;
  }

  const renderRow = ({ item }: any) => (
    <TouchableOpacity onPress={() => handlePresentModalPress(item)}>
      <S.ViewProducts>
        <S.TextProd>{item.productId}</S.TextProd>
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
        <S.ViewContextSheet>
          <Avatar
            rounded
            source={{ uri: productSelected.imageUrl }}
            size="xlarge"
          />

          <S.ViewProductSheet>
            <S.InfoProductSheet>
              Produto: {productSelected.name}
            </S.InfoProductSheet>
            <S.InfoProductSheet>
              Quantidade em Estoque: {productSelected.qtd}
            </S.InfoProductSheet>
          </S.ViewProductSheet>
          {/* <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50 }} /> */}
        </S.ViewContextSheet>

        <S.ProductView>
          <S.ButtonProductView>
            <S.ProductViewText>Movimentar Estoque</S.ProductViewText>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              color={Colors.white}
              style={{ marginLeft: 10 }}
              size={20}
            />
            {/* <FontAwesome name="bars" size={20} color={Colors.white} /> */}
          </S.ButtonProductView>
        </S.ProductView>
      </BottomSheetModal>
    </S.Container>
  );
}
