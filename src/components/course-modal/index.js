import React from "react";
const CourseModal = ({ setModal }) => {
  return (
    <>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modal">
        <p>modal</p>
      </div>
    </>
  );
};
export default CourseModal;
