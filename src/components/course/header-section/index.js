import React from "react";
import Header from "../../../components/UI/Header";
import JavaScript from "../../../images/JavaScript-logo.png";
import Capacity from "../../../images/capacity.svg";
import Student from "../../../images/student.svg";
import Teacher from "../../../images/teacher.svg";
import Calendar from "../../../images/calendar.svg";
import Like from "../../../images/like.svg";
import Star from "../../../images/star.svg";

const CourseHeader = () => {
  return (
    <div className="course-header">
      <Header />

      <div className="course-header__information">
        <img
          className="course-header__icon"
          src={JavaScript}
          alt="javascript"
        />
        <h1 className="course-header__title">دوره جاوا اسکریپت</h1>

        <div className="course-header__des">
          <div className="course-header__numbers">
            <div className="course-header__capacity">
              <img
                className="course-header__des__icon__capacity"
                src={Capacity}
                alt="capacity"
              />
              <h4>ظرفیت :</h4>
              <span>59 نفر</span>
            </div>
            <div className="course-header__capacity">
              <img
                className="course-header__des__icon__student"
                src={Student}
                alt="capacity"
              />
              <h4>دانشجو :</h4>
              <span>53 نفر</span>
            </div>
          </div>

          <div className="course-header__box">
            <div
              className="course-header__box__percent"
              style={{ width: "60%" }}
            >
              <span>60 %</span>
            </div>
          </div>
        </div>
      </div>

      <div className="course-header__about">
        <div className="course-header__about__box">
          <img
            className="course-header__about__box__icon"
            src={Teacher}
            alt="teacher"
          />
          <h3>مدرس :</h3>
          <span>دکتر بحر العلومی</span>
        </div>
        <div className="course-header__about__box">
          <img
            className="course-header__about__box__icon"
            src={Calendar}
            alt="calendar"
          />
          <div className="course-header__about__box__calendar">
            <h3>تاریخ شروع :</h3>
            <span>1400 / 1 / 1</span>
          </div>

          <div className="course-header__about__box__calendar">
            <h3>تاریخ پایان :</h3>
            <span>1400 / 1 / 1</span>
          </div>
        </div>
        <div className="course-header__about__box">
          <img
            className="course-header__about__box__icon"
            src={Like}
            alt="like"
          />
          <h3>رتبه :</h3>
          <div className="course-header__about__box__rate">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
