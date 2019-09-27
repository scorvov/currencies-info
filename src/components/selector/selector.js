import React, { useEffect } from "react";
import { getRates } from "../../utils/helpers";
import { Datalist, Input } from "../common";

const Selector = ({
  currency1,
  currency2,
  currencies,
  handleCurrencies,
  setRates
}) => {
  useEffect(() => {
    getRates(currencies, currency1, currency2, setRates);
  });

  const handleInputChange = event => {
    handleCurrencies({
      currency1,
      currency2,
      [event.target.id]: event.target.value
    });
  };
  return (
    <div className={"app-header"}>
      <Input
        label={"Currency I have"}
        id={"currency1"}
        list={"currencies"}
        value={currency1}
        onChange={handleInputChange}
      />
      <Input
        label={"Currency I want"}
        id={"currency2"}
        list={"currencies"}
        value={currency2}
        onChange={handleInputChange}
      />
      {currencies && <Datalist currencies={Object.entries(currencies)} />}
    </div>
  );
};

export default Selector;
