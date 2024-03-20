import {
  Action,
  initialState,
  ActionTypes,
} from "./loginTypes";

const actionToStateKeyMap = {
  [ActionTypes.SET_CPF]: 'cpf',
  [ActionTypes.SET_TESTE]: 'teste',
  [ActionTypes.SET_ERROR]: 'error',
  [ActionTypes.SET_VISIBLE]: 'visible',
  [ActionTypes.SET_LOADING]: 'loading',
  [ActionTypes.SET_MSG_ERROR]: 'msgError',
  [ActionTypes.SET_PASSWORD]: 'password',
  [ActionTypes.SET_RIGHT_ICON]: 'rightIcon',
  [ActionTypes.SET_CPF_FOCUSED]: 'cpfFocused',
  [ActionTypes.SET_PASSWORD_FOCUSED]: 'passwordFocused',
  [ActionTypes.SET_PASSWORD_VISIBILITY]: 'passwordVisibility',
};

const loginReducer = (state = initialState, action: Action) => {
  const stateKey = actionToStateKeyMap[action.type as keyof typeof actionToStateKeyMap];
  if (stateKey) {
    return { ...state, [stateKey]: action.payload };
  }
  return state;
};

export default loginReducer;