import React from "react";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const FilmSort = ({ inputValue, setInputValue }) => {
  return (
    <form
      action=""
      className="filmsort"
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Input inputValue={inputValue} setInputValue={setInputValue} /> 
      <Select
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </form>
  );
};

export default FilmSort;