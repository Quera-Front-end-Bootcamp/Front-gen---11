import Button from "../../UI/Button";

import pic from "../../../assets/images/contact-img.jpg";
import { useForm } from "react-hook-form";

export default function Contact() {
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
      required: true,
      placeholder: "ایمیل خود را وارد کنید...",
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 1,
      type: "text",
      name: "text",
      required: true,
      messageRequired: "لطفا متن خود را وارد کنید.",
      placeholder: "متن خود را وارد کنید...",
    },
  ];
  return (
    <section className="contact">
      <img className="contact__img" src={pic} alt="laptop reading" />
      <div className="contact__form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact__form__container"
        >
          <h2 className="contact__form__header">پیشنهاد وانتقاد</h2>
          {formData.map((inp) => (
            <div key={inp.id}>
              <input
                className="input input--block input--secondary"
                type={inp.type}
                name={inp.name}
                placeholder={inp.placeholder}
                {...register(inp.name, {
                  required: {
                    value: inp.required,
                    message: inp.messageRequired,
                  },
                  pattern: { value: inp.pattern, message: inp.messagePattern },
                })}
              />
              <p className="contact__form__validation">
                {errors[inp.name]?.message}
              </p>
            </div>
          ))}
          <div className="contact__button">
            <Button color="main">ارسال</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
