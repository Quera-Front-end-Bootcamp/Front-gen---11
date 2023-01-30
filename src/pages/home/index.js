import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Header from "../../components/UI/Header";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
import BlogSection from "./../../components/home/blog-section";
import Contact from "../../components/home/contact-section/Contact";
import Information from "../../components/home/information-section/Information";
import FooterSection from "../../components/footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <Information />
        <Course />
        <AdviseSection />
        <BlogSection />
        <Contact />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default Home;
