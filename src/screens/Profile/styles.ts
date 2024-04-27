import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { white, black, greyDark } = Colors;
const { openSans, openSansBold } = CommonString.fonts;

export const ViewConfigures = styled.View`
  height: 400px;
  width: 100%;
  background-color: ${white};
  border-radius: 20px;
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const Container = styled.View`
  padding-right: 15px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 2px;
  background-color: #fafafa;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  elevation: 3;
`;

export const ViewLabel = styled.TouchableOpacity`
  flex-direction: row;
  align-items: "center";
`;

export const LabelConfig = styled.Text`
  color: ${black};
  font-family: ${openSans};
  letter-spacing: 0.8px;
  font-size: 16px;
`;

export const LabelLink = styled.Text`
  color: #949494;
  font-family: ${openSans};
  letter-spacing: 0.8px;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ViewListItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-top: 15px;
`;

export const Icon = styled.View`
  width: 50px;
  height: 50px;
  background-color: #edf4ff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const ContainerList = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const TitleList = styled.Text`
  font-size: 16px;
  font-family: ${openSansBold};
  letter-spacing: 0.5;
  color: ${Colors.greyDark};
`;
export const Access = styled.Text`
  font-size: 14px;
  font-family: ${openSans};
  letter-spacing: 0.5;
  color: ${greyDark};
`;
