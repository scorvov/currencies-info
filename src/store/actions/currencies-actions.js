import {HANDLE_CURRENCIES, SET_CURRENCIES_OFFICIAL} from "../constants";
import {apiService} from "../../services/api-service";

export const handleCurrencies = (inputs) => ({
    type: HANDLE_CURRENCIES,
    inputs
});

const setCurrenciesOfficial = (currencies) => ({
    type: SET_CURRENCIES_OFFICIAL,
    currencies
});

export const fetchCurrencies = () => (dispatch) => {
    apiService.getCurrencies()
        .then(currencies => dispatch(setCurrenciesOfficial(currencies)))
        .catch(err => console.log(err));
};
