import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from "react-native";

export interface InputProps {
  error?: boolean
}

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ error }: InputProps) =>
    error ? Colors.orange : Colors.grey };
  height: 50px;
  border-width: 2px;
  padding: 16px;
  margin-bottom: 35px;
`;

export const InputMask = styled(TextInputMask)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ error }: InputProps) =>
    error ? Colors.orange : Colors.grey };
  height: 50px;
  border-width: 2px;
  padding: 16px;
  margin-bottom: 35px;
`; 

export const TextError = styled.Text`
  color: ${Colors.orange};
  font-size: 14px;
  margin-top: -27px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

