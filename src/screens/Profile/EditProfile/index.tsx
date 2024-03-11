import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default function EditProfile() {
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, (response) => {
      if (response.uri) {
        setPhoto(response);
      }
    });
  };

  return (
    <View>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 300, height: 300 }}
        />
      )}
    </View>
  );
}
