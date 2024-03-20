import styled, { css } from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

export interface ButtonProps {
  typeButton?: string;
  loading: boolean;
}

const { brownLoading, brown, blue, orange, orangeLoading, blueLoading, white } = Colors;
const { openSansBold } = CommonString.fonts;

const getButtonStyles = (typeButton?: string, loading?: boolean) => {
  let backgroundColor = loading ? brownLoading : brown;

  switch (typeButton) {
    case "primary":
      backgroundColor = loading ? blueLoading : blue;
      break;
    case "secondary":
      backgroundColor = loading ? orangeLoading : orange;
      break;
    default:
      break;
  }

  return css`
    background-color: ${backgroundColor};
  `;
};

export const ButtonView = styled.TouchableOpacity<ButtonProps>`
  width: 128px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${(props) => getButtonStyles(props.typeButton, props.loading)}
`;

export const TextButton = styled.Text`
  font-family: ${openSansBold};
  color: ${white};
  font-size: 16px;
  letter-spacing: 0.7;
`;
