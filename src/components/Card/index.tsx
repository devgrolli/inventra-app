import { TouchableOpacity } from "react-native";
import { Loading } from "../Loading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import * as S from "./styles";

export interface CardProps {
  img?: any;
  loading: boolean;
  navigateRoute?: string | undefined;
}

export const Card = (props: CardProps) => {
  const { img, loading, navigateRoute = "Not-FoudedPage" } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateRoute)}>
      <S.CardView>
        {loading ? (
          <Loading />
        ) : (
          <S.ImageStyled source={img} resizeMode="contain" />
        )}
      </S.CardView>
    </TouchableOpacity>
  );
};
