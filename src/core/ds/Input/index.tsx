import React from "react";
import { Pressable, KeyboardTypeOptions } from "react-native";
import { Input } from "./styles";

interface ButtonProps {
  value?: string;
  error: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions; // Defina o tipo como KeyboardTypeOptions
  onChange?: (text: string) => void;
  handleSubmit?: () => void;
}

export const DSInput: React.FC<ButtonProps> = ({
  value,
  error,
  placeholder,
  keyboardType,
  onChange,
  handleSubmit,
}) => {
  return (
    <Input
      hasError={error}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      onSubmitEditing={handleSubmit}
      keyboardType={keyboardType}
    />
  );
};
