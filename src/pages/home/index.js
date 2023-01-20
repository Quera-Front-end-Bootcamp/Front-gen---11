import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Header from "../../components/UI/Header";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
        <AdviseSection />
      </main>
    </>
  );
};

export default Home;
