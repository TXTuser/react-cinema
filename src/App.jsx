import React, { useState } from "react";
import FilmList from "./components/FilmList";
import Info from "./UI/info/Info";
import FilmSort from "./components/FilmSort";

const App = () => {
  const [filmInfo, setFilmInfo] = useState([
    {
      name: "1+1",
      content:
        "«Sometimes you have to reach into someone else's world to find out what's missing in your own»",
      place: "Франция • драма",
      director: "Режиссёр: Оливье Накаш",
      role: "В ролях: Франсуа Клюзе, Омар Си",
      src: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg",
    },
    {
      name: "The Green Mile",
      content:
        "«Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них»",
      place: "США",
      director: "Режиссёр: Фрэнк Дарабонт",
      role: "В ролях: Том Хэнкс, Дэвид Морс",
      src: "https://play-lh.googleusercontent.com/hZuesjSWMLsJK9UdfKut2LM4fVk7bfMoaGaRMt6gDR5mJSjv0AlbBUnR7PY0oBkzM1j5eoE9csuESEWzzNY",
    },
    {
      name: "Forrest Gump",
      content:
        "«Мир уже никогда не будет прежним, после того как вы увидите его глазами Форреста Гампа»",
      place: "США",
      director: "Режиссёр: Роберт Земекис",
      role: "В ролях: Том Хэнкс, Робин Райт",
      src: "https://play-lh.googleusercontent.com/ToGy2Cue0epHBdeRkq3dntz8on4ogI1UlKLGqMvgCptTwmpMWVkIxojwVUuvIjrMIFz2UiNjW73xcuofHQ=w240-h480-rw",
    },
  ]);

  return (
    <div>
      <FilmSort></FilmSort>
      <hr />
      <FilmList filmInfo={filmInfo} />
    </div>
  );
};

export default App;
