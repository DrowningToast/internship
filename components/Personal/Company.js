import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";
import { useEffect } from "react";

import Link from "next/link";
const config = require("../../next.config");

const VideoComponent = ({ display, video3 }) => {
  if (display == "D") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          className="w-full"
          ref={video3}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperCircle3.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperCircle3.mov`} />
        </video>
      </div>
    );
  } else if (display == "E") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          className="w-full"
          ref={video3}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperRectangle3.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperRectangle3.mov`} />
        </video>
      </div>
    );
  } else {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          className="w-full"
          ref={video3}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperTriangle3.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperTriangle3.mov`} />
        </video>
      </div>
    );
  }
};

const Company = ({
  reference,
  number,
  company,
  display,
  video1,
  video2,
  video3,
  video4,
}) => {
  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      video1.current.pause();
      video2.current.pause();
      video3.current.play();
      video4.current.pause();
    } else {
      video1.current.pause();
      video2.current.pause();
      video3.current.pause();
      video4.current.pause();
    }
  }, [inView, video1, video2, video3, video4]);

  return (
    <div className="relative" ref={reference}>
      <div ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
            Company
          </h1>
          <div className="mt-8">
            {company.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8"
              >
                <div className="lg:col-span-2 flex flex-col justify-center items-center">
                  <div className="relative h-48 w-48">
                    <Image
                      src={`/data/${number}/logo_${i + 1}.webp`}
                      layout="fill"
                      objectFit="contain"
                      alt=""
                      priority
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {item.name}
                  </h2>
                  <div style={{ textIndent: "1em" }} className="mt-2 text-lg">
                    {item.description}
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <iframe
                    src={item.map}
                    style={{ border: "0" }}
                    loading="lazy"
                    className="w-full h-72 rounded"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <div
            className="lg:hidden absolute top-1/2 right-0"
            style={{ zIndex: "-1" }}
          >
            <svg
              className="w-8 lg:w-24"
              viewBox="0 0 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="79"
                cy="79"
                r="64.5"
                stroke="#CF4450"
                strokeWidth="29"
              />
            </svg>
          </div>
          <div
            className="lg:hidden absolute top-full left-0 z-0"
            style={{ zIndex: "-1" }}
          >
            <svg
              className="w-16"
              viewBox="0 0 88 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="56.5"
                r="44"
                stroke="#5587E3"
                strokeWidth="25"
              />
            </svg>
          </div>
        </div>
        <VideoComponent display={display} video3={video3} />
      </div>
    </div>
  );
};

export default Company;
