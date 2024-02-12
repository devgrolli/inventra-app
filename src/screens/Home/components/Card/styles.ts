import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from "@core/constants/colors";

export const CardView = styled.View`
  background-color: ${Colors.greyLight};
  height: ${Dimensions.get('window').width * 0.25};
  width: ${Dimensions.get('window').width * 0.25};
  margin: 8px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  shadow-color: ${Colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const ImageStyled = styled.Image`
  height: 60px;
  width: 60px;
`;

export const LabelsHome = styled.Text`
  padding-top: 20px;
  color: ${Colors.greyDark};
  font-weight: 600;
  letter-spacing: 0.25px;
`;
