import Head from "next/head";
import Image from "next/image";
import About from "../components/Main/About";
import AboutInternship from "../components/Main/AboutInternship";
import Hero from "../components/Main/Hero";

export default function Home() {
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

      <main className="min-h-screen w-full ">
        <Hero />
        <About />
        <AboutInternship />
      </main>

      <footer></footer>
    </div>
  );
}
