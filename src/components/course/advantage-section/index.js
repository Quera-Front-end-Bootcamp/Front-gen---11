import course from "../../../images/course-detail.jpg";
import learn from "../../../images/learn.svg";
import online from "../../../images/online-learning.svg";
import success from "../../../images/success.svg";
const Advantage = () => {
  const advatages = [
    {
      id: 1,
      src: online,
      items: [
        "آشنایی با زبان برنامه نویسی جاوااسکریپت",
        `در پایان این دوره‌ی آموزشی، شما دانشجوی گرامی، قادر به فهمی عمیق
      ومناسب نسبت به این زبان خواهید بود.`,
      ],
    },
    {
      id: 2,
      src: learn,
      items: [
        "آشنایی با زبان برنامه نویسی جاوااسکریپت",
        `در پایان این دوره‌ی آموزشی، شما دانشجوی گرامی، قادر به فهمی عمیق
      ومناسب نسبت به این زبان خواهید بود.`,
      ],
    },
    {
      id: 3,
      src: success,
      items: [
        "آشنایی با زبان برنامه نویسی جاوااسکریپت",
        `در پایان این دوره‌ی آموزشی، شما دانشجوی گرامی، قادر به فهمی عمیق
      ومناسب نسبت به این زبان خواهید بود.`,
      ],
    },
  ];
  return (
    <div className="advantages">
      <img src={course} className="course" alt="cousre_picture" />
      <div className="advantages__container">
        <h2 className="advantages__heading">مزایای این دوره:</h2>
        <ul className="advantages__list">
          {advatages.map((adavntage) => (
            <li className="advantages__list__item" key={adavntage.id}>
              <img
                src={adavntage.src}
                className="advantages__icon"
                alt="advantage_image"
              />
              <div>
                {adavntage.items[0]}
                <br />
                {adavntage.items[1]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantage;
