import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Portrait = ({ callsign, type, url, id, i, company, color }) => {
  const [shown, setShown] = useState(false);

  const handleEnter = () => {
    console.log("enetr");
    setShown(true);
  };

  const handleLeave = () => {
    console.log("leave");
    setShown(false);
  };

  console.log(company);

  return (
    <div className="grid portrait md:h-72 lg:h-96 place-items-center w-full h-full">
      <div
        onMouseOver={handleEnter}
        onMouseLeave={handleLeave}
        className="w-3/4 square max-x-lg grid place-items-center relative "
      >
        <Image
          src={url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`square w-full rounded-full ${shown ? "z-30" : "z-10"}`}
        ></Image>
        <motion.div
          style={{ backgroundColor: color }}
          animate={{ width: shown ? "110%" : "0%" }}
          layout
          className={`absolute top-0 bottom-0 left-1/2 ${
            shown ? "z-20" : "z-0"
          }`}
        >
          {shown && (
            <motion.div
              style={{ backgroundColor: color }}
              layout
              className="rounded-full absolute -right-1/2 top-0 bottom-0 w-full grid portraitCompany place-items-center py-2 pr-4 md:pr-3 lg:py-6 lg:pr-10 h-full lg:gap-y-2"
            >
              <div
                className={`h-full square overflow-hidden rounded-full relative`}
              >
                <Image
                  src={`/data/${id}/logo_1.png`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                ></Image>
              </div>
              <div className="h-full text-xs lg:text-base text-center text-white grid place-items-cetner">
                <h1 className="inline">{company[0].name}</h1>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center md:gap-y-2">
        <h1 className="inline-block w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl">
          {callsign
            ? callsign
            : "The callsign is missing! This message is not supposed to be displayed."}
        </h1>
        <h2 className="inline-block text-center w-full font-thin text-base lg:text-xl">
          {type
            ? type
            : "type is missing! This message is not supposed to be displayed."}
        </h2>
      </div>
    </div>
  );
};

export default Portrait;
