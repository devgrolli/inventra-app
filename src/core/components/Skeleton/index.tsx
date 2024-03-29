import { Colors } from "@core/constants/colors";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface SkeletonProps {
  width: number | string;
  height: number | string;
  borderRadius?: number;
  backgroundColor?: string;
  highlightColor?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius = 0,
  backgroundColor = "#E1E9EE",
  highlightColor = Colors.greyLight,
}) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation]);

  const colorAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [backgroundColor, highlightColor],
  });
  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width: Number(width),
          height: Number(height),
          borderRadius,
          backgroundColor: colorAnimation,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#E1E9EE",
  },
});

export default Skeleton;
