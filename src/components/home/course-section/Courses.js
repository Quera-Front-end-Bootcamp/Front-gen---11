import React, { useState } from "react";
import { createPortal } from "react-dom";
import CourseCart from "./CourseCart";
import CourseModal from "../../course-modal";
import { course_data } from "../../../data/course-data";
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
      width: "40rem",
      height: "40rem",
    },
    {
      id: 1,
      img: bootStrapLogo,
      color: "#CAB2EF",
      buttonText: "بوت استرپ",
      alt: "bootstrap-logo",
      width: "35rem",
      height: "40rem",
    },
    {
      id: 2,
      img: javaLogo,
      color: "#FFC7F8",
      buttonText: "جاوا",
      alt: "java-logo",
      width: "37rem",
      height: "28rem",
    },
    {
      id: 3,
      img: cSharpLogo,
      color: "#6A1577",
      buttonText: "سی شارپ",
      alt: "csharp-logo",
      width: "37rem",
      height: "40rem",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const clickHandler = (id) => {
    setShowModal(true);
    setId(+id);
  };
  return (
    <>
      <div className="courses-info">
        {course_data.slice(0, 4).map((course) => (
          <div
            className={`courses-info__cart courses-info__cart-${course.id + 1}`}
            key={course.id}
          >
            <CourseCart
              img={course.img}
              color={course.color}
              buttonText={course.pName}
              alt={course.name}
              width={course.width}
              height={course.height}
              onClick={() => clickHandler(course.id)}
            />
          </div>
        ))}
      </div>
      {/* {showModal &&
        createPortal(
          <CourseModal setModal={setShowModal} course={course_data} />,
          document.body
        )} */}
    </>
  );
};

export default Courses;
