import styled, { css } from "styled-components/native";
import { Colors } from "@core/constants/colors";

export interface ButtonProps {
  typeButton?: string;
  loading: boolean;
}

const getButtonStyles = (typeButton?: string, loading?: boolean) => {
  let backgroundColor = loading ? Colors.brownLoading : Colors.brown;

  switch (typeButton) {
    case "primary":
      backgroundColor = loading ? Colors.blueLoading : Colors.blue;
      break;
    case "secondary":
      backgroundColor = loading ? Colors.orangeLoading : Colors.orange;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
`;
