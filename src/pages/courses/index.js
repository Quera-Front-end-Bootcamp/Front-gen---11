import React from "react";
import CourseList from "../../components/courses/CourseList";
import FooterSection from "../../components/footer";
import Header from "../../components/UI/Header";

const Courses = () => {
  return (
    <>
      <Header />
      <main>
        <CourseList />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default Courses;
