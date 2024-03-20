export enum ActionTypes {
  SET_CPF = "SET_CPF",
  SET_TESTE = "SET_TESTE",
  SET_ERROR = "SET_ERROR",
  SET_VISIBLE = "SET_VISIBLE",
  SET_LOADING = "SET_LOADING",
  SET_MSG_ERROR = "SET_MSG_ERROR",
  SET_PASSWORD = "SET_PASSWORD",
  SET_RIGHT_ICON = "SET_RIGHT_ICON",
  SET_CPF_FOCUSED = "SET_CPF_FOCUSED",
  SET_PASSWORD_FOCUSED = "SET_PASSWORD_FOCUSED",
  SET_PASSWORD_VISIBILITY = "SET_PASSWORD_VISIBILITY",
}

export interface RootState {
  login: {
    cpf: string;
    teste: string;
    error: boolean;
    visible: boolean;
    loading: boolean;
    msgError: string;
    password: string;
    rightIcon: string;
    cpfFocused: boolean;
    passwordFocused: boolean;
    passwordVisibility: boolean;
  };
}

export const initialState = {
  cpf: "teste",
  teste: "",
  error: false,
  visible: false,
  loading: false,
  msgError: "Erro ao realizar login",
  password: "",
  rightIcon: "eye",
  cpfFocused: false,
  passwordFocused: false,
  passwordVisibility: true,
};

export interface Action {
  type: string;
  payload: string;
}
