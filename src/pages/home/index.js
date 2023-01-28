import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Header from "../../components/UI/Header";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
import BlogSection from "./../../components/home/blog-section";
import Contact from "../../components/home/contact-section/Contact";
import Advantage from "../../components/course/advantage-section";
import Detail from "../../components/course/detail-section";
const Home = () => {
  return (
    <>
    <Detail/>
    <Advantage/>
      {/* <Header />
      <main>
        <Hero />
        <Course />
        <AdviseSection />
        <BlogSection />
        <Contact />
      </main> */}
    </>
  );
};

export default Home;
