import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen w-full grid gap-x-24 lg:grid-cols-2 lg:grid-rows-1 py-20 px-20 relative">
      <div className=" flex justify-center flex-col items-start gap-y-5">
        <h1 className="text-6xl font-bold">เอกคอมพิวเตอร์</h1>
        <p className="text-baseline font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est
        </p>
      </div>
      <div className=" relative">
        <div
          style={{ aspectRatio: "1/1" }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full "
        >
          <Image
            className="object-contain	shadow-md border-6 border-gray-400 z-10 rounded-full"
            src="/main/about.jpg"
            layout="fill"
          ></Image>
          <div
            style={{ backgroundColor: "#CF4450" }}
            className="w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-full"
          ></div>
          <div
            style={{ backgroundColor: "#F6D854" }}
            className="w-1/2 h-1/2 absolute left-1/2 transform "
          ></div>
        </div>
      </div>
      <div className="background bg-200"></div>
    </div>
  );
};

export default About;
