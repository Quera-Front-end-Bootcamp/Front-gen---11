import React from "react";
import magnifying from "../../../images/magnifying.svg";
import Button from "../../UI/Button";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          باید راه بهتری برای آموزش ساخته میشد ,<br />
          پس ما ساختیمش
        </h1>
        <p className="hero__des">
          سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
          جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم
          با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم کنیم
        </p>
        <Button color="secondary">مشاهده دوره ها</Button>
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
