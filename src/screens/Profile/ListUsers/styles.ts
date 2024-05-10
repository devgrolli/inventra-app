import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";

const { white, black, primary, orange, greyDark, greyLight, grey } = Colors;
const { openSansBold, openSans } = CommonString.fonts;

interface BadgeProps {
  typeColor?: boolean;
}

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 90px;
`;

export const ViewListUsers = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${white};
  border-radius: 10px;
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 25px;
`;

export const ViewProductsHeader = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: ${primary};
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  justify-content: center;
`;

export const usersEmail = styled.Text`
  font-family: ${openSans};
  letter-spacing: 0.3;
  font-size: 14px;
`;

export const usersName = styled(usersEmail)`
  font-family: ${openSansBold};
  width: 90%;
`;

export const viewer = styled(usersEmail)`
  color: ${primary};
  font-family: ${openSansBold};
`;

export const TextHeader = styled.Text`
  font-family: ${openSansBold};
  letter-spacing: 0.3;
  color: ${white};
  font-size: 18px;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ButtonSaveView = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 15px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  shadow-color: ${black};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.35;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ButtonSaveText = styled.Text`
  color: ${white};
  font-family: ${openSansBold};
  font-size: 18px;
  letter-spacing: 0.8px;
`;

export const ContainerSave = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 35px;
`;

export const HeaderLabelSheet = styled.Text`
  font-family: ${openSansBold};
  color: ${greyDark};
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
  background-color: ${greyLight};
`;

export const Input = styled(TextInput)`
  flex: 1;
  border-radius: 15px;
  border-color: ${grey};
  height: 50px;
  color: ${black};
  margin: 20px 20px 0 20px;
  border-width: 2px;
  padding: 30px;
`;

export const Access = styled.Text`
  font-size: 14px;
  font-family: ${openSans};
  letter-spacing: 0.5;
  color: ${greyDark};
  text-align: start;
  width: 95%;
`;

export const Badge = styled.View<BadgeProps>`
  background-color: ${({ typeColor }: BadgeProps) =>
    typeColor ? primary : orange};
  border-radius: 10px;
  margin-top: 10px;
  width: 40%;
  padding: 5px 10px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  font-family: ${openSansBold};
  letter-spacing: 0.5;
  text-align: center;
  color: ${white};
`;

export const DetailNameView = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const DetailNameText = styled.Text`
  font-size: 20px;
  font-family: ${openSansBold};
  letter-spacing: 0.5;
  color: ${Colors.greyDark};
`;

export const DetailEmailText = styled.Text`
  font-size: 14px;
  font-family: ${openSans};
  letter-spacing: 0.5;
  color: ${Colors.greyDark};
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
  margin-top: 50px;
`;

export const TitleList = styled.Text`
  font-size: 16px;
  font-family: ${openSansBold};
  letter-spacing: 0.5;
  color: ${Colors.greyDark};
`;
