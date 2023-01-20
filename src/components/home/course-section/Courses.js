import React from "react";
import CourseCart from "./CourseCart";
import javaScriptLogo from "./../../../images/JavaScript-logo.png";
import bootStrapLogo from "./../../../images/bootstrap-logo.png";
import javaLogo from "./../../../images/java-logo.png";
import cSharpLogo from "./../../../images/c-sharp-logo.png";
const Courses = () => {
  return (
    <div className="courses-info">
      <div className="courses-info__cart courses-info__cart-1">
        <CourseCart
          img={javaScriptLogo}
          color="#F7DF1E"
          buttonText="جاوا اسکریپت"
          alt="javascript-logo"
          width="40rem"
          height="40rem"
        />
      </div>
      <div className="courses-info__cart courses-info__cart-2">
        <CourseCart
          img={bootStrapLogo}
          color="#CAB2EF"
          buttonText="بوت استرپ"
          alt="javascript-logo"
          width="35rem"
          height="40rem"
        />
      </div>
      <div className="courses-info__cart courses-info__cart-3">
        <CourseCart
          img={javaLogo}
          color="#FFC7F8"
          buttonText="جاوا"
          alt="javascript-logo"
          width="37rem"
          height="28rem"
        />
      </div>
      <div className="courses-info__cart courses-info__cart-4">
        <CourseCart
          img={cSharpLogo}
          color="#6A1577"
          buttonText="سی شارپ"
          alt="javascript-logo"
          width="37rem"
          height="40rem"
        />
      </div>
    </div>
  );
};

export default Courses;
