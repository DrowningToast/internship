import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const CategoryScene = dynamic(() => import("./r3f/CategoryScene"), {
  ssr: false,
});
// import CategoryScene from "./r3f/CategoryScene";

const delayA = 0.25;
const delayB = 0.5;
const delayC = 0.7;
const ease = [0.43, 0.13, 0.23, 0.96];

const Category = ({
  i,
  backgroundColor,
  title,
  selected,
  setSelected,
  router,
  link,
  scene,
}) => {
  return (
    <motion.div
      layout
      onClick={() => {
        setSelected(i);
        setTimeout(() => {
          router.push(`/categories/${link}`);
        }, 1000 * (delayA + delayB + delayC));
      }}
      className={`w-full h-1/5 xl:w-1/5 xl:h-full subCategory ${
        selected === i ? "" : "relative"
      }`}
    >
      <motion.div
        layout
        transition={{
          layoutX: {
            delay: delayA,
            duration: delayB,
            ease,
          },
        }}
        style={{ backgroundColor }}
        className={`absolute inset-0 ${
          selected === i ? "top-0 bottom-0 w-screen z-10" : "inset-0"
        }`}
      >
        {/* <div className="square h-full mx-auto">
          <CategoryScene />
        </div> */}
      </motion.div>
      <motion.div
        animate={{
          opacity: selected === i ? 0 : 1,
          transition: { duration: delayA },
        }}
        className={`grid place-items-center xl:row-start-2 subTitle h-full relative ${
          selected === i ? "z-20" : ""
        }`}
      >
        <motion.h2 className="text-3xl px-8 text-center font-extrabold text-white">
          {title}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

const Categories = () => {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const info = [
    {
      i: 1,
      backgroundColor: `#6648E9`,
      title: "Programming & Technology",
      link: "programming",
    },
    {
      i: 2,
      backgroundColor: `#CF4450`,
      title: "Production & Videos",
      link: "production",
    },
    {
      i: 3,
      backgroundColor: "#F6D854",
      title: "2D & 3D Design",
      link: "design",
    },
    {
      i: 4,
      backgroundColor: "#2E6559",
      title: "Business",
      link: "business",
    },
    {
      i: 5,
      backgroundColor: "#CF55E3",
      title: "Game Development & Design",
      link: "game",
    },
  ];

  // useEffect(()=>{

  // }, [])

  return (
    <div className="h-screen w-full grid categories place-items-center items-start overflow-hidden">
      <div className="h-full w-full flex justify-center items-center">
        <h1
          style={{ color: "#656565" }}
          className="text-center text-7xl uppercase title"
        >
          Categories
        </h1>
      </div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{
          height: selected ? "0%" : "100%",
          transition: {
            delay: delayA + delayB,
            duration: delayC,
            ease,
          },
        }}
        className="bg-blue-400 w-full flex justify-center items-center relative overflow-hidden flex-col xl:flex-row"
      >
        {info.map((category) => {
          return (
            <Category
              key={category.i}
              i={category.i}
              backgroundColor={category.backgroundColor}
              title={category.title}
              selected={selected}
              setSelected={setSelected}
              router={router}
              link={category.link}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Categories;
