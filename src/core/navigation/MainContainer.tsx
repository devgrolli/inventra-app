import * as React from "react";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import Login from "@screens/Login";
import Stock from "@screens/Stock";
import Profile from "@screens/Profile";
import ButtonUser from "@components/Header/ButtonUser";
import Notification from "@components/Header/Notification";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const size = CommonString.sizeIcons.footer;
const optionsHeader = CommonString.optionsHeader;
const isLogged = false;

const LoggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={optionsHeader} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionsHeader}
      />
      <Stack.Screen name="Stock" component={Stock} options={optionsHeader} />
    </Stack.Navigator>
  );
};

const footerValidateLogged = () => {
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
};

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
        component={LoggedStack}
        options={{
          tabBarLabel: "Início",
          headerStyle: {
            height: 180,
            backgroundColor: Colors.blue,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            shadowColor: Colors.blue,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerLeft: () => <ButtonUser />,
          headerRight: () => <Notification />,
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

      {footerValidateLogged()}
    </Tab.Navigator>
  );
}
