import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import telegram from "./../../imgs/telegram.svg";
import whatsapp from "./../../imgs/whatsapp.svg";
import home from "./../../imgs/home.svg";
import instagram from "./../../imgs/instagram.svg";
import youtube from "./../../imgs/youtube.svg";
import logo from "./../../imgs/logo.svg";
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };
  const formData = [
    {
      id: 0,
      type: "text",
      name: "name",
      placeholder: "نام کاربری :",
      messageRequired: "لطفا نام کاربری خود را وارد کنید.",

      required: true,
    },
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "ایمیل:",
      required: true,
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 2,
      type: "number",
      name: "phone",
      placeholder: "شماره موبایل:",
      required: true,
      pattern: /^(\+98|0)?9\d{9}$/,
      messageRequired: "لطفا شماره موبایل خود را وارد کنید.",
      messagePattern: "شماره موبایل معتبر نمی باشد.",
    },
    {
      id: 3,
      type: "number",
      name: "identification",
      placeholder: "شماره ملی:",
      pattern: /^[0-9]{10}$/,
      required: true,
      messageRequired: "لطفا شماره ملی خود را وارد کنید.",
      messagePattern: "شماره ملی معتبر نمی باشد.",
    },
    {
      id: 4,
      type: "date",
      name: "data",
      placeholder: "تاریخ تولد:",
      required: true,
      messageRequired: "لطفا تاریخ تولد خود را وارد کنید.",
    },
    {
      id: 5,
      type: "password",
      name: "password",
      placeholder: "رمز عبور:",
      minLength: 6,
      required: true,
      messageRequired: "لطفا رمز عبور خود را وارد کنید.",
      messageLength: "تعداد کاراکتر های رمز عبور نمی تواند کمتر از 6 باشد.",
    },
  ];

  return (
    <section className="register">
      {/* image section */}
      <div className="register__img">
        <div className="register__img__contact">
          <div className="media register__img__contact__name">
            <h2 className="title--secondary media__title">
              آکادمی آموزشی بامبو
            </h2>
            <img src={logo} className="icon media__img" alt="bamboo logo" />
          </div>
          <div className="register__img__contact__icons">
            <a href="">
              <img src={youtube} className="icon" alt="youtube icon" />
            </a>
            <a href="">
              <img src={whatsapp} className="icon" alt="whatsapp icon" />
            </a>
            <a href="">
              <img src={telegram} className="icon" alt="telegram icon" />
            </a>
            <a href="">
              <img src={instagram} className="icon" alt="instagram icon" />
            </a>
          </div>
        </div>
        <Link to="/home" href="" className="register__img__home">
          <img src={home} className="icon" alt="home icon" />
        </Link>
      </div>
      {/* form section */}
      <div className="register__form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="register__form--container"
        >
          <h2 className="title--primary">ثبت نام</h2>

          {formData.map((data) => (
            <div className="register__form__input" key={data.id}>
              <input
                className="input--primary input input--block"
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                {...register(data.name, {
                  required: {
                    value: data.required,
                    message: data.messageRequired,
                  },
                  minLength: {
                    value: data.minLength,
                    message: data.messageLength,
                  },
                  pattern: {
                    value: data.pattern,
                    message: data.messagePattern,
                  },
                })}
              />
              <p className="register__form__validation">
                {errors[data.name]?.message}
              </p>
            </div>
          ))}

          <div className="register__form__btn--container">
            <Button color="main" freeSize="true">
              <Link to="/login" className="link link--primary btn__link">
                ورود
              </Link>
            </Button>
            <Button color="secondary" freeSize="true">
              ثبت نام
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
