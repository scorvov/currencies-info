import React from "react";

export const Input = ({ currency, label, ...props }) => {
  return (
    <div className={"input-group"}>
      <p className={"input-group_label"}>{label}</p>
      <input
        className={"input-group_input"}
        value={currency}
        {...props}
      />
    </div>
  );
};
