import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import About from "../components/Main/About";
import AboutInternship from "../components/Main/AboutInternship";
import Categories from "../components/Main/Categories";
import Hero from "../components/Main/Hero";
import Major from "../components/Main/Major";

import { useInView } from "react-intersection-observer";

const Home = () => {
  const router = useRouter();
  const about = useRef(null);
  const categories = useRef(null);
  const scrollToAbout = () => about.current.scrollIntoView();
  const scrollToCategories = () => categories.current.scrollIntoView();

  const aboutVideo = useRef(null);
  const internVideo = useRef(null);
  const majorVideo = useRef(null);

  useEffect(() => {
    if (router.query.page == "categories") {
      scrollToCategories();
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Internship 62</title>
        <meta
          name="description"
          content="Website decdicated to telling the stories about PSM62 students intership experiences"
        />
        <link rel="icon" href="/psmcom-logo.png" />
      </Head>

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
