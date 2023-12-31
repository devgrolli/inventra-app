import styled, { css } from "styled-components/native";

export interface ButtonProps {
  typeButton?: string;
}

const getButtonStyles = (typeButton?: string) => {
  switch (typeButton) {
    case "primary":
      return css`
        background-color: #80b3ff;
      `;
    case "secondary":
      return css`
        background-color: #f8572d;
      `;

    default:
      return css`
        background-color: #80b3ff;
      `;
  }
};

export const ButtonView = styled.TouchableOpacity<ButtonProps>`
  width: 128px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${(props) => getButtonStyles(props.typeButton)}
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
`;
