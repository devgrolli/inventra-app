import { createRef } from "react";
import { StackActions, TabActions, NavigationContainerRef, ParamListBase } from "@react-navigation/native";

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number: number) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function replace(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function navigateTab(name: string) {
  navigationRef.current?.dispatch(TabActions.jumpTo(name));
}

export function goBack() {
  navigationRef.current?.goBack();
}

// export function push(...args: any) {
//   navigationRef.current?.dispatch(StackActions.push(...args));
// }