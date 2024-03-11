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
import EditProfile from "@screens/Profile/EditProfile";
import ListUsers from "@screens/Profile/ListUsers";
import ButtonUser from "@core/components/Header/ButtonUser";
import Notification from "@core/components/Header/Notification";
import { useAuth } from "context/AuthContext";
import LogoHeader from "@core/components/Header/Logo";
import { DataComponent } from "@core/constants/data";
import { InitialScreen } from "@screens/Initial";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const size = CommonString.sizeIcons.footer;
const optionsHeader = CommonString.optionsHeader;
const isLogged = false;

const headerStylePrimary = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.primary,
    headerTintColor: Colors.blue,
    headerShown: true,
    tabBarIcon: ({ color }: any) => (
      <FontAwesome name={icon as any} size={size} color={color} />
    ),
    headerLeft: () => <ButtonUser />,
    headerRight: () => <Notification />,
  };
};

const headerStyleSecondary = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.secondary,
    headerTintColor: Colors.white,
    headerShown: true,
    tabBarIcon: ({ color }: any) => (
      <FontAwesome name={icon as any} size={size} color={color} />
    ),
    headerLeft: () => <LogoHeader />,
    // headerRight: () => <Notification />,
  };
};

const HomeRoutes = () => {
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

export function PerfilNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionsHeader}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={optionsHeader}
      />
      <Stack.Screen
        name="ListUsers"
        component={ListUsers}
        options={optionsHeader}
      />
    </Stack.Navigator>
  );
}

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
          component={Login}
          options={{
            tabBarLabel: "Login",
            headerShown: false,
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
        component={HomeRoutes}
        options={headerStylePrimary("Início", "home")}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={headerStyleSecondary("Estoque", "cart-plus")}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilNavigation}
        options={headerStyleSecondary("Perfil", "user-circle-o")}
      />
    </Tab.Navigator>
  );
}
