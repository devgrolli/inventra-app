import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from "react-native";
import { CommonString } from "@core/constants/strings";

const { grey, orange } = Colors;
const { openSans } = CommonString.fonts;
export interface InputProps {
  error?: boolean;
}

const baseInputStyle = (Component: any) => styled(Component)<InputProps>`
  font-family: ${openSans};
  flex: 1;
  border-radius: 15px;
  border-color: ${({ error }: InputProps) => (error ? orange : grey)};
  height: 50px;
  border-width: 2px;
  padding: 16px;
  margin-bottom: 35px;
`;

export const Input = baseInputStyle(TextInput);
export const InputMask = baseInputStyle(TextInputMask);


export const TextError = styled.Text`
  font-family: ${openSans};
  color: ${orange};
  font-size: 14px;
  margin-top: -27px;
  padding-left: 10px;
  padding-bottom: 10px;
`;
