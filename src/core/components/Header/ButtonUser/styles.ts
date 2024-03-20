import styled from 'styled-components/native';
import { Colors } from "@core/constants/colors";
import { CommonString } from '@core/constants/strings';

const {  white } = Colors;
const { openSansBold } = CommonString.fonts;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${white};
  border-radius: 300px;
  width: 50px; 
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;
export const ViewName = styled.View`
padding-left: 30px;
 padding-top: 10px;
`;

export const TextUser = styled.Text`
  color: ${white};
  font-family: ${openSansBold};
  letter-spacing: 0.8px;
  height: 24px;
  width: 100%;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  */
`;
