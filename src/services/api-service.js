import axios from "axios";

const instance = axios.create({
  baseURL: "https://openexchangerates.org/api/"
});

export const apiService = {
  getCurrencies() {
    return instance.get(`/currencies.json`).then(response => response.data);
  },
  getRates() {
    return instance
      .get(`/latest.json?app_id=28e2bf2258fc4ee2afa8432fd82122f0`)
      .then(response => response.data.rates);
  }
};
