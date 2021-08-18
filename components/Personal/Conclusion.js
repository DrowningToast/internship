const VideoComponent = ({ display }) => {
  if (display == "D") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          src="/assets/DTrooperCircle4.webm"
          className="w-full"
          autoPlay
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
          src="/assets/DTrooperRectangle4.webm"
          className="w-full"
          autoPlay
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
          src="/assets/DTrooperTriangle4.webm"
          className="w-full"
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
    );
  }
};

const Conclusion = ({ reference, conclusion, display }) => {
  return (
    <div className="relative">
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
      <VideoComponent display={display} />
    </div>
  );
};

export default Conclusion;
