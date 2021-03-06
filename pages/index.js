import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Image from "next/image";
import About from "../components/Main/About";
import AboutInternship from "../components/Main/AboutInternship";
import Categories from "../components/Main/Categories";
import Hero from "../components/Main/Hero";
import Major from "../components/Main/Major";

const Home = () => {
  const router = useRouter();
  const about = useRef(null);
  const categories = useRef(null);
  const scrollToAbout = () => about.current.scrollIntoView();
  const scrollToCategories = () => categories.current.scrollIntoView();

  const aboutVideo = useRef(null);
  const internVideo = useRef(null);
  const majorVideo = useRef(null);

  // useEffect(() => {
  //   if (router.query.page == "categories") {
  //     scrollToCategories();
  //   }
  // }, [router]);

  return (
    <div>
      <Header />

      <main className="min-h-screen scroll-behaviour-container">
        <Hero scrollToAbout={scrollToAbout} />
        <br />
        <About
          reference={about}
          aboutVideo={aboutVideo}
          internVideo={internVideo}
          majorVideo={majorVideo}
        />
        <br />
        <AboutInternship
          aboutVideo={aboutVideo}
          internVideo={internVideo}
          majorVideo={majorVideo}
        />
        <br />
        <Major
          aboutVideo={aboutVideo}
          internVideo={internVideo}
          majorVideo={majorVideo}
        />
        <br />
        <Categories reference={categories} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
