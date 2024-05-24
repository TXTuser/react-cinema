import React from "react";
import cl from "./Select.modul.css";

const Select = ({ options, defaulValue, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {defaulValue}
        </option>
        {options?.map((options) => (
          <option key={options.value} value={options.value}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
