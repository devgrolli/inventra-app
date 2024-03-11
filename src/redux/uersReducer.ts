// userReducer.js
interface UserState {
  profile: {
    isFetched: boolean;
    data: null | any; // Replace 'any' with the actual type of 'data'
    isLogged: boolean;
  };
  debates: {
    isFetched: boolean;
    data: any[]; // Replace 'any' with the actual type of 'data'
  };
}

const userInitialState: UserState = {
  profile: {
    isFetched: false,
    data: null,
    isLogged: false,
  },
  debates: {
    isFetched: false,
    data: [],
  },
};

const userReducer = (state: UserState = userInitialState, action: any): UserState => {
  switch (action.type) {
    case 'LOGGED':
      return {
        ...state,
        profile: {
          ...state.profile,
          isLogged: false,
        },
      };
    // outros casos e lógica do reducer
    default:
      return state;
  }
};

export default userReducer;
