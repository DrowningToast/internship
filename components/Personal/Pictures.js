import Image from "next/image";

const Pictures = ({ reference, number, gallerySize }) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8" ref={reference}>
      <h1 className="text-2xl font-medium text-gray-500">Pictures</h1>
      <div className="mt-8 flex flex-row justify-between">
        <Image
          src={`/data/${number}/image_1.JPG`}
          alt=""
          objectFit="cover"
          height="500"
          width="600"
        />
        <Image
          src={`/data/${number}/image_2.JPG`}
          alt=""
          objectFit="cover"
          height="500"
          width="600"
        />
      </div>
    </div>
  );
};

export default Pictures;
