import React, { useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import FilmSort from "./components/FilmSort";
import imgOnePlusOne from "./image/oneplusne.webp";
import imgGreenMile from "./image/greenmile.webp";
import imgForrestGump from "./image/forrestGump.webp";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  
  const [filmInfo, setFilmInfo] = useState([
    {
      name: "1+1",
      content:
        "«Sometimes you have to reach into someone else's world to find out what's missing in your own»",
      place: "Франция • драма",
      director: "Режиссёр: Оливье Накаш",
      role: "В ролях: Франсуа Клюзе, Омар Си",
      src: imgOnePlusOne,
    },
    {
      name: "The Green Mile",
      content:
        "«Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них»",
      place: "США",
      director: "Режиссёр: Фрэнк Дарабонт",
      role: "В ролях: Том Хэнкс, Дэвид Морс",
      src: imgGreenMile,
    },
    {
      name: "Forrest Gump",
      content:
        "«Мир уже никогда не будет прежним, после того как вы увидите его глазами Форреста Гампа»",
      place: "США",
      director: "Режиссёр: Роберт Земекис",
      role: "В ролях: Том Хэнкс, Робин Райт",
      src: imgForrestGump,
    },
  ]);

  const filterInput = filmInfo.filter((film) => {
    return film.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
<div>
      <FilmSort inputValue={inputValue} setInputValue={setInputValue} />
      <hr />
      <FilmList filmInfo={filterInput} />
    </div>
  );
};

export default App;
