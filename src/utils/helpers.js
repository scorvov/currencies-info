import { apiService } from "../services/api-service";

export const getRatesForCurrency = (ratesForUSD, currency) => {
  const diffRate = 1 / ratesForUSD[`${currency}`];
  return Object.fromEntries(
    Object.entries(ratesForUSD).map(([key, value]) => [key, value * diffRate])
  );
};

export const abbreviationCurrency = currency => {
  const reg = /[A-Z]{3}/;
  return currency.match(reg) ? currency.match(reg)[0] : currency;
};

export const handleErrors = err => {
  if (err.response) {
    console.log("Problem with response ", err.response.status);
  } else if (err.request) {
    console.log("Problem with request ", err.message);
  } else console.log("unidentified error", err.message);
};

export const getRates = (currencies, currency1, currency2, setRates) => {
  const currencyTo = abbreviationCurrency(currency1);
  const currencyFrom = abbreviationCurrency(currency2);
  if (
    currencies &&
    currencies.hasOwnProperty(currencyTo) &&
    currencies.hasOwnProperty(currencyFrom)
  ) {
    apiService
      .getRates()
      .then(ratesForUSD => {
        const ratesFor1 = getRatesForCurrency(ratesForUSD, currencyTo)[
          `${currencyFrom}`
        ];
        const ratesFor2 = getRatesForCurrency(ratesForUSD, currencyFrom)[
          `${currencyTo}`
        ];
        setRates({ ratesFor1, ratesFor2 });
      })
      .catch(err => console.log(err));
  } else setRates({ ratesFor1: 0, ratesFor2: 0 });
};

export const getAmounts = (event, ratesFor1, ratesFor2) => {
  const direction = event.target.id;
  const value = event.target.value < 0 ? 0 : event.target.value;
  const amount1 = direction === "amount1" ? value : value * ratesFor2;
  const amount2 = direction === "amount2" ? value : value * ratesFor1;
  return {amount1, amount2}
};
