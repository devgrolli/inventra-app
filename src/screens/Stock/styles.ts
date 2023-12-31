import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";

export const ViewConfigures = styled.View`
  height: 400px;
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 20px;
  shadow-color:  ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
`;

export const Container = styled.View`
  padding: 15px;
`;
export const ContainerImage = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
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
  flex-direction: "row";
  align-items: "center";
`;

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const LabelConfig = styled.Text`
  color: ${Colors.black};
  font-family: 'OpenSans_400Regular';
  letter-spacing: 0.8px;
  font-size: 16px;
  font-weight: 600;
`;

export const LabelLink = styled.Text`
  color: #949494;
  font-family: 'OpenSans_400Regular';
  letter-spacing: 0.8px;
  font-weight: 400;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;
