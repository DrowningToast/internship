import Image from "next/image";

const Pictures = ({ reference, number, gallerySize }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8" ref={reference}>
      <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
        Pictures
      </h1>
      <div className="relative mt-8 flex flex-row justify-between">
        <Image
          src={`/data/${number}/image_1.JPG`}
          alt=""
          layout="intrinsic"
          objectFit="cover"
          height="500"
          width="500"
        />
        <Image
          src={`/data/${number}/image_2.JPG`}
          alt=""
          layout="intrinsic"
          objectFit="cover"
          height="500"
          width="500"
        />
      </div>
    </div>
  );
};

export default Pictures;
