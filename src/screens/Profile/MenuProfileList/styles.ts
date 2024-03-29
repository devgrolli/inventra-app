import styled from "styled-components/native";
import { View } from "react-native";
import { CommonString } from "@core/constants/strings";
import { Colors } from "@core/constants/colors";

const { openSansBold, openSans } = CommonString.fonts;
const { greyDark } = Colors;

export const Container = styled(View)`
  margin-bottom: 25px;
  align-items: "center";
  flex-direction: "row";
  justify-content: "space-between";
`;

export const IconContainer = styled(View)`
  flex-direction: "row";
  align-items: "center";
`;

export const TitleContainer = styled(View)<{ hasSwitch?: boolean }>`
  margin-left: 15;
  width: ${(props) => (props?.hasSwitch ? "70%" : "90%")};
`;

export const TitleList = styled.Text`
  font-size: 16px;
  font-family: ${openSansBold};
  letter-spacing: 0.5;
  color: ${greyDark};
`;

export const Access = styled.Text`
  font-size: 14px;
  font-family: ${openSans};
  letter-spacing: 0.5;
  color: ${greyDark};
`;

export const Icon = styled.View`
  width: 50px;
  height: 50px;
  background-color: #edf4ff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
