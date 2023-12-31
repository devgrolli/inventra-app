import * as React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de ter o pacote de ícones instalado

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../../screens/Profile";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Teste from "../../screens/Teste";
import Stock from "../../screens/Stock";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const isLogged = false;

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="Stock"
        component={Stock}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="Teste"
        component={Teste}
        options={{ headerShown: false, gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

export function GlobalNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#80B3FF",
        tabBarInactiveTintColor: "#9f9f9f",
      }}
    >
      <Tab.Screen
        name=" "
        component={LoginStack}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={{
          tabBarLabel: "Esoque",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-plus" size={22} color={color} />
          ),
        }}
      />
      {isLogged ? (
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={22} color={color} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: "mais",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bars" size={22} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}
