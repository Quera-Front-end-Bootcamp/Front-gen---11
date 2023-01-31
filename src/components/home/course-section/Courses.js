import React, { useState } from "react";
import { createPortal } from "react-dom";
import CourseCart from "./CourseCart";
import CourseModal from "./../../course-modal";
import { course_data } from "../../../data/course-data";
const Courses = () => {
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
              onClick={() => clickHandler(course.id)}
            />
          </div>
        ))}
      </div>
      {showModal &&
        createPortal(
          <CourseModal
            setModal={setShowModal}
            course={course_data.find((course) => course.id === id)}
          />,
          document.body
        )}
    </>
  );
};

export default Courses;
