import { useSelector } from "react-redux";
import { RootState, ActionTypes } from "./passwordTypes";

export const selectState = (stateName: keyof RootState['password']) => useSelector((state: RootState) => state.password[stateName]);

export const createAction =
  <T>(type: ActionTypes) =>
  (payload: T) => ({
    type,
    payload,
  });

  export const setExpiryTime = createAction<number>(ActionTypes.SET_EXPIRY_TIME);

