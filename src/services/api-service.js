import axios from "axios";
import {handleErrors} from "../utils/helpers";

const instance = axios.create({
  baseURL: "https://openexchangerates.org/api/"
});

export const apiService = {
  getCurrencies() {
    return instance.get(`/currencies.json`).then(response => response.data)
        .catch(handleErrors);
  },
  getRates() {
    return instance
      .get(`/latest.json`,{
        params: {
            app_id: "28e2bf2258fc4ee2afa8432fd82122f0"
        }
      })
      .then(response => response.data.rates)
        .catch(handleErrors);
  }
};
