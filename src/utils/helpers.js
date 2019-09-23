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

export const handleErrors = (err) => {
  if(err.response) {
    console.log("Problem with response ", err.response.status);
  } else if (err.request) {
    console.log("Problem with request ", err.message);
  } else console.log('unidentified error', err.message)
};
