import React, { useState } from "react";
import Button from "../../UI/Button";
import "../../../styles/sass/components/footer-section/_footer-section.scss";

function FooterSection() {
    
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
        }
      ];
    return(
        <section>
            <div className="FooterSection__top">
                <div className="FooterSection__top__right">
                    <h4 className="FooterSection__top__right__title">درباره بامبو</h4>
                    <p className="FooterSection__top__right__paragraph">
                        بامبو یکی از پر تلاش ترین و بروز ترین وب سایت های آموزشی در سطح ایران <br/>
                        است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و<br/>
                        دوره های آموزشی را در اختیار علاقه مندان ایرانی قرار دهد
                    </p>
                </div>

                <div className="FooterSection__top__left">
                    <form onSubmit={handleSubmit} className="FooterSection__top__left__form">
                        <h4 className="FooterSection__top__left__form__title">خبرنامه</h4>
                        {formData.map((inp) => (
                            <input
                            className="FooterSection__top__left__form__input"
                            type={inp.type}
                            name={inp.name}
                            value={inp.value}
                            placeholder={inp.placeholder}
                            onChange={handleChange}
                            />
                        ))}
                        <span className="FooterSection__top__left__form__bottom">
                            <Button type="submit" color="main" textSize="large">
                                عضویت   
                            </Button>
                        </span>
                    </form>
                </div>
            </div>



            <div className="FooterSection__mid">
                <div className="FooterSection__mid__right">
                    <h4 className="FooterSection__mid__right__title">ارتباط با ما</h4>
                    <p className="FooterSection__mid__right__firstEmail">iwillbemyvision@gmail.com</p>
                    <p className="FooterSection__mid__right__secondEmail">amir.azhkan@yahoo.com</p>
                    <div className="FooterSection__mid__right__icons">

                    </div>
                </div>

                <div className="FooterSection__mid__center">
                    <h4 className="FooterSection__mid__center__title">همراه باشید</h4>
                    <div  className="FooterSection__mid__center__firstlink">سوالات رایج</div>
                    <div  className="FooterSection__mid__center__secondlink">قوانین</div>
                    <div  className="FooterSection__mid__center__thirdlink">خدمات</div>
                </div>

                <div className="FooterSection__mid__left">
                    <img className="FooterSection__mid__left__imgRight" alt="etehadieImage" src="../../../images/etehadieh.jpg"/>
                    <img className="FooterSection__mid__left__imgCenter" alt="etehadieImage" src="../../../images/e-namad.jpg"/>
                    <img className="FooterSection__mid__left__imgleft" alt="etehadieImage" src="../../../images/e-namad.jpg.jpg"/>
                </div>
            </div>

            <div className="FooterSection__bottom">
                <p className="FooterSection__bottom__text">کلیه حقوق محصولات و محتوای این سایت متعلق به <span className="FooterSection__bottom__text__highlight"> بامبو </span>
                می باشد و هرگونه کپی برداری از محتوا و محصولات سایت 
                غیرمجاز و بدون رضایت ماست
                </p>
            </div>
        </section>
    )
};

export default FooterSection;
