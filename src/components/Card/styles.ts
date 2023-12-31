import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from "@core/constants/colors";

export const CardView = styled.View`
  background-color: ${Colors.white};
  height: ${Dimensions.get('window').width * 0.75};
  width: ${Dimensions.get('window').width * 0.45};
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
  height: 120px;
  width: 120px;
`;
