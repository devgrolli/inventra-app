import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { TextInputMask } from "react-native-masked-text";
import { CommonString } from "@core/constants/strings";

const { grey, orange, orangeLight, primary, white } = Colors;
const { openSansBold, openSans } = CommonString.fonts;

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

export const InputCpf = styled(TextInputMask)<InputProps>`
  flex: 1;
  border-radius: 10px;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? orange : isFocused ? primary : grey};
  height: 50px;
  border-width: 2px;
  padding: 16px;
`;

export const InputPassowrd = styled.View<InputProps>`
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border-color: ${({ hasError, isFocused }: InputProps) =>
    hasError ? orange : isFocused ? primary : grey};
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
  background-color: ${primary};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: ${openSans};
  color: ${white};
  font-size: 16px;
`;

export const LabelLogo = styled.Text`
  font-family: ${openSansBold};
  color: ${primary};
  align-items: center;
  text-align: center;
  font-size: 30px;
`;

export const Label2 = styled.Text`
  font-family: ${openSansBold};
  color: ${orangeLight};
  align-items: center;
  text-align: center;
  font-size: 30px;
`;

export const textToast = styled.Text`
  font-family: ${openSans};
  color: ${white};
  letter-spacing: 0.5;
`;
