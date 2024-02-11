import React, { useReducer } from "react";
import { StyleSheet, Pressable } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export const Shimmer = () => {
  const [dark, toggle] = useReducer((s) => !s, true);

  const colorMode = dark ? "dark" : "light";

  return <Skeleton colorMode="light" height={300} width={190} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: 16,
  },
});
