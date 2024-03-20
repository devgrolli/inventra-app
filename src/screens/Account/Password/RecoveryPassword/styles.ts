import { CommonString } from "@core/constants/strings";
import { Colors } from "@core/constants/colors";
import styled from "styled-components/native";

const { backLight } = Colors;
const { openSansBold, openSans } = CommonString.fonts;

export const CenteredView = styled.View`
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const PaddedView = styled.View`
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const ContainerInputs = styled.View`
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ContainerCode = styled.View`
  margin-left: 30px;
  margin-right: 30px;
`;

export const Label = styled.Text`
  color: ${backLight};
  font-family: ${openSansBold};
  align-items: center;
  text-align: center;
  font-size: 24px;
`;

export const SubtitleCode = styled.Text`
  color: ${backLight};
  font-family: ${openSans};
  align-items: center;
  text-align: center;
  font-size: 14px;
  padding-top: 5px;
`;
