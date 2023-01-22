import React from "react";
import CourseCart from "./CourseCart";
import javaScriptLogo from "./../../../images/JavaScript-logo.png";
import bootStrapLogo from "./../../../images/bootstrap-logo.png";
import javaLogo from "./../../../images/java-logo.png";
import cSharpLogo from "./../../../images/c-sharp-logo.png";
const Courses = () => {
  const courseData = [
    {
      id: 0,
      img: javaScriptLogo,
      color: "#F7DF1E",
      buttonText: "جاوا اسکریپت",
      alt: "javascript-logo",
    },
    {
      id: 1,
      img: bootStrapLogo,
      color: "#CAB2EF",
      buttonText: "بوت استرپ",
      alt: "bootstrap-logo",
    },
    {
      id: 2,
      img: javaLogo,
      color: "#FFC7F8",
      buttonText: "جاوا",
      alt: "java-logo",
    },
    {
      id: 3,
      img: cSharpLogo,
      color: "#6A1577",
      buttonText: "سی شارپ",
      alt: "csharp-logo",
    },
  ];
  return (
    <div className="courses-info">
      {courseData.map((course) => (
        <div
          className={`courses-info__cart courses-info__cart-${course.id + 1}`}
          key={course.id}
        >
          <CourseCart
            img={course.img}
            color={course.color}
            buttonText={course.buttonText}
            alt={course.alt}
            width={course.width}
            height={course.height}
          />
        </div>
      ))}
    </div>
  );
};

export default Courses;
