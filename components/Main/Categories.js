import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

const delayA = 0.3;
const delayB = 0.9;
const delayC = 1.2;

const Category = ({
  i,
  backgroundColor,
  title,
  selected,
  setSelected,
  router,
}) => {
  return (
    <motion.div
      layout
      onClick={() => {
        setSelected(1);
      }}
      className={`w-1/5 h-full subCategory relative`}
    >
      <motion.div
        layout
        transition={{
          layoutX: {
            delay: delayA,
            duration: delayB,
          },
        }}
        style={{ backgroundColor: "#6648E9" }}
        className={`absolute inset-0 ${
          selected !== 1 ? "inset-0" : "top-0 botttom-0 w-screen"
        }`}
      ></motion.div>
      <motion.div
        animate={{
          opacity: selected !== 1 ? 1 : 0,
          transition: { duration: delayA },
        }}
        className="grid place-items-center row-start-2 subTitle h-full relative"
      >
        <motion.h2 className="text-3xl px-8 text-center font-extrabold text-white">
          Programming & Technology
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

const Categories = () => {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

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
          },
        }}
        className="bg-blue-400 w-full flex justify-center items-center"
      >
        <motion.div
          layout
          onClick={() => {
            setSelected(1);
            setTimeout(() => {
              router.push("/categories/programming");
            }, 1000 * (delayA + delayB + delayC));
          }}
          className={`w-1/5 h-full subCategory relative`}
        >
          <motion.div
            layout
            transition={{
              layoutX: {
                delay: delayA,
                duration: delayB,
              },
            }}
            style={{ backgroundColor: "#6648E9" }}
            className={`absolute inset-0 ${
              selected !== 1 ? "inset-0" : "top-0 botttom-0 w-screen"
            }`}
          ></motion.div>
          <motion.div
            animate={{
              opacity: selected !== 1 ? 1 : 0,
              transition: { duration: delayA },
            }}
            className="grid place-items-center row-start-2 subTitle h-full relative"
          >
            <motion.h2 className="text-3xl px-8 text-center font-extrabold text-white">
              Programming & Technology
            </motion.h2>
          </motion.div>
        </motion.div>
        <motion.div
          layout
          style={{ backgroundColor: "#CF4450" }}
          className={`w-1/5 h-full`}
        ></motion.div>
        <motion.div
          layout
          style={{ backgroundColor: "#F6D854" }}
          className={`w-1/5 h-full`}
        ></motion.div>
        <motion.div
          layout
          style={{ backgroundColor: "#2E6559" }}
          className={`w-1/5 h-full`}
        ></motion.div>
        <motion.div
          layout
          style={{ backgroundColor: "#CF55E3" }}
          className={`w-1/5 h-full`}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Categories;
