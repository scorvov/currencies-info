import { Input } from "../common/input";
import React from "react";

export const Convert = ({
  currency1,
  currency2,
  amount1,
  amount2,
  onChange
}) => {
  return (
    <div className={"convert"}>
      <Input
        label={`Amount(${currency1})`}
        type="number"
        id={"amount1"}
        value={amount1}
        onChange={onChange}
      />
      <Input
        label={`Amount(${currency2})`}
        type="number"
        id={"amount2"}
        value={amount2}
        onChange={onChange}
      />
    </div>
  );
};
