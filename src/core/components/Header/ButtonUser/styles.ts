import styled from 'styled-components/native';
import { Colors } from "@core/constants/colors";

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${Colors.white};
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
  color: ${Colors.white};
  font-family: 'OpenSans_700Bold';
  letter-spacing: 0.8px;
  height: 24px;
  width: 75%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
`;
