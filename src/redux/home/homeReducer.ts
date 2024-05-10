import {
    Action,
    initialState,
    ActionTypes,
  } from "./homeTypes";
  
  const actionToStateKeyMap = {
    [ActionTypes.SET_LOADING]: 'loading',
  };
  
  const homeReducer = (state = initialState, action: Action) => {
    const stateKey = actionToStateKeyMap[action.type as keyof typeof actionToStateKeyMap];
    if (stateKey) {
      return { ...state, [stateKey]: action.payload };
    }
    return state;
  };
  
  export default homeReducer;