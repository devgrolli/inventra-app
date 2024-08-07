import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { white, black, primary, orange, greyDark, greyLight } = Colors;
const { openSansBold } = CommonString.fonts;

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 90px;
`;

export const ViewProducts = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${white};
  border-radius: 15px;
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
`;

export const ViewProductsHeader = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: ${primary};
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
`;

export const TextProd = styled.Text`
  font-weight: 400;
  font-size: 14px;
`;

export const TextProdHeader = styled.Text`
  color: ${white};
  font-size: 16px;
  font-family: Verdana;
  font-weight: 400;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ViewContextSheet = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  width: 90%;
`;

export const ViewProductSheet = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const ProductNameSheet = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const ProductQtdSheet = styled.Text`
  padding-top: 10px;
  padding-right: 10px;
  font-size: 14px;
  align-items: center;
  color: ${greyDark};
`;

export const ButtonProductView = styled.TouchableOpacity`
  background-color: ${white};
  border-color: ${primary};
  border-width: 1px;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35; */
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ButtonSale = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35px; */
  flex-direction: row;
`;

export const ProductViewText = styled.Text`
  color: ${primary};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  padding-right: 10px;
`;

export const SaleText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  padding-right: 10px;
`;

export const ProductView = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 35px;
`;

export const HeaderLabelSheet = styled.Text`
  font-family: ${openSansBold};
  color: ${greyDark};
  font-size: 16px;
  letter-spacing: 0.2px;
`;

export const ViewHeadeSheet = styled.View`
  align-items: center;
  width: 100%;
  /* margin-top: -20px; */
  padding-bottom: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${greyLight};
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  padding-bottom: 10px;
  background-color: ${white};
  box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.1);
`;

export const Badge = styled.View`
  background-color: ${orange};
  border-radius: 10px;
  padding: 5px 10px;
  justify-content: center;
`;
