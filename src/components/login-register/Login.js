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

          <div className="login__form__input">
            <input
              className="input--primary input input--block"
              type="email"
              name="email"
              placeholder="ایمیل:"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="login__form__validation">
                لطفا ایمیل خود را وارد کنید.
              </p>
            )}
          </div>

          <div className="login__form__input">
            <input
              className="input--primary input input--block"
              type="password"
              name="password"
              placeholder="رمز عبور:"
              {...register("password", {
                minLength: 6,
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="login__form__validation">
                لطفا رمز عبور خود را وارد کنید.
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="login__form__validation">
                تعداد کاراکتر های رمز عبور نمی تواند کمتر از 6 باشد.
              </p>
            )}
          </div>

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
