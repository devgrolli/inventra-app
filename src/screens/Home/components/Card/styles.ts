import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { greyDark, greyLight, black } = Colors;
const { openSans } = CommonString.fonts;

export const CardView = styled.View`
  background-color: ${greyLight};
  height: ${Dimensions.get("window").width * 0.25};
  width: ${Dimensions.get("window").width * 0.25};
  margin: 8px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  shadow-color: ${black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const ImageStyled = styled.Image`
  height: 60px;
  width: 60px;
`;

export const LabelsHome = styled.Text`
  font-family: ${openSans};
  padding-top: 20px;
  color: ${greyDark};
  font-weight: 600;
  letter-spacing: 0.25px;
`;
