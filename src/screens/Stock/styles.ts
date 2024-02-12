import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ViewProducts = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.white};
  border-radius: 20px;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
`;

export const ViewProductsHeader = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.blue};
  border-radius: 20px;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
`;

export const TextProd = styled.Text`
  font-weight: 400;
  font-size: 14px;
`;

export const TextProdHeader = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-family: Verdana;
  font-weight: 400;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;
