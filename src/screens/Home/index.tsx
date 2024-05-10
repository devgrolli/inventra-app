import React, { useState, useRef, useCallback } from "react";
import { Animated, RefreshControl, ScrollView, Text, View } from "react-native";
import { DataComponent } from "@core/constants/data";
import {
  ViewCircles,
  Root,
  ViewListCards,
  ViewLabel,
  LabelSales,
  LabelSalesValue,
  ViewList,
  LabelInList,
  NumberInList,
  InnerView,
  IconLabelView,
  Divider,
} from "./styles";
import { Circule } from "@core/components/Cicule";
import { CirculeGroup } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUsers, faInbox } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@core/constants/colors";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Skeleton from "@core/components/Skeleton";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/home/homeTypes";
import { setLoading } from "redux/home/homeActions";

interface ListViewProps {
  icon: IconProp;
  label: string;
  number?: string;
}

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.home.loading);
  const [expanded, setExpanded] = useState(false);
  const animationHeight = useRef(new Animated.Value(100)).current;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(setLoading(true));

    setTimeout(() => {
      setRefreshing(false);

      dispatch(setLoading(false));
    }, 2000);
  }, []);

  const toggleAnimation = () => {
    const finalValue = expanded ? 100 : 200;

    Animated.timing(animationHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const renderCircules = (circules: CirculeGroup) => {
    return circules.map((circule, index) => (
      <Circule
        key={index}
        size={circule.size}
        img={circule.img}
        navigateRoute={circule.navigateRoute}
        nameLabel={circule.nameLabel}
        loading={loading}
      />
    ));
  };

  const ListView = ({ icon, label, number }: ListViewProps) => {
    return loading ? (
      <ViewList>
        <Skeleton
          widthFull
          height={50}
          borderRadius={10}
          backgroundColor={Colors.white}
        />
      </ViewList>
    ) : (
      <ViewList>
        <InnerView>
          <IconLabelView>
            <FontAwesomeIcon icon={icon} color={Colors.black} size={20} />
            <LabelInList>{label}</LabelInList>
          </IconLabelView>
          {number && <NumberInList>{number}</NumberInList>}
        </InnerView>
      </ViewList>
    );
  };

  const TotalSales = () => {
    return loading ? (
      <>
        <Skeleton
          width={65}
          height={20}
          borderRadius={5}
          backgroundColor={Colors.white}
        />
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Skeleton
            width={90}
            height={20}
            borderRadius={5}
            backgroundColor={Colors.white}
          />
        </View>
      </>
    ) : (
      <>
        <LabelSales>Vendas</LabelSales>
        <LabelSalesValue>R$ 1.000,00</LabelSalesValue>
      </>
    );
  };

  return (
    <Root>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ViewLabel>
          <TotalSales />
        </ViewLabel>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 10, paddingTop: 10 }}
        >
          {DataComponent.cardDataHome.map(
            (group: CirculeGroup, index: number) => (
              <ViewCircles key={index}>{renderCircules(group)}</ViewCircles>
            )
          )}
          <View style={{ width: 15 }} />
        </ScrollView>

        <ListView icon={faUsers} label="Clientes" number="0" />

        <ListView icon={faInbox} label="Fazer Pedido" />

        <Divider top={10} bottom={15} />

        {/* <TouchableWithoutFeedback onPress={toggleAnimation}>
          <Animated.View
            style={{
              width: "100%", // Ajuste conforme necessário
              height: animationHeight, // Altura animada
              backgroundColor: "skyblue", // Ajuste conforme necessário
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Pressione para {expanded ? "Diminuir" : "Aumentar"}</Text>
          </Animated.View>
        </TouchableWithoutFeedback> */}
        {/* <ViewListCards>
          {DataComponent.cardDataHome.map((group: CardGroup, index: number) => (
            <ViewCard key={index}>{renderCards(group)}</ViewCard>
          ))}
        </ViewListCards> */}
      </ScrollView>
    </Root>
  );
};

export default HomeScreen;
