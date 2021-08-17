import meta from "./meta.json";

const Name = () => {
  return <div></div>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = [];
  // Generate all path possible from json file
  for (const [key, value] of Object.entries(meta.members)) {
    paths.push(key.toLowerCase());
  }

  console.log(paths);

  return {
    paths: paths.map((path) => {
      return {
        params: {
          name: path,
        },
      };
    }),
    fallback: false,
  };
}

export default Name;
