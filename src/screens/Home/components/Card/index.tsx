import { TouchableOpacity, Text } from "react-native";
import { Loading } from "../../../../components/Loading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import * as S from "./styles";

export interface CardProps {
  img?: any;
  loading: boolean;
  navigateRoute?: string | undefined;
  nameLabel?: string;
}

export const Card = (props: CardProps) => {
  const { img, loading, navigateRoute = "Not-FoudedPage", nameLabel } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={() => navigation.navigate(navigateRoute)}
    >
      <S.CardView>
        {loading ? (
          <Skeleton colorMode="light" height={100} width={100} />
        ) : (
          <>
            <S.ImageStyled source={img} resizeMode="contain" />
            <S.LabelsHome>{nameLabel}</S.LabelsHome>
          </>
        )}
      </S.CardView>
    </TouchableOpacity>
  );
};
