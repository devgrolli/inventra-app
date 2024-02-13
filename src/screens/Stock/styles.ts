import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ViewProducts = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.white};
  border-radius: 20px;
  shadow-color: ${Colors.black};
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
  border-radius: 20px;
  background-color: ${Colors.blue};
  shadow-color: ${Colors.black};
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
  color: ${Colors.white};
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
  /* padding: 10px; */
  margin: 10px;
  width: 90%;
`;

export const ViewProductSheet = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const InfoProductSheet  = styled.Text`
  font-size: 20px;
`;

export const ButtonProductView  = styled.TouchableOpacity`
  background-color: ${Colors.blue};
  border-radius: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
`;

export const ProductViewText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.8px;
`;

export const ProductView = styled.View`
width: 100%;
padding-left: 20px;
padding-right: 20px;
position: absolute;
bottom: 35px;
`;

