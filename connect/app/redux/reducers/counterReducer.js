// Type constants
export const INCREMENT = "INCREMENT";

// Action creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

// reducer

// this will be the initial state for counterReducer
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};
