import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Header from "../../components/UI/Header";
import Course from "./../../components/home/course-section";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
      </main>
    </>
  );
};

export default Home;
