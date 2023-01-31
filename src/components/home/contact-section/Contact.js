import React, { useState } from "react";
import Button from "../../UI/Button";

import pic from "../../../images/contact-img.jpg";

export default function Contact() {
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const formData = [
    {
      id: 0,
      type: "email",
      name: "email",
      value: input.email || "",
      placeholder: "ایمیل خود را وارد کنید...",
    },
    {
      id: 1,
      type: "email",
      name: "email",
      value: input.email || "",
      placeholder: "ایمیل خود را وارد کنید...",
    },
  ];
  return (
    <section className="contact">
      <img className="contact__img" src={pic} alt="laptop reading" />
      <div className="contact__form">
        <form onSubmit={handleSubmit} className="contact__form__container">
          <h2 className="contact__form__header">پیشنهاد وانتقاد</h2>
          {formData.map((inp) => (
            <input
              key={inp.id}
              className="contact__form__input"
              type={inp.type}
              name={inp.name}
              value={inp.value}
              placeholder={inp.placeholder}
              onChange={handleChange}
            />
          ))}
          <div className="contact__button">
            <Button type="submit" color="main" textSize="large">
              ارسال
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
