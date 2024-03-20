export enum ActionTypes {
  SET_EXPIRY_TIME = "SET_EXPIRY_TIME",
}

export interface RootState {
  password: {
    expiryTime: string;
  };
}

export const initialState = {
  expiryTime: 0,
};

export interface Action {
  type: string;
  payload: string;
}
