import React from "react";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const FilmSort = () => {
  return (
    <form
      action=""
      className="filmsort"
      style={{ display: "flex", gap: "10px", justifyContent: "center" }}
    >
      <Input></Input>
      <Select
      defaulValue='Сортировка'
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      ></Select>
    </form>
  );
};

export default FilmSort;
