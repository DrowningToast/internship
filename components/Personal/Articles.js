import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const VideoComponent = ({ display, video2 }) => {
  if (display == "D") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          src="/assets/DTrooperCircle2.webm"
          className="w-full"
          ref={video2}
          playsInline
          muted
          loop
        ></video>
      </div>
    );
  } else if (display == "E") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          src="/assets/DTrooperRectangle1.webm"
          className="w-full"
          ref={video2}
          playsInline
          muted
          loop
        ></video>
      </div>
    );
  } else {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          src="/assets/DTrooperTriangle1.webm"
          className="w-full"
          ref={video2}
          playsInline
          muted
          loop
        ></video>
      </div>
    );
  }
};

const Articles = ({
  reference,
  articles,
  display,
  video1,
  video2,
  video3,
  video4,
}) => {
  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      // video1.current.pause();
      video2.current.play();
      // video3.current.pause();
      // video4.current.pause();
    } else {
      // video1.current.pause();
      video2.current.pause();
      // video3.current.pause();
      // video4.current.pause();
    }
  }, [inView, video1, video2, video3, video4]);

  return (
    <div className="relative" ref={reference}>
      <div ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
            Articles
          </h1>
          <div className="mt-8 text-base md:text-lg">
            {articles.map((article, i) => (
              <div key={i} style={{ textIndent: "1em" }} className="my-4">
                {article}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden absolute top-0" style={{ zIndex: "-1" }}>
          <svg
            className="w-8 lg:w-16"
            viewBox="0 0 72 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="0.5"
              cy="71.5"
              r="59"
              stroke="#5587E3"
              strokeWidth="25"
            />
          </svg>
        </div>
        <div
          className="lg:hidden absolute top-1/2 right-0 transform -translate-y-1/2"
          style={{ zIndex: "-1" }}
        >
          <svg
            className="w-8 lg:w-16"
            viewBox="0 0 44 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="44" cy="44" r="35" stroke="#2E6559" strokeWidth="18" />
          </svg>
        </div>
        <VideoComponent display={display} video2={video2} />
      </div>
    </div>
  );
};

export default Articles;
