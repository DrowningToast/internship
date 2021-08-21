import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const delayA = 2.35;
const delayB = 2;
const delayC = 2;
const delayD = 2;

const transitionConfig = {
  delay: delayA + delayB * 3,
  times: [0.0, 0.3, 0.65, 0.9, 1],
};

const Hero = ({ scrollToAbout }) => {
  const [subtitleStatus, setSubtitleStatus] = useState(false);

  //close opening card

  // trigger substitle
  useEffect(() => {
    setTimeout(() => {
      setSubtitleStatus(true);
    }, (delayA + delayB * 3 + delayC + delayD) * 1000);
  }, []);

  return (
    <>
      <div className="min-h-screen max-w-screen w-full h-auto relative grid place-items-center overflow-x-hidden section">
        <motion.div
          animate={{
            height: ["0%", "75%"],
            width: "100%",
            transition: { delay: transitionConfig.delay + delayC + 0.25 },
          }}
          className="w-full hero z-10 relative overflow-hidden"
        >
          <motion.div
            layout
            className={`${
              !subtitleStatus
                ? "absolute inset-0"
                : "w-full h-full flex flex-col items-center justify-center my-auto"
            } overflow-hidden`}
          >
            <motion.h1
              layout
              animate={{ scale: 0.8, translateX: "-50%", translateY: "-50%" }}
              className={`inline ${
                !subtitleStatus ? "absolute top-1/2 left-1/2 transform" : ""
              } font-extrabold text-6xl lg:text-9xl text-white`}
            >
              INTERNSHIP
            </motion.h1>
            {subtitleStatus && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layout
                className="text-baseline lg:text-xl text-center text-white"
              >
                Srinakharinwirot University Prasarnmit Demonstration School
                (Secondary)
              </motion.h2>
            )}
          </motion.div>
        </motion.div>
        <div
          id="video_container"
          className="min-h-screen absolute inset-0 w-full grid place-items-center"
        >
          <div id="overlay" className="absolute inset-0">
            <motion.div
              initial={{ x: "100%" }}
              animate={{
                x: [null, "0%", "0%", "-100%"],
                transition: transitionConfig,
              }}
              className="bg-black absolute inset-0 z-100"
            ></motion.div>
          </div>
          <motion.h1
            animate={{
              opacity: [0, 0, 1, 1, 0],
              transition: transitionConfig,
            }}
            className="inline absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-6xl lg:text-9xl"
          >
            INTERNSHIP
          </motion.h1>
          <motion.h1
            animate={{
              opacity: [0, 1, 1],
              scale: [1, 1, 0.8],
              transition: {
                delay: delayA + delayB * 3 + 0.5,
              },
            }}
            className="inline  font-extrabold text-6xl lg:text-9xl"
          >
            INTERNSHIP
          </motion.h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="h-10 w-10 border-2 border-black rounded-full flex flex-col justify-center items-center cursor-pointer transition duration-300 transform scrollButton"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-w-14 h-4 w-4 text-black"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </button>
        </div>
        {/* PSM */}
        <div className="h-screen right-0 w-full absolute">
          <motion.div
            // style={{ clipPath: "inset(0% 50% 0% 0%)" }}
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={{
              clipPath: "inset(0% 100% 0% 0)",
              transition: {
                delay: delayA + delayB,
                duration: delayB / 5,
              },
            }}
            className="w-full h-full absolute inset-0 bg-white z-90"
          >
            <motion.h1
              style={{ color: "#CF4450" }}
              className="font-bold text-9xl z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                transition: {
                  delay: delayA,
                  duration: delayB + 0.35,
                  times: [0, 0.25, 0.99, 1],
                },
              }}
            >
              PSM
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{
              backgroundColor: "#F6D854",
              width: "100vh",
              height: "100vh",
              x: "100vw",
              y: "-50%",
            }}
            animate={{
              backgroundColor: "#F6D854",
              width: "100vh",
              height: "100vh",
              x: "calc(0vw + -110%)",
              y: "-50%",
              transition: {
                delay: delayA + delayB,
                duration: delayB / 5,
              },
            }}
            className="rounded-full absolute top-1/2 z-100"
          ></motion.div>
          {/* Computer */}
          <motion.div
            // style={{ clipPath: "inset(0% 50% 0% 0%)" }}
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={{
              clipPath: "inset(0% 100% 0% 0)",
              transition: {
                delay: delayA + delayB * 2,
                duration: delayB / 3,
              },
            }}
            className="w-full h-full absolute inset-0 bg-white z-80"
          >
            <motion.h1
              style={{ color: "#F6D854" }}
              className="font-bold text-9xl z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                transition: {
                  delay: delayA + delayB + 0.2,
                  duration: delayB + 0.35,
                  times: [0, 0.1, 0.99, 1],
                },
              }}
            >
              Computer
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{
              backgroundColor: "#477BD3",
              width: "100vh",
              height: "100vh",
              x: "100vw",
              y: "-50%",
            }}
            animate={{
              backgroundColor: "#477BD3",
              width: "100vh",
              height: "100vh",
              x: "calc(0vw + -110%)",
              y: "-50%",
              transition: {
                delay: delayA + delayB * 2,
                duration: delayB / 3,
              },
            }}
            className="rounded-full absolute top-1/2 z-100"
          ></motion.div>
          {/* '62 */}
          <motion.h1
            style={{ color: "#477BD3" }}
            className="font-bold text-9xl z-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              transition: {
                delay: delayA + delayB * 2 + 0.2,
                duration: delayB + 0.1,
                times: [0, 0.1, 0.99, 1],
              },
            }}
          >
            {"'62"}
          </motion.h1>
        </div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: delayA - 0.7, times: [0, 0.2, 0.6, 1] }}
          className="absolute inset-0 flex justify-center items-center gap-x-6 z-100"
        >
          <div className="w-1/5 h-1/3 relative">
            <Image
              src={"/main/logo/PSMCOM.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="relative"
              priority
            />
          </div>
          <div className="w-0 h-1/3 border-l-2 border-black"></div>
          <div className="w-1/3 h-1/5 relative">
            <Image
              src={"/main/logo/SWU_Prasanmit_Demonstration_Sec_TH_Black.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="relative"
              priority
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
