import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Importar o tipo para o prop de ícone
import { Colors } from "@core/constants/colors";
import * as S from "./styles";

interface ProfileOptionProps {
  icon: IconProp;
  title: string;
  access?: string;
  disabled?: boolean;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onPress?: () => void;
  onSwitchChange?: (value: boolean) => void;
}

export const MenuProfileList: React.FC<ProfileOptionProps> = memo(
  ({
    icon,
    title,
    access,
    disabled,
    hasSwitch,
    switchValue,
    onPress,
    onSwitchChange,
  }: ProfileOptionProps) => (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <S.Container>
        <S.IconContainer>
          <S.Icon>
            <FontAwesomeIcon icon={icon} color={Colors.primary} size={25} />
          </S.Icon>
          <S.TitleContainer hasSwitch={hasSwitch}>
            <S.TitleList>{title}</S.TitleList>
            {access && <S.Access>{access}</S.Access>}
          </S.TitleContainer>

          {hasSwitch && (
            <Switch
              color={Colors.primary}
              value={switchValue}
              onValueChange={onSwitchChange}
            />
          )}
        </S.IconContainer>
      </S.Container>
    </TouchableOpacity>
  )
);
