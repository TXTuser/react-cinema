import React from "react";
import Info from "../UI/info/Info";

const FilmList = ({ filmInfo }) => { // Correct prop destructuring
  return (
    <div>
      {filmInfo.map((item) => ( // Map over filmInfo
        // <a href="#"><Info name={item.name} watch={item.watch} src={item.src} /></a>
        <Info name={item.name} place={item.place} director={item.director} src={item.src} content={item.content} role={item.role}/>
      ))}
    </div>
  );
};

export default FilmList;