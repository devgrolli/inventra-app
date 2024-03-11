import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Colors } from "@core/constants/colors";

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 90px;
`;

export const ViewListUsers = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${Colors.white};
  border-radius: 15px;
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
  border-radius: 15px;
  background-color: ${Colors.blue};
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

export const usersText = styled.Text`
  font-weight: 400;
  font-size: 14px;
`;

export const TextHeader = styled.Text`
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

export const ViewContextSheet = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  width: 90%;
`;

export const ViewProductSheet = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const ProductNameSheet = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const ProductQtdSheet = styled.Text`
  padding-top: 10px;
  font-size: 16px;
`;

export const ButtonProductView = styled.TouchableOpacity`
  background-color: ${Colors.blue};
  border-radius: 15px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ButtonSale = styled.TouchableOpacity`
  background-color: ${Colors.orange};
  border-radius: 15px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35px;
  flex-direction: row;
`;

export const ProductViewText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.8px;
`;

export const ProductView = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 35px;
`;

export const HeaderLabelSheet = styled.Text`
  font-family: "OpenSans_700Bold";
  color: ${Colors.greyDark};
  font-size: 20px;
  letter-spacing: 0.2px;
`;

export const ViewHeadeSheet = styled.View`
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${Colors.greyLight};
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  padding-bottom: 10px;
  background-color: ${Colors.white};
  box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled(TextInput).attrs({
  autoCapitalize: 'none',
})`
  flex: 1;
  border-radius: 15px;
  border-color: ${Colors.blue};
  height: 50px;
  color: ${Colors.black};
  margin: 12px;
  border-width: 2px;
  padding: 16px;
`;