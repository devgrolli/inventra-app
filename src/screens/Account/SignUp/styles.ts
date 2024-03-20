import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { blue, orangeLight, black } = Colors;
const { openSansBold } = CommonString.fonts;

export interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
  error?: boolean
}

export const LabelOne = styled.Text`
  padding-top: 20px;
  color: ${orangeLight};
  align-items: center;
  text-align: center;
  font-size: 50px;
  font-family: ${openSansBold};
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const LabelTwo = styled.Text`
  color: ${blue};
  font-family: ${openSansBold};
  align-items: center;
  text-align: center;
  font-size: 50px;
`;