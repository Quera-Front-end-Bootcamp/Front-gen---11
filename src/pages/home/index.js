import React from "react";
import Hero from "../../components/home/hero-section/Hero";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
import BlogSection from "./../../components/home/blog-section";
import Contact from "../../components/home/contact-section/Contact";
import Information from "../../components/home/information-section/Information";
import FooterSection from "../../components/footer";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
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
