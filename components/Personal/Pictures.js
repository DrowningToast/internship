import Image from "next/image";

const ImageList = ({ number, gallerySize }) => {
  switch (gallerySize) {
    case 0:
      return <div></div>;
      break;
    case 1:
      return (
        <div className="block">
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={`/data/${number}/image_1.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
      break;
    case 2:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`/data/${number}/image_1.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`/data/${number}/image_2.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <Image
              src={`/data/${number}/image_1.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <Image
              src={`/data/${number}/image_2.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative col-span-2 md:col-span-1 flex shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <Image
              src={`/data/${number}/image_3.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="grid grid-cols-3 gap-4">
          <div className="relative col-span-2 flex shadow-lg">
            <Image
              src={`/data/${number}/image_1.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative col-span-1 flex shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`/data/${number}/image_2.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative col-span-1 flex shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`/data/${number}/image_3.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative col-span-2 flex shadow-lg">
            <Image
              src={`/data/${number}/image_4.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="relative flex shadow-lg">
            <Image
              src={`/data/${number}/image_1.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative flex shadow-lg">
            <Image
              src={`/data/${number}/image_2.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative flex shadow-lg row-span-2"
            style={{ aspectRatio: "9/16" }}
          >
            <Image
              src={`/data/${number}/image_3.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative flex shadow-lg">
            <Image
              src={`/data/${number}/image_4.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative flex shadow-lg">
            <Image
              src={`/data/${number}/image_5.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      );
      break;
    default:
      const images = [];

      for (let index = 1; index <= gallerySize; index++) {
        images.push(
          <div
            className="relative flex shadow-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`/data/${number}/image_${index}.JPG`}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        );
      }
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images}
        </div>
      );
      break;
  }
};

const VideoList = () => {
  return (
    <div className="mt-4 bg-gray-200 shadow-lg px-8 py-4 text-center">
      Video Here
    </div>
  );
};

const Pictures = ({ reference, number, gallerySize, media }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8" ref={reference}>
      <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
        Pictures
      </h1>
      <div className="relative mt-8">
        <ImageList number={number} gallerySize={gallerySize} />
        {media == "video" ? <VideoList /> : null}
      </div>
    </div>
  );
};

export default Pictures;
