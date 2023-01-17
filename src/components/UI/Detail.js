import React from "react";
import Button from "./Button";
const Detail = ({ title, text, buttonText }) => {
  return (
    <div className="detail">
      <h1>{title}</h1>
      <p>{text}</p>
      <Button text={buttonText} color="main" />
    </div>
  );
};

export default Detail;
