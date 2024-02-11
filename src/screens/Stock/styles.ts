import styled from "styled-components/native";
import { Colors } from "@core/constants/colors";
import { Dimensions } from "react-native";

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
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
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

export const ViewProducts = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.white};
  border-radius: 20px;
  shadow-color:  ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
margin-top: 10px;
`
export const ViewProductsHeader = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.blue};
  border-radius: 20px;
  shadow-color:  ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
margin-top: 10px;
`
export const  TextProd = styled.Text`
  font-family: Verdana;
  font-weight: 400;
`;

export const  TextProdHeader = styled.Text`
color: ${Colors.white};
font-size: 18px;
  font-family: Verdana;
  font-weight: 400;
`;