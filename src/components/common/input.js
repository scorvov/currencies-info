import React from "react";

export const Input = ({ currency, onChange, label, ...props }) => {
  const list = props.id.includes("currency") ? "currencies" : null;
  return (
    <div className={"input-group"}>
      <p className={"input-group_label"}>{label}</p>
      <input
        className={"input-group_input"}
        value={currency}
        onChange={onChange}
        list={list}
        {...props}
      />
    </div>
  );
};
