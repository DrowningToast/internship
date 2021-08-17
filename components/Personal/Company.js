import Image from "next/image";

const Company = ({ reference, number, company }) => {
  return (
    <div className="relative" ref={reference}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
          Company
        </h1>
        <div className="mt-8">
          {company.map((item, i) => (
            <div key={i} className="grid grid-cols-5 gap-4">
              <div className="col-span-2 p-8 flex flex-col justify-center items-center">
                <Image
                  src={`/data/${number}/logo_${i + 1}.png`}
                  height="200"
                  width="200"
                  alt=""
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center">
                <h2 className="text-4xl font-bold">{item.name}</h2>
                <div style={{ textIndent: "1em" }} className="mt-2 text-lg">
                  {item.description}
                </div>
              </div>
              <div className="col-span-5 relative">
                <div className="bg-gray-200 w-full h-72 rounded"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden absolute top-16 right-1/4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 124 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62 116C91.3667 116 115 91.9511 115 62.5C115 33.0489 91.3667 9 62 9C32.6333 9 9 33.0489 9 62.5C9 91.9511 32.6333 116 62 116Z"
              stroke="#2E6559"
              strokeWidth="18"
            />
          </svg>
        </div>
        <div className="hidden absolute top-1/2 right-0">
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
        <div className="hidden absolute bottom-0 left-0">
          <svg
            width="88"
            height="113"
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
    </div>
  );
};

export default Company;
