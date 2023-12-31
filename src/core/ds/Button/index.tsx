import React from "react";
import { Pressable } from "react-native";
import { ButtonView, TextButton } from "./styles";

interface ButtonProps {
  typeButton: string;
  name: string;
  onPress?: () => void;
}

export const DSButton: React.FC<ButtonProps> = ({
  typeButton,
  name,
  onPress,
}) => {
  return (
    <ButtonView onPress={onPress} typeButton={typeButton}>
      <TextButton>{name}</TextButton>
    </ButtonView>
  );
};
