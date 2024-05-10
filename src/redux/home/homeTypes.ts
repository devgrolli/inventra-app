export enum ActionTypes {
  SET_LOADING = "SET_LOADING",
}

export interface RootState {
  home: {
    loading: boolean;
  };
}

export const initialState = {
  loading: false,
};

export interface Action {
  type: string;
  payload: string;
}
