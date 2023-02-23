import React from "react";
import CourseHeader from "../../components/course/header-section";
import Advantage from "../../components/course/advantage-section";
import Detail from "../../components/course/detail-section";
import { useParams } from "react-router-dom";
import { course_data } from "../../data/course-data";
import CommentSection from "../../components/commentSection";
const Course = () => {
  // const data = location.state.data;
  const { id } = useParams();
  let data = course_data.find((c) => c.id === +id);
  return (
    <main>
      <CourseHeader data={data} />
      <Detail data={data} />
      <Advantage data={data} />
      <CommentSection/>
    </main>
  );
};

export default Course;
