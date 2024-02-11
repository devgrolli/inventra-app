import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Colors } from "@core/constants/colors";

export interface ErrorProps {
  hasError?: boolean;
  // height?: number;
}

export const Input = styled(TextInput)<ErrorProps>`
  flex: 1;
  border-radius: 10px;
  border-color: ${({ hasError }: ErrorProps) =>
    hasError ? Colors.orange : Colors.grey};
  height: 50px;
  margin: 12px;
  border-width: 2px;
  padding: 16px;
`;