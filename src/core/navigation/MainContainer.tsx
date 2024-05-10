import * as React from "react";
import { storage } from "@utils/storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { authenticatedUserRoutes, unauthenticatedUserRoutes } from "./routes";
import { useEffect, useState } from "react";
import authService from "services/authService";
import { Colors } from "@core/constants/colors";
import { useAuth } from "context/AuthContext";
import { LoadingPage } from "@core/components/LoadingPage";

const Tab = createBottomTabNavigator();

export function GlobalNavigation() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingPage />;
  }

  const currentRoutes = isAuthenticated
    ? authenticatedUserRoutes
    : unauthenticatedUserRoutes;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      {currentRoutes.map((route) => (
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
