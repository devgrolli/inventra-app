import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import styled from "styled-components/native";

const { openSans, openSansBold } = CommonString.fonts;

interface DividerProps {
  top?: number;
  bottom?: number;
}

export const ViewCircles = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const ViewLabel = styled.View`
  padding-left: 26px;
  padding-top: 20px;
  /* padding-bottom: 20px; */
`;

export const Container = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

export const Root = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

export const ViewListCards = styled.View`
  padding-top: 30px;
`;

export const LabelSales = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
  letter-spacing: 0.2px;
  font-family: ${openSans};
  `;

export const LabelSalesValue = styled(LabelSales)`
  color: ${Colors.black};
  font-size: 16px;
  font-family: ${openSans};
`;

export const ViewList = styled.TouchableOpacity`
  height: 50px;
  background-color: ${Colors.greyLight};
  margin: 15px 20px 0 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  
`;

export const LabelInList = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  font-family: ${openSans};
  margin-left: 20px;
`;

export const NumberInList = styled(LabelInList)`
  color: ${Colors.black};
  font-family: ${openSans};
  padding-right: 20px;
`;

export const InnerView = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const IconLabelView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View<DividerProps>`
  height: 1px;
  background-color: ${Colors.greyLight};
  margin-top: ${(props) => props.top || "0"};
  margin-bottom: ${(props) => props.bottom || "0"};
  margin-left: 0;
  margin-right: 0;
`;