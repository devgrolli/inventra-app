import React from "react";
import { Pressable, Image } from "react-native";
import { ButtonView, TextButton } from "./styles";
import Spinner from "@assets/images/spinner.gif";
import box3D from "@assets/animations/box3d.json";
import LottieView from "lottie-react-native";
interface ButtonProps {
  loading: boolean;
  typeButton?: string;
  name: string;
  widthFull?: boolean;
  onPress?: () => void;
}

export const DSButton: React.FC<ButtonProps> = ({
  loading,
  typeButton,
  name,
  widthFull,
  onPress,
}) => {
  return (
    <ButtonView
      onPress={onPress}
      typeButton={typeButton}
      loading={loading}
      disabled={loading}
      widthFull={widthFull}
    >
      {loading ? (
        // <LottieView
        //   style={{
        //     width: 100,
        //     height: 100,
        //   }}
        //   source={box3D}
        //   autoPlay
        //   resizeMode="contain"
        //   loop
        //   speed={3}
        // />
        <Image source={Spinner} style={{ width: 30, height: 30 }} />
      ) : (
        <TextButton>{name}</TextButton>
      )}
    </ButtonView>
  );
};
