import React from "react";
import cl from "./Select.modul.css";

const Select = ({ options,defaulValue, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">{defaulValue}</option>
        {options?.map(
          (
            options //id
          ) => (
            <option key={options.value} value={options.value}>
              {/* selected={id==1?'selected':''} */}
              {options.name}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Select;
