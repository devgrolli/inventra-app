import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalNavigation } from "./src/core/navigation/MainContainer";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@core/navigation/navigator";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import loadFonts from "@assets/fontLoader";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

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
