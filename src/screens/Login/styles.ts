import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { TextInputMask } from "react-native-masked-text";

export interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
}

export const ViewCard = styled.View`
  height: 300px;
  width: 190px;
  margin: 10px;
  border-radius: 15px;
  align-items: "center";
  justify-content: "center";
`;

export const Container = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? Colors.orange : isFocused ? Colors.blue : Colors.grey};
  height: 50px;
  border-width: 2px;
  padding: 16px;
`;

export const InputCpf = styled(TextInputMask)<InputProps>`
  flex: 1;
  border-radius: 15px;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? Colors.orange : isFocused ? Colors.blue : Colors.grey};
  height: 50px;
  border-width: 2px;
  padding: 16px;
`;

export const InputPassowrd = styled.View<InputProps>`
  width: 100%;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? Colors.orange : isFocused ? Colors.blue : Colors.grey};
  height: 50px;
  border-width: 2px;
  margin-bottom: 10px;
`;

export const InputWithEye = styled(TextInput)`
  padding: 14px;
  font-size: 16px;
  width: 90%;
`;

export const ButtonView = styled.TouchableOpacity`
  width: 128px;
  height: 50px;
  border-radius: 15px;
  background-color: ${Colors.blue};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: 800;
`;

export const LabelLogo = styled.Text`
  color: ${Colors.brown};
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;

export const Label2 = styled.Text`
  color: ${Colors.blue};
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;

export const textToast = styled.Text`
  color: ${Colors.white};
  letter-spacing: 0.5;
  font-weight: 400;
`;

export const ButtonSingUp = styled.TouchableOpacity`

`;