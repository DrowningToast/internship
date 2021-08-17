import Image from "next/image";

const Hero = ({ name, position, companyName, number }) => {
  return (
    <div>
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
            />
            <div className="absolute top-12 left-24 lg:top-32 lg:left-32">
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
            <div className="absolute top-8 right-8 lg:top-16 lg:right-16">
              <svg
                className="w-8 lg:w-16"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="35"
                  stroke="#F6D854"
                  strokeWidth="18"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <hr />
      </div>
    </div>
  );
};

export default Hero;
