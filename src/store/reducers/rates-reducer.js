import {
  SET_RATES
} from "../constants";

const initialState = {
  ratesFor1: 0,
  ratesFor2: 0
};

export const ratesReducer = (state = initialState, action) => {
  if (action.type === SET_RATES) {
    return {
      ...action.rates
    };
  } else {
    return state;
  }
};
