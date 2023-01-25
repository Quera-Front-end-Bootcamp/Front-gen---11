import React from "react";
import Button from "../../UI/Button";
const CourseCart = ({
  img,
  buttonText,
  color,
  alt,
  width,
  height,
  onClick,
}) => {
  return (
    <div
      className="course-cart"
      style={{ width, height, backgroundColor: `${color}` }}
    >
      <img src={img} alt={alt} className="course-cart__image" />
      <Button color="secondary" onClick={() => onClick()}>
        دوره {buttonText}
      </Button>
    </div>
  );
};

export default CourseCart;
