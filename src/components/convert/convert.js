import { Input } from "../common/input";
import React from "react";

export const Convert = ({
  amount1,
  amount2,
  onChange
}) => {
  return (
    <div className={"convert"}>
      <Input
        label={'Amount:'}
        type="number"
        id={"amount1"}
        value={amount1}
        onChange={onChange}
      />
      <Input
        label={'Amount:'}
        type="number"
        id={"amount2"}
        value={amount2}
        onChange={onChange}
      />
    </div>
  );
};
