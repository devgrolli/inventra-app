import { TouchableOpacity } from "react-native";
import { navigate } from "@core/navigation/navigator";
import * as S from "./styles";
import { Colors } from "@core/constants/colors";
import { FontAwesome } from "@expo/vector-icons";

export interface CardProps {
  img?: any;
  size?: number;
  navigateRoute?: string | undefined;
  nameLabel?: string | undefined;
}

export const Card = (props: CardProps) => {
  const { img, nameLabel, size = 30, navigateRoute = "Not-FoudedPage" } = props;

  return (
    <TouchableOpacity onPress={() => navigate(navigateRoute)}>
      <S.CardView>
        <S.Icon>
          <FontAwesome name={img} size={size} color={Colors.blue} />
        </S.Icon>
        <S.LabelsHome>{nameLabel}</S.LabelsHome>
      </S.CardView>
    </TouchableOpacity>
  );
};
