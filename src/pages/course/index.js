import React from "react";
import CourseHeader from "../../components/course/header-section";
import Advantage from "../../components/course/advantage-section";
import Detail from "../../components/course/detail-section";
import { useParams } from "react-router-dom";
const Course = () => {
  const courseId = useParams()
  console.log(courseId);
  return (
    <main>
      <CourseHeader />
      <Detail />
      <Advantage />
    </main>
  );
};

export default Course;
