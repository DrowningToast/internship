import Head from "next/head";

import meta from "../meta.json";

const blog = ({ slug }) => {
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
      <div>{slug}</div>
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
