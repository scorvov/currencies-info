import { Input } from "../common/input";
import { Datalist } from "../common/datalist";
import React from "react";

export const Header = ({ currency1, currency2, onChange, currencies }) => {
  let datalist;
  if (currencies) {
    const currenciesFiltered = Object.entries(currencies).filter(
      item => item[0] !== ![currency2, currency1].includes(item[0])
    );
    datalist = <Datalist currencies={currenciesFiltered} />;
  }
  return (
    <div className={"app-header"}>
      <Input
        label={"Currency I have"}
        id={"currency1"}
        value={currency1}
        onChange={onChange}
      />
      <Input
        label={"Currency I want"}
        id={"currency2"}
        value={currency2}
        onChange={onChange}
      />
      {datalist}
    </div>
  );
};
