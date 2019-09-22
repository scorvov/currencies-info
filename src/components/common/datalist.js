import React from "react";

export const Datalist = ({ currencies }) =>
  currencies ? (
    <datalist id={"currencies"}>
      {currencies.map(option => (
        <option key={option[0]} value={`${option[0]} (${option[1]})`} />
      ))}
    </datalist>
  ) : null;
