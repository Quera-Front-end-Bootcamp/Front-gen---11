import Button from "../../UI/Button";
const Detail = ({ data }) => {
  return (
    <div className="detail-section">
      <div className="detail-section__description">
        <h2 className="detail-section__heading">توضیحات:</h2>
        <p>{data.detail}</p>
      </div>
      <div className="card">
        <div className="card__header">
          <img src={data.img} alt={data.img} className="card__logo" />
          <h3 className="card__heading">دوره {data.pName}</h3>
        </div>
        <div className="card__body">
          <div className="card__price">
            <span>قیمت دوره:</span>
            <span>{data.price} تومان</span>
          </div>
          <div className="card__discount">
            <span>تخفیف:</span>
            <span>10%</span>
          </div>
          <div className="card__remain-price">
            <span>مبلغ قابل پرداخت:</span>
            <span>{data.price - (data.price * 10) / 100} تومان</span>
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
