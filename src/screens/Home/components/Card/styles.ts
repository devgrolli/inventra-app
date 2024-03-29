import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { greyDark, greyLight, black, white } = Colors;
const { openSans, openSansBold } = CommonString.fonts;

export const CardView = styled.View`
  /* background-color: ${white}; */
  height: ${Dimensions.get("window").width * 0.25};
  width: ${Dimensions.get("window").width * 0.25};
  margin: 8px 10px 20px 0;
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
  font-size: 16px;
  padding-top: 6px;
  color: ${Colors.backLight};
  letter-spacing: 0.5px;
`;

export const Icon = styled.View`
  width: 80px;
  height: 80px;
  background-color: #edf4ff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
