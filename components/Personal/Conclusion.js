import { useInView } from "react-intersection-observer";
import "intersection-observer";
import { useEffect } from "react";
const config = require("../../next.config");

const VideoComponent = ({ display, video4 }) => {
  if (display == "D") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          className="w-full"
          ref={video4}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperCircle4.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperCircle4.mov`} />
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
          ref={video4}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperRectangle4.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperRectangle4.mov`} />
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
          ref={video4}
          playsInline
          muted
          loop
          preload="auto"
        >
          <source
            src={`${config.basePath}/assets/DTrooperTriangle4.webm`}
            type="video/webm"
          />
          <source src={`${config.basePath}/assets/DTrooperTriangle4.mov`} />
        </video>
      </div>
    );
  }
};

const Conclusion = ({
  reference,
  conclusion,
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
      video3.current.pause();
      video4.current.play();
    } else {
      video1.current.pause();
      video2.current.pause();
      video3.current.pause();
      video4.current.pause();
    }
  }, [inView, video1, video2, video3, video4]);

  return (
    <div className="relative">
      <div ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8" ref={reference}>
          <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
            Conclusion
          </h1>
          <div className="mt-8 text-base md:text-lg">
            {conclusion.map((article, i) => (
              <div key={i} style={{ textIndent: "1em" }} className="my-4">
                {article}
              </div>
            ))}
          </div>
        </div>
        <VideoComponent display={display} video4={video4} />
      </div>
    </div>
  );
};

export default Conclusion;
