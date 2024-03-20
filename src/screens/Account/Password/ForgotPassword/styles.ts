import { CommonString } from "@core/constants/strings";
import { TextInput } from "react-native";
import { Colors } from "@core/constants/colors";
import styled from "styled-components/native";

const { blue, grey, orange, backLight } = Colors;
const { openSansBold, openSans } = CommonString.fonts;

export interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
}

export const Container = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? orange : isFocused ? blue : grey};
  height: 50px;
  border-width: 2px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: ${openSans};
`;

export const LabelLogo = styled.Text`
  color: ${backLight};
  align-items: center;
  text-align: center;
  font-size: 28px;
  font-family: ${openSansBold};
`;

export const SubTitle = styled.Text`
  font-family: ${openSans};
  color: ${backLight};
  font-size: 14px
`;