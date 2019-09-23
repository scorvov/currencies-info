import { Input } from "./common/input";
import { Datalist } from "./common/datalist";
import React from "react";

export const Header = ({ currency1, currency2, currencies, ...props }) => {
/*  let datalist;
  if (currencies) {
      const currenciesFiltered = Object.entries(currencies).filter(
          item => ![currency2, currency1].includes(item[0])
      );
      datalist = <Datalist currencies={Object.entries(currencies)} />;
  }*/
  return (
    <div className={"app-header"}>
      <Input
        label={"Currency I have"}
        id={"currency1"}
        list={"currencies"}
        value={currency1}
        {...props}
      />
      <Input
        label={"Currency I want"}
        id={"currency2"}
        list={"currencies"}
        value={currency2}
        {...props}
      />
      {currencies && <Datalist currencies={Object.entries(currencies)} />}
    </div>
  );
};
