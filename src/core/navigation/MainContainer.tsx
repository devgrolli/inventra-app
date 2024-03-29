import * as React from "react";
import { Colors } from "@core/constants/colors";
import { useAuth } from "context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { authenticatedUserRoutes, unauthenticatedUserRoutes } from "./routes";

const Tab = createBottomTabNavigator();

export function GlobalNavigation() {
  const { user } = useAuth();

  const routes = user ? authenticatedUserRoutes() : unauthenticatedUserRoutes();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options as any}
        />
      ))}
    </Tab.Navigator>
  );
}
