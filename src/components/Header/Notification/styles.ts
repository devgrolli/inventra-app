import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const IconView = styled.View`
  padding-right: 20px;
`;

export const Badge = styled.View`
  top: -10px;
  right: 10px;
  position: absolute;
  background-color: ${Colors.orange};
  border-radius: 9px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TextBadge = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
