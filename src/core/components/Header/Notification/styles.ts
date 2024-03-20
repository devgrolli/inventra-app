import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

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
  font-family: ${CommonString.fonts.openSans};
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
