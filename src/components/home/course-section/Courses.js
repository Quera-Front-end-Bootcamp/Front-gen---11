import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CourseCart from "./CourseCart";
import CourseModal from "./../../course-modal";
import { course_data } from "../../../data/course-data";
import { useSelector, useDispatch } from "react-redux";
import { findCourseById, getAllCourses } from "../../../store/course";
const Courses = () => {
  const dispatch = useDispatch();
  const { loading, courses, course } = useSelector((store) => store.course);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const clickHandler = (id) => {
    setShowModal(true);
    setId(id);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = dispatch(getAllCourses());
    } catch (err) {
      throw new err();
    }
  };

  return (
    <>
      <div className="courses-info">
        {courses.slice(0, 4).map((course, index) => (
          <div
            className={`courses-info__cart courses-info__cart-${index + 1}`}
            key={course._id}
          >
            <CourseCart
              img={`.${course.image}`}
              color={course.color}
              buttonText={course.pName}
              alt={course.name}
              onClick={() => clickHandler(course._id)}
            />
          </div>
        ))}
      </div>
      {showModal &&
        createPortal(
          <CourseModal
            setModal={setShowModal}
            course={courses.find((c) => c._id === id)}
          />,
          document.body
        )}
    </>
  );
};

export default Courses;
