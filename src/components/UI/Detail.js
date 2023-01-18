import React from "react";
import Button from "./Button";
const Detail = ({ title, text, buttonText }) => {
  return (
    <div className="detail">
      <h1 className="detail__title">{title}</h1>
      <p className="detail__text">{text}</p>
      <div className="detail__button">
        <Button text={buttonText} color="main" />
      </div>
    </div>
  );
};

export default Detail;
