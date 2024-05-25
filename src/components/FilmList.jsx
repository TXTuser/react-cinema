import React from "react";
import Info from "../UI/info/Info";

const FilmList = ({ filmInfo, inputValue }) => {

  if (!filmInfo.length) {
    return <h1 style={{ textAlign: "center" }}>Фильмы не найдены!</h1>;
  }

  return (
    <div>
      {filmInfo.map((item) => (
        <Info name={item.name} place={item.place} director={item.director} src={item.src} content={item.content} role={item.role}/>
      ))}
    </div>
  );
};

export default FilmList;