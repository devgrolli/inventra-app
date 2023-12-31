import { TextInput } from "react-native";
import styled from "styled-components/native";

export interface ErrorProps {
  hasError?: boolean;
  // height?: number;
}

export const ViewCard = styled.View`
  height: 300px;
  width: 190px;
  margin: 10px;
  border-radius: 10px;
  align-items: "center";
  justify-content: "center";
`;

export const Container = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

// export const Input = styled(TextInput)<ErrorProps>`
//   flex: 1;
//   border-radius: 10px;
//   border-color: ${({ hasError }: ErrorProps) =>
//     hasError ? '##FF5757' : '#808080'};
//   height: 50;
//   margin: 12px;
//   border-width: 1;
//   padding: 16px;
// `;

export const Input = styled(TextInput)<ErrorProps>`
  flex: 1;
  border-radius: 10px;
  border-color: ${({ hasError }: ErrorProps) =>
    hasError ? '#F8572D' : '#ADADAD'}; /* Corrigido o valor extra # */
  height: 50px; /* Adicionado 'px' para especificar a altura */
  margin: 12px;
  border-width: 2px; /* Adicionado 'px' para a largura da borda */
  padding: 16px;
`;

export const Button = styled.TouchableOpacity`
  padding-top: 10px;
  padding-left: 10px;
`;

export const TextButton = styled.Text`
  color: #ffff;
  background-color: #80B3FF;
  width: 128px;
  padding: 14px;
  align-items: center;
  text-align: center;
  /* font-family: "'OpenSans_400Regular'"; */
  font-size: 16px;
  font-weight: 800;
`;
