import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, Text, StyleSheet } from "react-native";
import { LoadingPage } from "@core/components/LoadingPage";
import { Avatar } from "react-native-elements";
import { DataComponent } from "@core/constants/data";

// Supondo que S seja seu módulo de estilos
import * as S from "./styles";

export default function Stock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) {
    return <LoadingPage />;
  }

  // Definição da linha da tabela
  const renderRow = ({ item }: any) => (
    <S.ViewProducts>
      <S.TextProd>{item.productId}</S.TextProd>
      <S.TextProd>{item.name}</S.TextProd>
      <S.TextProd>{item.qtd}</S.TextProd>
    </S.ViewProducts>
  );

  return (
    <S.Container>
      <S.ViewProductsHeader>
        <S.TextProdHeader>Código</S.TextProdHeader>
        <S.TextProdHeader>Produto</S.TextProdHeader>
        <S.TextProdHeader>Quantidade</S.TextProdHeader>
      </S.ViewProductsHeader>

      <FlatList
        contentContainerStyle={{ paddingRight: 15, paddingLeft: 15 }}
        data={DataComponent.stockData}
        keyExtractor={(item) => item.productId.toString()}
        renderItem={renderRow}
      />
    </S.Container>
  );
}
