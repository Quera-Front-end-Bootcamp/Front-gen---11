import React from "react";
import CourseList from "../../components/courses/CourseList";
import FooterSection from "../../components/footer";
import Header from "../../components/UI/Header";
import magnifying from "../../images/magnifying.svg";
const Courses = () => {
  return (
    <>
      <div className="courses_header">
        <Header />
        <div className="hero__search">
          <img
            className="hero__search__icon"
            src={magnifying}
            alt="magnifying"
          />
          <input className="hero__search__input" placeholder="جستجو" />
        </div>
      </div>
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
