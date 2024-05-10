import styled, { css } from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

export interface ButtonProps {
  typeButton?: string;
  loading: boolean;
  widthFull?: boolean;
}

const { brownLoading, brown, primary, orange, orangeLoading, primaryLoading, white } = Colors;
const { openSansBold } = CommonString.fonts;

const getButtonStyles = (typeButton?: string, loading?: boolean) => {
  let backgroundColor = loading ? brownLoading : brown;

  switch (typeButton) {
    case "primary":
      backgroundColor = loading ? primaryLoading : primary;
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
  width: ${(props) => (props.widthFull ? "100%" : '128px')};
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
