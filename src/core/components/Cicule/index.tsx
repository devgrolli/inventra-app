import { Dimensions, TouchableOpacity, View } from "react-native";
import { navigate } from "@core/navigation/navigator";
import * as S from "./styles";
import { Colors } from "@core/constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import Skeleton from "@core/components/Skeleton";

export interface CirculeProps {
  img?: any;
  size?: number;
  navigateRoute?: string | undefined;
  nameLabel?: string | undefined;
  loading: boolean;
}

export const Circule = (props: CirculeProps) => {
  const {
    img,
    nameLabel,
    size = 18,
    navigateRoute = "Not-FoudedPage",
    loading = false,
  } = props;

  return loading ? (
    <S.CirculeView>
      <Skeleton
        width={65}
        height={65}
        borderRadius={100}
        backgroundColor={Colors.white}
      />
      <View style={{ paddingTop: 10 }}>
        <Skeleton
          width={80}
          height={20}
          borderRadius={5}
          backgroundColor={Colors.white}
        />
      </View>
    </S.CirculeView>
  ) : (
    <TouchableOpacity onPress={() => navigate(navigateRoute)}>
      <S.CirculeView>
        <S.Icon>
          <FontAwesome name={img} size={size} color={Colors.black} />
        </S.Icon>
        <S.LabelsHome>{nameLabel}</S.LabelsHome>
      </S.CirculeView>
    </TouchableOpacity>
  );
};
