import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const ButtonProductView = styled.TouchableOpacity`
  background-color: ${Colors.blue};
  border-radius: 15px;
  height: 50px;
  justify-content: center;
  align-items: center;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
`;

export const ProductViewText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.8px;
`;

export const ProductView = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 100px;
`;

export const LabelLogo = styled.Text`
  padding-top: 20px;
  color: #FF882A;
  align-items: center;
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const Label2 = styled.Text`
  color: ${Colors.blue};
  align-items: center;
  text-align: center;
  font-size: 70px;
`;
