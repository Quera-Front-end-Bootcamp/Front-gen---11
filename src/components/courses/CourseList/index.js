import React, { useState } from "react";
import CourseCard from "../CourseCard";
import { course_data } from "../../../data/course-data";
import Pagination from "../Pagination";
function CourseList() {
  const [selectedValue, setSelectedValue] = useState("all");
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  };
  return (
    <section className="courses">
      <header className="courses__header">
        <ul className="courses__filter">
          <li className="courses__filter-item">
            <input
              name="filter"
              type="radio"
              value="all"
              id="all"
              checked={selectedValue === "all"}
              onChange={handleChange}
            />
            <label htmlFor="all">همه دوره ها</label>
          </li>
          <li className="courses__filter-item">
            <input
              name="filter"
              type="radio"
              value="new"
              id="new"
              checked={selectedValue === "new"}
              onChange={handleChange}
            />
            <label htmlFor="new">جدید ترین ها</label>
          </li>
          <li className="courses__filter-item">
            <input
              name="filter"
              type="radio"
              value="expensives"
              id="expensives"
              checked={selectedValue === "expensives"}
              onChange={handleChange}
            />
            <label htmlFor="expensives">گران ترین ها</label>
          </li>
          <li className="courses__filter-item">
            <input
              name="filter"
              type="radio"
              value="notComplete"
              id="notComplete"
              checked={selectedValue === "notComplete"}
              onChange={handleChange}
            />
            <label htmlFor="notComplete">تکمیل نشده ها</label>
          </li>
        </ul>
        <div className="courses__topic">
          <h2>دوره های آموزشی</h2>
        </div>
      </header>
      <main className="courses__main">
        <div className="courses__cards">
          {course_data.map((item) => {
            return (
              <CourseCard
                key={item.id}
                img={item.img}
                alt={item.name}
                topic={`${item.name} دوره`}
                teacher={item.teacher}
                capacity={item.capacity}
                price={item.price}
              />
            );
          })}
        </div>
      </main>
      <footer className="courses__footer">
        <Pagination/>
      </footer>
    </section>
  );
}

export default CourseList;
