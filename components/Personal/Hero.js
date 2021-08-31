import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Divider = () => {
  return (
    <div className="container mx-auto px-6">
      <hr />
    </div>
  );
};

const Hero = ({
  name,
  position,
  companyName,
  number,
  display,
  video1,
  video2,
  video3,
  video4,
}) => {
  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      video1.current.play();
      // video2.current.pause();
      // video3.current.pause();
      // video4.current.pause();
    } else {
      video1.current.pause();
      // video2.current.pause();
      // video3.current.pause();
      // video4.current.pause();
    }
  }, [inView, video1, video2, video3, video4]);

  if (display == "D") {
    return (
      <div className="relative" ref={ref}>
        <div className="flex flex-col-reverse md:grid grid-cols-2 px-6 lg:px-8 mb-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-4xl my-2">{name}</h1>
            <h3 className="font-medium text-2xl my-2">{position}</h3>
            <div
              className="px-8 py-2 my-2 text-2xl font-bold text-white rounded-full"
              style={{ backgroundColor: "#CF55E3" }}
            >
              {companyName}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={`/data/${number}/thumbnail.webp`}
                alt=""
                width={1000}
                height={800}
                objectFit="contain"
                className="z-30"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <video
            src="/assets/DTrooperCircle1.webm"
            className="h-full w-full"
            ref={video1}
            playsInline
            muted
            loop
          ></video>
        </div>
        <Divider />
      </div>
    );
  } else if (display == "E") {
    return (
      <div className="relative" ref={ref}>
        <div className="flex flex-col-reverse md:grid grid-cols-2 px-6 lg:px-8 mb-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={`/data/${number}/thumbnail.webp`}
                alt=""
                width={1000}
                height={800}
                objectFit="contain"
                className="z-30"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-4xl my-2">{name}</h1>
            <h3 className="font-medium text-2xl my-2">{position}</h3>
            <div
              className="px-8 py-2 my-2 text-2xl font-bold text-white rounded-full"
              style={{ backgroundColor: "#CF55E3" }}
            >
              {companyName}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <video
            src="/assets/DTrooperRectangle1.webm"
            className="h-full w-full"
            ref={video1}
            playsInline
            muted
            loop
          ></video>
        </div>
        <Divider />
      </div>
    );
  } else {
    return (
      <div className="relative" ref={ref}>
        <div className="flex flex-col-reverse md:grid grid-cols-2 px-6 lg:px-8 mb-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-4xl my-2">{name}</h1>
            <h3 className="font-medium text-2xl my-2">{position}</h3>
            <div
              className="px-8 py-2 my-2 text-2xl font-bold text-white rounded-full"
              style={{ backgroundColor: "#CF55E3" }}
            >
              {companyName}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={`/data/${number}/thumbnail.webp`}
                alt=""
                width={1000}
                height={800}
                objectFit="contain"
                className="z-30"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <video
            src="/assets/DTrooperTriangle1.webm"
            className="h-full w-full"
            ref={video1}
            playsInline
            muted
            loop
          ></video>
        </div>
        <Divider />
      </div>
    );
  }
};

export default Hero;
