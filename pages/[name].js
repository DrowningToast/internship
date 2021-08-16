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
  return {
    paths: [
      {
        params: {
          name: "supratouch",
        },
      },
    ],
    fallback: false,
  };
}

export default Name;
