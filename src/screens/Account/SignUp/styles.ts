import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { TextInputMask } from "react-native-masked-text";

export interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
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

export const TextToast = styled.Text`
  color: ${Colors.white};
  letter-spacing: 0.5;
  font-weight: 400;
`;

export const LabelLogo = styled.Text`
  padding-top: 20px;
  color: #FF882A;
  align-items: center;
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const Label2 = styled.Text`
  color: ${Colors.blue};
  align-items: center;
  text-align: center;
  font-size: 50px;
`;