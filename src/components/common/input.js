import React from "react";

export const Input = ({ currency, onChange, label, ...props }) => {
    const list = props.id.includes("currency") ? "currencies" : null;
    return (
        <div>
            <p style={{ fontWeight: "bold" }}>
                {label}
                <input value={currency}
                       onChange={onChange}
                       list={list} {...props} />
            </p>
        </div>
    );
};
