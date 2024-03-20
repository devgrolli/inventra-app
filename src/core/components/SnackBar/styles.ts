import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { Snackbar } from "react-native-paper";

export interface snackProps {
  color?: string;
}

export const TextSnack = styled.Text`
  color: ${Colors.white};
  letter-spacing: 0.5;
`;

export const SnackToast = styled(Snackbar)<snackProps>`
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: "auto";
  border-radius: 15px;
  position: "absolute";
  align-items: "center";
  background-color: ${({ color }: snackProps) => color};
`;
