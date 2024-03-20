import { useSelector } from "react-redux";
import { RootState, ActionTypes } from "./loginTypes";

export const selectState = (stateName: keyof RootState['login']) => useSelector((state: RootState) => state.login[stateName]);

const createAction =
  <T>(type: ActionTypes) =>
  (payload: T) => ({
    type,
    payload,
  });

export const setCpf = createAction<string>(ActionTypes.SET_CPF);
export const setError = createAction<boolean>(ActionTypes.SET_ERROR);
export const setVisible = createAction<boolean>(ActionTypes.SET_VISIBLE);
export const setLoading = createAction<boolean>(ActionTypes.SET_LOADING);
export const setMsgError = createAction<string>(ActionTypes.SET_MSG_ERROR);
export const setPassword = createAction<string>(ActionTypes.SET_PASSWORD);
export const setRightIcon = createAction<string>(ActionTypes.SET_RIGHT_ICON);
export const setCpfFocused = createAction<boolean>(ActionTypes.SET_CPF_FOCUSED);
export const setPasswordFocused = createAction<boolean>(
  ActionTypes.SET_PASSWORD_FOCUSED
);
export const setPasswordVisibility = createAction<boolean>(
  ActionTypes.SET_PASSWORD_VISIBILITY
);
