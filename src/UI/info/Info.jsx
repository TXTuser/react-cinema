import React from "react";
import cl from "./info.module.css";

const Info = (props) => {
  return (
    <div className={cl.container}>
      <div className={cl.mainBlock}>
        <div className={cl.logoName}>
          <img src={props.src} style={{ width: "50px", height: "75px" }} />
          <h3 className="filmName">{props.name}</h3>
        </div>
        <div>
          <p>{props.place}</p>
          <p>{props.director}</p>
          <p>{props.role}</p>
        </div>
      </div>
      <hr />
      <div className={cl.content}>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Info;
