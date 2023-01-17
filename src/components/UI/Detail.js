import React from "react";
import Button from "./Button";
const Detail = ({ title, text, buttonText }) => {
  return (
    <div className="detail">
      <h1 className="detail__title">{title}</h1>
      <p className="detail__text">{text}</p>
      <Button text={buttonText} color="main" />
    </div>
  );
};

export default Detail;
