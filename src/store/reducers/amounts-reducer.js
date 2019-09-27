import { HANDLE_AMOUNTS } from "../constants";

const initialState = {
  amount1: 0,
  amount2: 0
};

export const amountsReducer = (state = initialState, action) => {
  if (action.type === HANDLE_AMOUNTS) {
    return {
      ...action.amounts
    };
  } else {
    return state;
  }
};
