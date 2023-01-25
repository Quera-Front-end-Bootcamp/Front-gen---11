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
  } = useForm();
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
            <h2 className="title--secondary ">آکادمی آموزشی بامبو</h2>
            <img src={logo} className="icon" />
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
          <h2 className="login__form__title title--primary">ورود کاربر</h2>

          {formData.map((data) => (
            <div className="login__form__input">
              <input
                key={data.id}
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
                })}
              />
              <p className="login__form__validation">
                {errors[data.name]?.message}
              </p>
            </div>
          ))}

          <label className="checkbox checkbox--primary">
            من را به خاطر بسپار
            <input type="checkbox" />
          </label>

          <Link
            to="/reset-pass"
            className="login__form__link link--secondary link"
          >
            فراموشی رمز
          </Link>

          <div class="login__form__btns">
            <Link
              to="/register"
              className="login__form__link link--secondary link"
            >
              ثبت نام
            </Link>
            <Button color="main" textSize="normal">
              ورود
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
