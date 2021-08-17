import Image from "next/image";

const Hero = ({ name, position, companyName, number }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-4xl my-2">{name}</h1>
          <h3 className="font-medium text-2xl my-2">{position}</h3>
          <div className="px-8 py-4 my-2 text-2xl font-bold text-white bg-purple-500 rounded-full">
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
            <div className="absolute top-32 left-32">
              <svg
                width="120"
                height="120"
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
            <div className="absolute top-16 right-16">
              <svg
                width="70"
                height="70"
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
      <div className="container mx-auto">
        <hr />
      </div>
    </div>
  );
};

export default Hero;
