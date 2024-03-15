import * as React from "react";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { headerStylePrimary, headerStyleSecondary } from "./headerStyles";
import { useAuth } from "context/AuthContext";
import { InitialScreen } from "@screens/Initial";
import { ProfileRoutes } from "./ProfileRoutes";
import { LoginRoutes } from "./LoginRoutes";
import Stock from "@screens/Stock";
import Home from "@screens/Home";

const Tab = createBottomTabNavigator();
const size = CommonString.sizeIcons.footer;

export function GlobalNavigation() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors.blue,
          tabBarInactiveTintColor: Colors.grey,
        }}
      >
        <Tab.Screen
          key="Início"
          name="Início"
          component={InitialScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          key="Login"
          name="Login"
          component={LoginRoutes}
          options={{
            tabBarLabel: "Login",
            headerShown: false,
            // headerShown: true,
            // title: "Login",
            // headerLeft: () => <Button onPress={() => null} title="Voltar" />,
            // tabBarStyle: { display: "none" },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="sign-in" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={headerStylePrimary("Início", "home")}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={headerStyleSecondary("Estoque", "cart-plus")}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileRoutes}
        options={headerStyleSecondary("Perfil", "user-circle-o")}
      />
    </Tab.Navigator>
  );
}
