import React from "react";
import cl from "./Input.module.css";

const Input = ({ setInputValue }) => {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
