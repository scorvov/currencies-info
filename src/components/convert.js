import { Input } from "./common/input";
import React from "react";

export const Convert = ({
  amount1,
  amount2,
    ...props
}) => {
  return (
    <div className={"convert"}>
      <Input
        label={'Amount:'}
        min={0}
        type="number"
        id={"amount1"}
        value={amount1}
        {...props}
      />
      <Input
        label={'Amount:'}
        min={0}
        type="number"
        id={"amount2"}
        value={amount2}
        {...props}
      />
    </div>
  );
};
