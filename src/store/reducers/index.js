import {combineReducers} from "redux";
import {currenciesReducer} from "./currencies-reducer";
import {ratesReducer} from "./rates-reducer";
import {amountsReducer} from "./amounts-reducer";


export const rootReducer = combineReducers({
    currenciesReducer,
    ratesReducer,
    amountsReducer
});
