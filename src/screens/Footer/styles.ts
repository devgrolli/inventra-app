import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const Navbar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${Colors.white};
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  elevation: 3;
`;
