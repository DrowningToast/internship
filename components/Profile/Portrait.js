import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Portrait = ({
  callsign,
  type,
  url,
  id,
  i,
  company,
  color,
  route,
  containerWidth,
  elementWidth,
  setElementWidth,
  numberInLine,
}) => {
  const [shown, setShown] = useState(false);
  const [selected, setSelected] = useState(0);
  const element = useRef();
  const [isReversed, setIsReversed] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (elementWidth && !Number.isNaN(numberInLine)) {
      const pos = (i + 1) % numberInLine;

      if (containerWidth >= 1024 && i == elementWidth.length - 1) {
        setIsReversed(true);
        return;
      }

      if (!pos) setIsReversed(true);
      else setIsReversed(false);
    }
  }, [containerWidth, elementWidth, i, numberInLine]);

  useEffect(() => {
    const elementWidth = element.current.offsetWidth;
    setElementWidth((arr) => [...arr, elementWidth]);
  }, [element, setElementWidth]);

  useEffect(() => {
    router.prefetch(`${route}`);
  }, [route, router]);

  const handlePrimaryClick = () => {
    setShown(true);
  };

  const handleSecondaryClick = () => {
    router.push(`${route}`);
  };

  const handleCanceling = () => {
    setShown(false);
  };

  const handleCycle = () => {
    if (selected + 1 >= company.length) return setSelected(0);
    setSelected(selected + 1);
  };

  return (
    <div
      ref={element}
      className="flex flex-col justify-center items-center md:p-8"
    >
      <AnimatePresence exitBeforeEnter>
        {shown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={handleCanceling}
            className={`fixed top-0 left-0 h-full w-full block bg-gray-800 ${
              shown ? "z-30 cursor-pointer" : ""
            }`}
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={handlePrimaryClick}
        className="w-2/3 md:w-5/6 lg:h-48 lg:w-48 relative"
      >
        <div style={{ paddingTop: "100%" }}>
          <Image
            src={url}
            loading="eager"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={`md:w-full bg-gray-100 rounded-full ${
              shown ? "z-50" : "z-20"
            } relative`}
            alt=""
          />
        </div>
        <motion.div
          layout
          whileHover={{ scale: !shown ? 1.225 : 1 }}
          animate={{
            scale: !shown ? 1.15 : 0.9,
            backgroundColor: shown ? "#ffffff" : "transparent",
          }}
          style={{ borderColor: color.tertiary }}
          className={`absolute cursor-pointer inset-0 rounded-full text-center flex flex-col justify-center items-center ${
            shown ? "border-0" : "border-4"
          } ${shown ? "z-50" : "z-20"}`}
        >
          {shown && (
            <motion.h1
              onClick={handleSecondaryClick}
              initial={{ scale: 0.35, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ color: color.primary }}
              className="text-2xl font-bold"
            >
              View more
            </motion.h1>
          )}
        </motion.div>
        <motion.div
          style={{ backgroundColor: color.tertiary }}
          animate={{ width: shown ? "140%" : "0%" }}
          layout
          className={`absolute top-0 bottom-0 ${
            isReversed ? "right-1/2" : "left-1/2"
          } ${shown ? "z-40" : "z-10"}`}
        >
          {shown && (
            <motion.div
              style={{ backgroundColor: color.tertiary }}
              layout
              className={`absolute ${
                isReversed
                  ? "-left-1/2 pl-8 rounded-l-full"
                  : "-right-1/2 pr-8 rounded-r-full"
              } top-0 w-full h-full flex flex-col justify-center items-center py-2 z-10`}
            >
              <div className={`overflow-hidden w-2/5 relative`}>
                <div style={{ paddingTop: "100%" }}>
                  <Image
                    src={`/data/${id}/logo_${selected + 1}.webp`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt=""
                    loading="eager"
                  />
                </div>
              </div>
              <div
                className={`w-full ${
                  company[selected].name.length < 10
                    ? "text-lg lg:text-2xl"
                    : "text-xs lg:text-base"
                } text-center ${
                  color.tertiary == "#FFEB94" ? "text-black" : "text-white"
                } `}
              >
                {company[selected].name}
              </div>
            </motion.div>
          )}
          {/* {company.length > 1 && (
            <motion.div
              animate={{ backgroundColor: color.primary, x: "-5%" }}
              whileHover={{ x: "5%", backgroundColor: color.secondary }}
              onClick={handleCycle}
              className="w-full h-full absolute -right-2/3 top-0 bottom-0 rounded-full z-0"
            ></motion.div>
          )} */}
        </motion.div>
      </div>
      <div
        className={`mt-4 md:mt-8 flex flex-col items-center justify-center md:gap-y-2 ${
          shown ? "z-40 text-white" : ""
        }`}
      >
        <h1 className="inline-block w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl ">
          {callsign
            ? callsign
            : "The callsign is missing! This message is not supposed to be displayed."}
        </h1>
        <h2 className="inline-block text-center w-full font-thin text-base lg:text-xl ">
          {type
            ? type
            : "type is missing! This message is not supposed to be displayed."}
        </h2>
      </div>
    </div>
  );
};

export default Portrait;
