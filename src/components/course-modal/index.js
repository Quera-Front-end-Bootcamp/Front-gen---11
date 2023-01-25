import React from "react";
import Button from "../UI/Button";
const CourseModal = ({ setModal, course }) => {
  console.log(course);
  const details = [
    {
      id: 0,
      title: "مدرس",
      value: course.teacher,
    },
    {
      id: 1,
      title: "ظرفیت",
      value: course.capacity,
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
      value: `${new Intl.NumberFormat("fa-Ir", { style: "currency" }).format(
        course.price
      )} تومان`,
      color: true,
    },
  ];

  return (
    <>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modal">
        <div>
          <img src={course.img} alt={course.name} />
          <h3>{course.name}</h3>
          {details.map((detail) => (
            <div key={detail.id}>
              <p>{detail.title} : </p>
              <p>{detail.value}</p>
            </div>
          ))}
          <div>
            <p>وضغیت دوره : </p>
            <div></div>
          </div>
        </div>
        <Button>مشاهده کامل</Button>
      </div>
    </>
  );
};
export default CourseModal;
