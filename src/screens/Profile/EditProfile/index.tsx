import UploadImage from "@core/components/Upload/Image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <UploadImage />
      <Text style={{ marginVertical: 20, fontSize: 16 }}>
        Welcome, FuzzySid
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
