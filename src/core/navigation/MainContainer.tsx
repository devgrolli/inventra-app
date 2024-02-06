import * as React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de ter o pacote de ícones instalado

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "@components/Header";
import Home from "@screens/Home";
import Login from "@screens/Login";
import Teste from "@screens/Teste";
import Stock from "@screens/Stock";
import Profile from "@screens/Profile";
import { Colors } from "@core/constants/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const isLogged = false;

const optionsHeader = {
  headerShown: false,
  gestureEnabled: true,
  headerBackTitle: "Voltar",
};

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#00ffd0",
          },
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionsHeader}
      />
      <Stack.Screen
        name="Stock"
        component={Stock}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="Teste"
        component={Teste}
        options={{
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: "Voltar",
        }}
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
          headerStyle: {
            backgroundColor: "#80B3FF",
            height: 150,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          },
          headerShown: true,
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
            tabBarLabel: "Menu",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bars" size={22} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}
