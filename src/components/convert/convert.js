import React, { useEffect } from "react";
import { getAmounts } from "../../utils/helpers";
import {Input} from "../common";

const Convert = ({ amount1, amount2, ratesFor1, ratesFor2, handleAmounts }) => {
  const readonly = ratesFor1 === 0;

  useEffect(() => {
    if (readonly) handleAmounts({ amount1: 0, amount2: 0 });
  });
  const handleAmountChange = event => {
    handleAmounts(getAmounts(event, ratesFor1, ratesFor2));
  };

  return (
    <div className={"convert"}>
      <Input
        label={"Amount:"}
        type="number"
        id={"amount1"}
        value={amount1}
        onChange={handleAmountChange}
        disabled={readonly}
      />
      <Input
        label={"Amount:"}
        type="number"
        id={"amount2"}
        value={amount2}
        onChange={handleAmountChange}
        disabled={readonly}
      />
    </div>
  );
};

export default Convert;
