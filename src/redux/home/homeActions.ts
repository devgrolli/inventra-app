import { useSelector } from "react-redux";
import { RootState, ActionTypes } from "./homeTypes";

export const selectState = (stateName: keyof RootState['home']) => useSelector((state: RootState) => state.home[stateName]);

const createAction =
  <T>(type: ActionTypes) =>
  (payload: T) => ({
    type,
    payload,
  });

export const setLoading = createAction<boolean>(ActionTypes.SET_LOADING);
