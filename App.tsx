import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalNavigation } from "./src/core/navigation/MainContainer";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@core/navigation/navigator"; // Ajuste o caminho conforme necessário
import { AuthProvider } from "./src/context/AuthContext"; // Atualize o caminho conforme necessário
import { Provider } from "react-redux";
import store from "./src/redux/store";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <AuthProvider>
          <BottomSheetModalProvider>
            <Provider store={store}>
              <GlobalNavigation />
            </Provider>
          </BottomSheetModalProvider>
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
