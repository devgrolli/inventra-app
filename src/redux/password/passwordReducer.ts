import {
  Action,
  initialState,
  ActionTypes,
} from "./passwordTypes";

const actionToStateKeyMap = {
  [ActionTypes.SET_EXPIRY_TIME]: 'expiryTime',
};

const passwordReducer = (state = initialState, action: Action) => {
  const stateKey = actionToStateKeyMap[action.type as keyof typeof actionToStateKeyMap];
  if (stateKey) {
    return { ...state, [stateKey]: action.payload };
  }
  return state;
};

export default passwordReducer;