import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Personal/Hero";
import Categories from "../components/Personal/Categories";
import Articles from "../components/Personal/Articles";
import Pictures from "../components/Personal/Pictures";
import Company from "../components/Personal/Company";
import Conclusion from "../components/Personal/Conclusion";
import InternBook from "../components/Personal/InternBook";
import Contact from "../components/Personal/Contact";

import meta from "../meta.json";

import { useRef } from "react";

const Blog = (props) => {
  const articles = useRef(null);
  const pictures = useRef(null);
  const company = useRef(null);
  const conclusion = useRef(null);
  const contact = useRef(null);

  const scrollToArticles = () => articles.current.scrollIntoView();
  const scrollToPictures = () => pictures.current.scrollIntoView();
  const scrollToCompany = () => company.current.scrollIntoView();
  const scrollToConclusion = () => conclusion.current.scrollIntoView();
  const scrollToContact = () => contact.current.scrollIntoView();

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

      <main>
        <div className="text-gray-400 font-light text-xl px-8 py-2 flex flex-row justify-between items-center">
          <div>
            <Link href="/" passHref>
              <Image
                src="/main/logo/SWU_Prasanmit_Demonstration_Sec_TH_Color.png"
                alt=""
                height="50"
                width="150"
                objectFit="contain"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="text-xs md:text-base">
            {props.major.split("-")[1]}
          </div>
        </div>
        <Hero
          name={props.name}
          position={props.position}
          companyName={props.company[0].name}
          number={props.id}
          display={props.display}
        />
        <Categories
          scrollToArticles={scrollToArticles}
          scrollToPictures={scrollToPictures}
          scrollToCompany={scrollToCompany}
          scrollToConclusion={scrollToConclusion}
          scrollToContact={scrollToContact}
        />
        <Articles
          reference={articles}
          articles={props.articles}
          display={props.display}
        />
        <Pictures
          reference={pictures}
          number={props.id}
          gallerySize={props.gallerySize}
          media={props.media}
        />
        <Company
          reference={company}
          number={props.id}
          company={props.company}
          display={props.display}
        />
        <Conclusion
          reference={conclusion}
          conclusion={props.conclusion}
          display={props.display}
        />
        <InternBook number={props.id} />
        <Contact reference={contact} email={props.email || ""} />
      </main>
    </div>
  );
};

export async function getStaticProps(ctx) {
  // get personal blog
  const slug = ctx.params.slug;
  const information = meta.members[slug];

  return {
    props: {
      slug: slug,
      ...information,
    },
  };
}

export async function getStaticPaths() {
  // Paths for everyone
  const paths = [];
  for (const [key, value] of Object.entries(meta.members)) {
    paths.push({
      params: {
        slug: key,
        ...value,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export default Blog;
