import React from "react";
import { Link } from "react-router-dom";
import { COURSE_ROUTE } from "../../routes";
import Button from "../UI/Button";
const CourseModal = ({ setModal, course }) => {
  const details = [
    {
      id: 0,
      title: "مدرس",
      value: course.teacher,
    },
    {
      id: 1,
      title: "ظرفیت",
      value: `${course.capacity} نفر`,
    },
    {
      id: 2,
      title: "تاریخ شروع",
      value: course.start.toLocaleString("fa-IR"),
    },
    {
      id: 3,
      title: "تاریخ پایان",
      value: course.end.toLocaleString("fa-IR"),
    },
    {
      id: 4,
      title: "قیمت",
      value: `${course.price} تومان`,
      color: true,
    },
  ];

  return (
    <>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modal">
        <div className="modal__information">
          <img
            src={course.img}
            alt={course.name}
            className="modal__information__image"
          />
          <div className="modal__information__details">
            <h2 className="modal__information__title">دوره {course.pName}</h2>
            {details.map((detail) => (
              <div key={detail.id} className="modal__information__option">
                <p>{detail.title} : </p>
                <p>{detail.value}</p>
              </div>
            ))}
            <div className="modal__information__progress">
              <p>وضغیت دوره : </p>
              <div
                className="modal__information__progress__bar"
                data-progress={course.capacity}
              >
                <div
                  className="modal__information__progress__bar--line"
                  style={{ width: `${course.capacity}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__button">
          <Link to={`${COURSE_ROUTE}/${course.name}`} state={{ data: course }}>
            <Button color="gray">مشاهده دوره</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CourseModal;
