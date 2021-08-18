import Image from "next/image";

const VideoComponent = ({ display }) => {
  if (display == "D") {
    return (
      <div
        className="hidden lg:block absolute -top-1/2 left-0 h-full w-full"
        style={{ zIndex: "-1" }}
      >
        <video
          src="/assets/DTrooperCircle3.webm"
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
          src="/assets/DTrooperRectangle3.webm"
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
          src="/assets/DTrooperTriangle3.webm"
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

const Company = ({ reference, number, company, display }) => {
  return (
    <div className="relative" ref={reference}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
          Company
        </h1>
        <div className="mt-8">
          {company.map((item, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2 flex flex-col justify-center items-center">
                <div className="relative h-48 w-48">
                  <Image
                    src={`/data/${number}/logo_${i + 1}.png`}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-4xl font-bold">{item.name}</h2>
                <div style={{ textIndent: "1em" }} className="mt-2 text-lg">
                  {item.description}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="bg-gray-200 w-full h-72 rounded z-30"></div>
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
      <VideoComponent display={display} />
    </div>
  );
};

export default Company;
