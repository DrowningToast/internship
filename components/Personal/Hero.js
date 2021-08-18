import Image from "next/image";

const Divider = () => {
  return (
    <div className="container mx-auto px-6">
      <hr />
    </div>
  );
};

const Hero = ({ name, position, companyName, number, display }) => {
  if (display == "D") {
    return (
      <div className="relative">
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
                src={`/data/${number}/thumbnail.png`}
                alt=""
                width={1000}
                height={800}
                objectFit="cover"
                className="z-30"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <video
            src="/assets/DTrooperCircle1.webm"
            className="h-full w-full"
            autoPlay
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
      <div className="relative">
        <div className="flex flex-col-reverse md:grid grid-cols-2 px-6 lg:px-8 mb-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={`/data/${number}/thumbnail.png`}
                alt=""
                width={1000}
                height={800}
                objectFit="cover"
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
            autoPlay
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
      <div className="relative">
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
                src={`/data/${number}/thumbnail.png`}
                alt=""
                width={1000}
                height={800}
                objectFit="cover"
                className="z-30"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <video
            src="/assets/DTrooperTriangle1.webm"
            className="h-full w-full"
            autoPlay
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
