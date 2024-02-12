import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalNavigation } from "./src/core/navigation/MainContainer";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@core/navigation/navigator"; // Ajuste o caminho conforme necessário
import { Provider } from "react-redux";
import store from "./src/redux/store";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <BottomSheetModalProvider>
          <Provider store={store}>
            <GlobalNavigation />
          </Provider>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
