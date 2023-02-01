import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Detail = ({ title, text, buttonText, buttonLink }) => {
  return (
    <div className="detail">
      <h1 className="detail__title">{title}</h1>
      <p className="detail__text">{text}</p>
      <div className="detail__button">
        <Button color="main">
          {buttonLink ? <Link to={buttonLink}>{buttonText}</Link> : buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Detail;
