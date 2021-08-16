import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portrait = ({ callsign, type, url, id, i, company, color, route }) => {
  const [shown, setShown] = useState(false);
  const [selected, setSelected] = useState(0);

  const handlePrimaryClick = () => {
    console.log("click");
    setShown(true);
  };

  const handleSecondaryClick = () => {
    console.log("click2");
    // setShown(true)
  };

  const handleCanceling = () => {
    console.log("click3");
    setShown(false);
  };

  const handleCycle = () => {
    if (selected + 1 >= company.length) return setSelected(0);
    setSelected(selected + 1);
  };

  return (
    <div className="grid portrait md:h-72 lg:h-96 place-items-center w-full h-full">
      <AnimatePresence exitBeforeEnter>
        {shown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={handleCanceling}
            className={`inset-0 absolute block bg-gray-800 ${
              shown ? "z-30" : ""
            }`}
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={handlePrimaryClick}
        className="w-3/4 square max-x-lg grid place-items-center relative "
      >
        <Image
          src={url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`square w-full rounded-full ${
            shown ? "z-50" : "z-20"
          } relative`}
        ></Image>
        <motion.div
          layout
          whileHover={{ scale: !shown ? 1.225 : 1 }}
          animate={{
            scale: !shown ? 1.15 : 0.9,
            backgroundColor: shown ? "#ffffff" : "",
          }}
          style={{ borderColor: color.tertiary }}
          className={`absolute inset-0 rounded-full align-middle text-center grid place-items-center ${
            shown ? "border-0" : "border-4"
          } ${shown ? "z-50" : "z-20"}`}
        >
          {shown && (
            <motion.h1
              initial={{ scale: 0.35, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ color: color.primary }}
              className="text-4xl font-bold"
            >
              View more
            </motion.h1>
          )}
        </motion.div>
        <motion.div
          style={{ backgroundColor: color.tertiary }}
          animate={{ width: shown ? "110%" : "0%" }}
          layout
          className={`absolute top-0 bottom-0 left-1/2 ${
            shown ? "z-40" : "z-10"
          }`}
        >
          {shown && (
            <motion.div
              style={{ backgroundColor: color.tertiary }}
              layout
              className="rounded-full absolute -right-1/2 top-0 bottom-0 w-full h-full grid portraitCompany place-items-center py-2 pr-4 md:pr-3 lg:py-6 lg:pr-10 lg:gap-y-2 z-10"
            >
              <div
                className={`h-full square overflow-hidden rounded-full relative`}
              >
                <Image
                  src={`/data/${id}/logo_${selected + 1}.png`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                ></Image>
                <div className=""></div>
              </div>
              <div
                className={`w-full h-full ${
                  company[selected].name.length < 10
                    ? "text-lg lg:text-2xl"
                    : "text-xs lg:text-base"
                } text-center text-white align-middle grid place-items-center`}
              >
                {company[selected].name}
              </div>
            </motion.div>
          )}
          {company.length > 1 && (
            <motion.div
              animate={{ backgroundColor: color.primary, x: "-5%" }}
              whileHover={{ x: "5%", backgroundColor: color.secondary }}
              onClick={handleCycle}
              className="w-full h-full absolute -right-2/3 top-0 bottom-0 rounded-full z-0"
            ></motion.div>
          )}
        </motion.div>
      </div>
      <div
        className={`flex flex-col items-center justify-center md:gap-y-2 ${
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
