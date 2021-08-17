import { useRef } from "react";

import Head from "next/head";
import Image from "next/image";
import About from "../components/Main/About";
import AboutInternship from "../components/Main/AboutInternship";
import Categories from "../components/Main/Categories";
import Hero from "../components/Main/Hero";
import Major from "../components/Main/Major";

export default function Home() {
  const about = useRef(null);
  const scrollToAbout = () => about.current.scrollIntoView();

  return (
    <div>
      <Head>
        <title>Internship 62</title>
        <meta
          name="description"
          content="Website decdicated to telling the stories about PSM62 students intership experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen scroll-behaviour-container">
        <Hero scrollToAbout={scrollToAbout} />
        <About reference={about} />
        <AboutInternship />
        <Major />
        <Categories />
      </main>

      <footer></footer>
    </div>
  );
}
