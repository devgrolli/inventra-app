import { TextInput } from "react-native";
import { Colors } from "@core/constants/colors";
import styled from "styled-components/native";

export interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
}

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? Colors.orange : isFocused ? Colors.blue : Colors.grey};
  height: 50px;
  border-width: 2px;
  padding: 16px;
`;

export const LabelLogo = styled.Text`
  color: ${Colors.blue};
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;
