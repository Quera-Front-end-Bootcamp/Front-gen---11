function CourseCard(props) {
  return (
    <div className="courses__card">
      <div className="courses__card--img">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="courses__card--topic">
        <h3>{props.topic}</h3>
      </div>
      <div className="courses__card--teacher">مدرس : {props.teacher}</div>
      <div className="courses__card--extra">
        <div className="courses__card--capacity">ظرفیت : {props.capacity}</div>
        <a href="#demosas" className="courses__card--dtails">
          جزئیات
        </a>
      </div>
      <div className="courses__card--price">
        <span>تومان</span>
        {props.price}
      </div>
      {/* <span className="courses__card--space">a</span> */}
      <a href="#see-course" className="courses__card--seebtn">مشاهده دوره</a>
    </div>
  );
}

export default CourseCard;
