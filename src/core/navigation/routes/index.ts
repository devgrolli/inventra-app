import { InitialScreen } from "@screens/Initial";
import { ProfileNavigation } from "../profile";
import { AccountNavigation } from "../account";
import { ROUTE_NAMES } from "./types";
import RecoveryPassword from "@screens/Account/Password/RecoveryPassword";
import ForgotPassword from "@screens/Account/Password/ForgotPassword";
import EditProfile from "@screens/Profile/EditProfile";
import ListUsers from "@screens/Profile/ListUsers";
import Profile from "@screens/Profile";
import SignUp from "@screens/Account/SignUp";
import Login from "@screens/Account/Login";
import Stock from "@screens/Stock";
import Home from "@screens/Home";
import {
  buttonOptionBack,
  headerNone,
  headerStylePrimary,
  headerStyleSecondary,
} from "../style/headerStyles";

const {
  HOME,
  STOCK,
  LOGIN,
  SIGNUP,
  INITIAL,
  PROFILE,
  FORGOT_PASSWORD,
  RECOVERY_PASSWORD,
} = ROUTE_NAMES;

export const authenticatedUserRoutes = [
  {
    name: HOME,
    component: Home,
    options: headerStylePrimary("Inicio", "home"),
  },
  {
    name: STOCK,
    component: Stock,
    options: headerStyleSecondary("Estoque", "cart-plus"),
  },
  {
    name: PROFILE,
    component: ProfileNavigation,
    options: headerStyleSecondary("Perfil", "user-circle-o", false),
  },
];

export const unauthenticatedUserRoutes = [
  {
    name: INITIAL,
    component: InitialScreen,
    options: headerNone(),
  },
  {
    name: LOGIN,
    component: AccountNavigation,
    options: headerNone(),
  },
];

export const profileRoutes = () => [
  { name: "Profile", component: Profile, options: buttonOptionBack() },
  { name: "ListUsers", component: ListUsers, options: buttonOptionBack() },
  { name: "EditProfile", component: EditProfile, options: buttonOptionBack() },
];

export const accountRoutes = () => [
  { name: LOGIN, component: Login },
  { name: SIGNUP, component: SignUp },
  { name: FORGOT_PASSWORD, component: ForgotPassword },
  { name: RECOVERY_PASSWORD, component: RecoveryPassword },
];
