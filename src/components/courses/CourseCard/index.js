import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import CourseModal from "../../course-modal";
function CourseCard(props) {
  console.log(props);
  const [showModal, setShowModal] = useState(false);
  const detailHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="courses__card">
        <div className="courses__card--img">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="courses__card--topic">
          <h3>{props.topic}</h3>
        </div>
        <div className="courses__card--teacher">مدرس : {props.teacher}</div>
        <div className="courses__card--extra">
          <div className="courses__card--capacity">
            ظرفیت : {props.capacity}
          </div>
          <a
            href="#demosas"
            onClick={detailHandler}
            className="courses__card--dtails"
          >
            جزئیات
          </a>
        </div>
        <div className="courses__card--price">
          <span>تومان</span>
          {props.price}
        </div>
        <Link
          to={"/course/:" + props.allData.id}
          className="courses__card--seebtn"
        >
          {/* <a className="courses__card--seebtn"> */}
          مشاهده دوره
          {/* </a> */}
        </Link>
      </div>
      {showModal &&
        createPortal(
          <CourseModal setModal={setShowModal} course={props.allData} />,
          document.body
        )}
    </>
  );
}

export default CourseCard;
