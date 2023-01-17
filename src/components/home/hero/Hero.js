import React from "react";
import "./hero.scss";
import magnifying from "../../../images/magnifying.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <div>
          <h1 className="hero__title">
            باید راه بهتری برای آموزش ساخته میشد ,
          </h1>
          <h1 className="hero__title">پس ما ساختیمش</h1>
        </div>
        <p className="hero__des">
          سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
          جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم
          با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم کنیم
        </p>
        <button className="hero__button">مشاهده دوره ها</button>
        <div className="hero__search">
          <img
            className="hero__input__icon"
            src={magnifying}
            alt="magnifying"
          />
          <input className="hero__input" placeholder="جستوجو" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
