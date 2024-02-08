import * as React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de ter o pacote de ícones instalado
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import Login from "@screens/Login";
import Teste from "@screens/Teste";
import Stock from "@screens/Stock";
import Profile from "@screens/Profile";
import ButtonUser from "@components/Header/ButtonUser";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const size = CommonString.sizeIcons.footer;
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

function footerLogged() {
  if (isLogged) {
    return (
      <Tab.Screen
        key="Profile"
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    );
  }

  return (
    <Tab.Screen
      key="Login"
      name="Login"
      component={Login}
      options={{
        tabBarLabel: "Menu",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="bars" size={size} color={color} />
        ),
      }}
    />
  );
}

export function GlobalNavigation() {
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
        component={LoginStack}
        options={{
          tabBarLabel: "Início",
          headerStyle: {
            height: 180,
            backgroundColor: Colors.blue,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          },
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerLeft: () => <ButtonUser />,
        }}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={{
          tabBarLabel: "Esoque",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-plus" size={size} color={color} />
          ),
        }}
      />

      {footerLogged()}
    </Tab.Navigator>
  );
}
