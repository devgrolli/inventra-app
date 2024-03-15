import React, { memo, useState } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { DSButton } from "@core/components/Button";
import { Colors } from "@core/constants/colors";
import Snack from "@core/components/SnackBar";
import { goBack } from "@core/navigation/navigator";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { getPaddingKeyboard } from "@utils/keyboardConfig";
import { useRecoveryPassword } from "./useRecoveryPassword";
import padlock from "@assets/images/padlock.png";

const RecoveryPassword = memo(() => {
  const {
    ref,
    value,
    props,
    loading,
    CELL_COUNT,
    snackbar,
    setValue,
    cleanErrors,
    onDismissSnackBar,
    handleSubmitPassword,
    getCellOnLayoutHandler,
  } = useRecoveryPassword();

  return (
    <>
      <ScrollView style={{ flex: 1, paddingTop: getPaddingKeyboard() }}>
        <View style={{ alignItems: "center" }}>
          <Image source={padlock} style={{ width: 180, height: 180 }} />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <View style={{ paddingBottom: 15 }}>
            <CodeField
              {...props}
              ref={ref}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <DSButton
            loading={loading}
            onPress={handleSubmitPassword}
            name="Enviar"
            typeButton="primary"
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: Colors.brown }}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snack
        color={Colors.blue}
        setSnackVisible={onDismissSnackBar}
        snackVisible={snackbar.visible}
        errors={snackbar.message}
        clearErrors={cleanErrors}
      />
    </>
  );
});
const styles = StyleSheet.create({
  root: { flex: 1, padding: 10 },
  title: { textAlign: "center", fontSize: 30, borderRadius: 30 },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: 50,
    height: 50,
    fontSize: 20,
    lineHeight: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.grey,
    textAlign: "center",
    margin: 15,
  },
  focusCell: {
    borderColor: Colors.blue,
  },
});

export default RecoveryPassword;
