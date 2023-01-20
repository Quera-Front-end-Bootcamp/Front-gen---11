import React from "react";
import Button from "../../UI/Button";
const CourseCart = ({ img, buttonText, color, alt, width, height }) => {
  return (
    <div
      className="course-cart"
      style={{ width, height, backgroundColor: `${color}` }}
    >
      <img src={img} alt={alt} className="course-cart__image" />
      <Button text={`دوره ${buttonText}`} color="secondary" />
    </div>
  );
};

export default CourseCart;
