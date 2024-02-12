import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LoadingPage } from "@core/components/LoadingPage";
import { DataComponent } from "@core/constants/data";
import { Avatar } from "react-native-elements";

// Supondo que S seja seu módulo de estilos
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
    }, 5000);

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
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Id: {productSelected.productId}</Text>
          <Text>Produto: {productSelected.name}</Text>
          <Text>Quantidade em Estoque: {productSelected.qtd}</Text>

          <S.AvatarContainer>
            {/* <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50 }} /> */}
            <Avatar
              rounded
              source={{ uri: productSelected.imageUrl }}
              size="xlarge"
            />
          </S.AvatarContainer>
        </View>
      </BottomSheetModal>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white", // Fundo precisa ser não-transparente para a sombra aparecer
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
