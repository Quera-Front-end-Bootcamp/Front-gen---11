import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Header from "../../components/UI/Header";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
import BlogSection from "./../../components/home/blog-section";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
        <AdviseSection />
        <BlogSection />
      </main>
    </>
  );
};

export default Home;
