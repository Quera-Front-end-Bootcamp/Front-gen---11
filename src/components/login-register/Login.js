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
  return (
    <section className="login">
      <div className="login__img">
        <div className="login__img__contact">
          <div className="login__img__contact__name">
            <h2>آکادمی آموزشی بامبو</h2>
            <img src={logo} className="login__img__logo" />
          </div>
          <div className="login__img__contact__icons">
            <img src={youtube} className="login__img__contact__icon" />
            <img src={whatsapp} className="login__img__contact__icon" />
            <img src={telegram} className="login__img__contact__icon" />
            <img src={instagram} className="login__img__contact__icon" />
          </div>
        </div>
        <img src={home} className="login__img__home" />
      </div>
      <div className="login__form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login__form--container"
        >
          <h2 className="login__form__title">ورود کاربر</h2>

          <div className="login__input">
            <input
              className="login__form__input"
              type="email"
              name="email"
              placeholder="ایمیل:"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="login__validation">لطفا ایمیل خود را وارد کنید.</p>
            )}
          </div>

          <div className="login__input">
            <input
              className="login__form__input"
              type="password"
              name="password"
              placeholder="رمز عبور:"
              {...register("password", {
                minLength: 6,
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="login__validation">
                لطفا رمز عبور خود را وارد کنید.
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="login__validation">
                تعداد کاراکتر های رمز عبور نمی تواند کمتر از 6 باشد.
              </p>
            )}
          </div>

          <label className="checkbox">
            من را به خاطر بسپار
            <input type="checkbox" />
          </label>

          <Link to="/reset-pass" className="link link--secondary">
            فراموشی رمز
          </Link>

          <div class="login__btn">
            <Link to="/register" className="link link--secondary">
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
