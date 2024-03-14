import React from "react";
import { Controller } from "react-hook-form";
import { TextInputMaskTypeProp } from "react-native-masked-text";
import { InputInterface } from "./type";
import * as S from "./styles";

const InputController = React.memo(
  ({
    control,
    name,
    type,
    placeholder,
    error,
    secureTextEntry,
    options,
    msgError,
  }: InputInterface) => (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) =>
          options ? (
            <S.InputMask
              type={type as TextInputMaskTypeProp}
              options={options}
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              error={!!error}
            />
          ) : (
            <S.Input
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              placeholder={placeholder}
              {...(name === "password" && { secureTextEntry })}
              error={!!error}
            />
          )
        }
        name={name}
        rules={{ required: true }}
      />
      {error && <S.TextError>{msgError}</S.TextError>}
    </>
  )
);

export default InputController;
