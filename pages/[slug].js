import Head from "next/head";
import Hero from "../components/Personal/Hero";
import Categories from "../components/Personal/Categories";
import Articles from "../components/Personal/Articles";
import Pictures from "../components/Personal/Pictures";
import Company from "../components/Personal/Company";
import Conclusion from "../components/Personal/Conclusion";
import InternBook from "../components/Personal/InternBook";
import Contact from "../components/Personal/Contact";

import meta from "../meta.json";

const blog = (props) => {
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
        <div className="text-gray-400 font-light text-xl px-8 py-4 text-right">
          {props.major}
        </div>
        <Hero
          name={props.name}
          position={props.position}
          companyName={props.company[0].name}
          number={props.id}
        />
        <Categories />
        <Articles articles={props.articles} />
        <Pictures number={props.id} gallerySize={props.gallerySize} />
        <Company number={props.id} company={props.company} />
        <Conclusion conclusion={props.conclusion} />
        <InternBook number={props.id} />
        <Contact email={props.email || ""} />
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

export default blog;
