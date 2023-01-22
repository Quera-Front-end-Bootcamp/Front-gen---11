import React from "react";
import Button from "../../UI/Button";
const CourseCart = ({ img, buttonText, color, alt }) => {
  return (
    <div className="course-cart" style={{ backgroundColor: `${color}` }}>
      <img src={img} alt={alt} className="course-cart__image" />
      <Button color="secondary">دوره {buttonText}</Button>
    </div>
  );
};

export default CourseCart;
