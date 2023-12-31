import React from "react";
import { Pressable, Image } from "react-native";
import { ButtonView, TextButton } from "./styles";
import Spinner from "@assets/images/spinner.gif";

interface ButtonProps {
  loading: boolean;
  typeButton?: string;
  name: string;
  onPress?: () => void;
}

export const DSButton: React.FC<ButtonProps> = ({
  loading,
  typeButton,
  name,
  onPress,
}) => {
  return (
    <ButtonView
      onPress={onPress}
      typeButton={typeButton}
      loading={loading}
      disabled={loading}
    >
      {loading ? (
        <Image source={Spinner} style={{ width: 30, height: 30 }} />
      ) : (
        <TextButton>{name}</TextButton>
      )}
    </ButtonView>
  );
};
