import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

const CountdownTimer = ({
  expiryTimestamp,
  onPress,
}: {
  expiryTimestamp: number;
  onPress: () => void;
}) => {
  const calculateTimeLeft = () => expiryTimestamp - Date.now();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTimestamp]);

  useEffect(() => {
    if (timeLeft > 0) {
      setButtonDisabled(false);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const handlePress = () => {
    setButtonDisabled(true);
    onPress();
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      {timeLeft > 0 ? (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.greyDark,
              fontFamily: CommonString.fonts.openSans,
              letterSpacing: 0.5,
            }}
          >
            Código expira em {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        </View>
      ) : (
        <Button
          disabled={buttonDisabled}
          onPress={handlePress}
          title="Reenviar código"
        />
      )}
    </View>
  );
};

export default CountdownTimer;
