import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { orange, orangeLight, black, blue } = Colors;
const { openSansBold } = CommonString.fonts;

export const Button = styled.TouchableOpacity`
  background-color: ${blue};
  border-radius: 15px;
  height: 50px;
  justify-content: center;
  align-items: center;
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${openSansBold};
  font-size: 18px;
  letter-spacing: 0.8px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 100px;
`;

export const LabelOne = styled.Text`
  padding-top: 20px;
  color: ${blue};
  align-items: center;
  text-align: center;
  font-size: 70px;
  font-family: ${openSansBold};
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const LabelTwo = styled.Text`
  color: ${orangeLight};
  align-items: center;
  text-align: center;
  font-size: 70px;
  font-family: ${openSansBold};
`;
