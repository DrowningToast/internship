import Image from "next/image";

const Portrait = ({ callsign, type, url }) => {
  return (
    <div className="flex flex-col h-72 lg:h-96 justify-center items-center w-full">
      <div className="w-1/2 lg:w-full square max-x-lg p-2 lg:p-6 grid place-items-center">
        <div className="w-2/3 h-2/3 md:w-4/5 md:h-4/5 lg:w-full lg:h-full relative">
          <Image
            src={url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="square w-full rounded-full"
          ></Image>
        </div>
      </div>
      <h1 className="inline-block w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl">
        {callsign
          ? callsign
          : "The callsign is missing! This message is not supposed to be displayed."}
      </h1>
      <h2 className="inline-block text-center w-full font-thin text-xl">
        {type
          ? type
          : "type is missing! This message is not supposed to be displayed."}
      </h2>
    </div>
  );
};

export default Portrait;
