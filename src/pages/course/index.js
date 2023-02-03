import React from "react";
import CourseHeader from "../../components/course/header-section";
import Advantage from "../../components/course/advantage-section";
import Detail from "../../components/course/detail-section";
import { useLocation } from "react-router-dom";
const Course = () => {
  const location = useLocation()
  const data = location.state.data
  return (
    <main>
      <CourseHeader data={data}/>
      <Detail data={data}/>
      <Advantage data={data}/>
    </main>
  );
};

export default Course;
