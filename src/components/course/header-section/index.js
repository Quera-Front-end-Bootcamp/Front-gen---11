import React, { useEffect } from "react";
import Header from "../../../components/UI/Header";
import Capacity from "../../../images/capacity.svg";
import Student from "../../../images/student.svg";
import Teacher from "../../../images/teacher.svg";
import Calendar from "../../../images/calendar.svg";
import Like from "../../../images/like.svg";
import Star from "../../../images/star.svg";
import { course_data } from "../../../data/course-data";
import { useParams } from "react-router";
const CourseHeader = ({ data }) => {
  return (
    <div className="course-header">
      <Header />

      <div className="course-header__information">
        <img className="course-header__icon" src={data.img} alt={data.name} />
        <h1 className="course-header__title">دوره {data.pName}</h1>

        <div className="course-header__des">
          <div className="course-header__numbers">
            <div className="course-header__capacity">
              <img
                className="course-header__des__icon__capacity"
                src={Capacity}
                alt="capacity"
              />
              <h4>ظرفیت :</h4>
              <span>{data.capacity} نفر</span>
            </div>
            <div className="course-header__capacity">
              <img
                className="course-header__des__icon__student"
                src={Student}
                alt="capacity"
              />
              <h4>دانشجو :</h4>
              <span>{data.student} نفر</span>
            </div>
          </div>

          <div className="course-header__box">
            <div
              className="course-header__box__percent"
              style={{ width: `${data.capacity}%` }}
            >
              <span>{data.capacity} %</span>
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
          <span>{data.teacher}</span>
        </div>
        <div className="course-header__about__box">
          <img
            className="course-header__about__box__icon"
            src={Calendar}
            alt="calendar"
          />
          <div className="course-header__about__box__calendar">
            <h3>تاریخ شروع :</h3>
            <span>{data.start.toLocaleString("fa-IR")}</span>
          </div>

          <div className="course-header__about__box__calendar">
            <h3>تاریخ پایان :</h3>
            <span>{data.end.toLocaleString("fa-IR")}</span>
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
