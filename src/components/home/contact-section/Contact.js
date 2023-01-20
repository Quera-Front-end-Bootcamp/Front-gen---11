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
  return (
    <section className="contact">
      <img className="contact__img" src={pic} alt="laptop reading" />
      <div className="contact__form">
        <form onSubmit={handleSubmit} className="contact__form__container">
          <h2 className="contact__form__header">پیشنهاد وانتقاد</h2>
          <input
            className="contact__form__input"
            type="email"
            name="email"
            value={input.email || ""}
            placeholder="ایمیل خود را وارد کنید..."
            onChange={handleChange}
          />
          <input
            className="contact__form__input"
            type="text"
            name="opinion"
            value={input.opinion || ""}
            placeholder="متن خود را وارد کنید..."
            onChange={handleChange}
          />
          <Button
            type="submit"
            text={"ارسال"}
            freeSize={"true"}
            color={"main"}
          />
        </form>
      </div>
    </section>
  );
}
