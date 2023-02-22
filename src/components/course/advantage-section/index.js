const Advantage = ({ data }) => {
  return (
    <div className="advantages">
      <img src={data.image} className="course" alt={data.title} />
      <div className="advantages__container">
        <h2 className="advantages__heading">مزایای این دوره:</h2>
        <ul className="advantages__list">
          {data.advantages.map((adavntage) => (
            <li className="advantages__list__item" key={adavntage.id}>
              <img
                src={adavntage.src}
                className="advantages__icon"
                alt="advantage_image"
              />
              <div>{adavntage.paragraph}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantage;
