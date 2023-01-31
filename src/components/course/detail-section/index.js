import logo from "../../../images/js-logo.svg";
import Button from "../../UI/Button";
const Detail = () => {
  return (
    <div className="detail-section">
      <div className="detail-section__description">
        <h2 className="detail-section__heading">توضیحات:</h2>
        <p>
          امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک
          سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته‌است.
          به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان
          حرفه‌ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش‌های
          مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه‌مندان و کارجویان
          قرار گرفته است. جاوااسکریپت زبان برنامه‌نویسی مفسری در سمت کلاینت است
          که می توان بوسیله
        </p>
      </div>
      <div className="card">
        <div className="card__header">
          <img src={logo} alt="" className="card__logo" />
          <h3 className="card__heading">دوره جاوا اسکریپت</h3>
        </div>
        <div className="card__body">
          <div className="card__price">
            <span>قیمت دوره:</span>
            <span>200.000 تومان</span>
          </div>
          <div className="card__discount">
            <span>تخفیف:</span>
            <span>10%</span>
          </div>
          <div className="card__remain-price">
            <span>مبلغ قابل پرداخت:</span>
            <span>180.000 تومان</span>
          </div>
          <div className="card__gray-boxes">
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
            <span> : </span>
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
            <span>&nbsp;:&nbsp;</span>
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
          </div>
          <div className="div">
            <Button freeSize="false" color="tertiary">
              ثبت‌نام در دوره
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
