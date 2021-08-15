import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const CategoryScene = dynamic(() => import("./r3f/CategoryScene"), {
  ssr: false,
});
// import CategoryScene from "./r3f/CategoryScene";

const delay = 0.8;
const delayA = 0.45;
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
        }, 1000 * (delayA + delayB + delayC + delay));
      }}
      className={`w-full h-1/5 xl:h-full subCategory ${
        selected === i ? "" : "relative"
      }`}
    >
      <motion.div
        layout
        transition={{
          layoutX: {
            delay: delayA + delay,
            duration: delayB,
            ease,
          },
        }}
        style={{ backgroundColor }}
        className={`absolute inset-0 grid place-items-center ${
          selected === i ? "top-0 bottom-0 w-screen z-10" : "inset-0"
        }`}
      >
        <AnimatePresence>
          {!(selected === i) && (
            <motion.div
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-full h-full overflow-hidden hidden xl:block"
            >
              <motion.div
                animate={{
                  opacity: selected === i ? 0 : 1,
                  transition: { duration: delay },
                }}
                className="square w-5/6 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
              >
                <CategoryScene selected={link} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        animate={{
          opacity: selected === i ? 0 : 1,
          transition: { duration: delayA, delay },
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
      link: "gamedevelopment",
    },
  ];

  // useEffect(()=>{

  // }, [])

  return (
    <div className="h-screen w-full grid categories place-items-center items-start overflow-hidden">
      <div className="h-full w-full flex justify-center items-center">
        <h1
          style={{ color: "#656565" }}
          className="text-center text-3xl lg:text-7xl uppercase title mx-auto"
        >
          Categories
        </h1>
      </div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{
          height: selected ? "0%" : "100%",
          transition: {
            delay: delayA + delayB + delay,
            duration: delayC,
            ease,
          },
        }}
        className="bg-blue-400 w-full flex flex-col xl:grid xl:grid-cols-5 justify-center items-center relative overflow-hidden xl:flex-row"
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
