import {
  HANDLE_CURRENCIES,
  SET_CURRENCIES_OFFICIAL,
} from "../constants";

const initialState = {
  currency1: "",
  currency2: "",
  currencies: null
};

export const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES_OFFICIAL:
      return {
        ...state,
        currencies: action.currencies
      };
    case HANDLE_CURRENCIES:
      return {
        ...state,
        ...action.inputs
      };

    default:
      return state;
  }
};
