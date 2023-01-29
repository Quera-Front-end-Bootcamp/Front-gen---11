import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
import Button from "../UI/Button";
import telegram from "./../../imgs/telegram.svg";
import whatsapp from "./../../imgs/whatsapp.svg";
import home from "./../../imgs/home.svg";
import instagram from "./../../imgs/instagram.svg";
import youtube from "./../../imgs/youtube.svg";
import logo from "./../../imgs/logo.svg";
export const Login = () => {
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
      type: "email",
      name: "email",
      placeholder: "ایمیل:",
      required: true,
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 1,
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
    <section className="login">
      {/* image section */}
      <div className="login__img">
        <div className="login__img__contact">
          <div className="media login__img__contact__name">
            <h2 className="title--secondary media__title">
              آکادمی آموزشی بامبو
            </h2>
            <img src={logo} className="icon media__img" />
          </div>
          <div className="login__img__contact__icons">
            <a href="">
              <img src={youtube} className="icon" />
            </a>
            <a href="">
              <img src={whatsapp} className="icon" />
            </a>
            <a href="">
              <img src={telegram} className="icon" />
            </a>
            <a href="">
              <img src={instagram} className="icon" />
            </a>
          </div>
        </div>
        <a href="" className="login__img__home">
          <img src={home} className="icon" />
        </a>
      </div>
      {/* form section */}
      <div className="login__form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login__form--container"
        >
          <div className="login__form__title">
            <h2 className="title--primary">ورود کاربر</h2>

            <img src={logo} className="icon" />
          </div>
          {formData.map((data) => (
            <div className="login__form__input" key={data.id}>
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
              <p className="login__form__validation">
                {errors[data.name]?.message}
              </p>
            </div>
          ))}

          <div className="login__form__extra">
            <label className="checkbox checkbox--primary">
              من را به خاطر بسپار
              <input type="checkbox" />
            </label>
            <Link to="/reset-pass" className=" link--secondary link">
              فراموشی رمز
            </Link>
          </div>

          <div className="login__form__btn--container">
            <Button color="main" freeSize="false">
              ورود
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