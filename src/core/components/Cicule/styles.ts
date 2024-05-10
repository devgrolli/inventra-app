import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { greyDark, greyLight, black, white } = Colors;
const { openSans, openSansBold } = CommonString.fonts;

export const CirculeView = styled.View`
  /* background-color: ${white}; */
  height: ${Dimensions.get("window").width * 0.25};
  width: ${Dimensions.get("window").width * 0.22};
  margin: 8px 0 10px 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* shadow-color: ${black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84; */
  elevation: 5;
`;

export const ImageStyled = styled.Image`
  height: 60px;
  width: 60px;
`;

export const LabelsHome = styled.Text`
  font-family: ${openSans};
  font-size: 14px;
  padding-top: 6px;
  color: ${Colors.black};
  letter-spacing: 0.5px;
`;

export const Icon = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${Colors.greyLight};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
