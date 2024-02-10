import { TouchableOpacity } from "react-native";
import { navigate } from "@core/navigation/navigator";
import { Skeleton } from "moti/skeleton";
import * as S from "./styles";
import { Colors } from "@core/constants/colors";
import { FontAwesome } from "@expo/vector-icons";

export interface CardProps {
  img?: any;
  loading: boolean;
  size?: number;
  navigateRoute?: string | undefined;
  nameLabel?: string | undefined;
}

export const Card = (props: CardProps) => {
  const {
    img,
    loading,
    nameLabel,
    size = 35,
    navigateRoute = "Not-FoudedPage",
  } = props;

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={() => navigate(navigateRoute)}
    >
      <S.CardView>
        {loading ? (
          <Skeleton colorMode="light" height={110} width={110} />
        ) : (
          <>
            <FontAwesome name={img} size={size} color={Colors.greyDark} />
            <S.LabelsHome>{nameLabel}</S.LabelsHome>
          </>
        )}
      </S.CardView>
    </TouchableOpacity>
  );
};
