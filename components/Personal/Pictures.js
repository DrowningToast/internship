import Image from "next/image";
import { useState } from "react";

const ImageList = ({ number, gallerySize, handleLightBox }) => {
  switch (gallerySize) {
    case 0:
      return <div></div>;
      break;
    case 1:
      return (
        <div className="block">
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_1.webp`)}
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/data/${number}/image_1.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
        </div>
      );
      break;
    case 2:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_1.webp`)}
            style={{ paddingTop: "75%" }}
          >
            <Image
              src={`/data/${number}/image_1.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_2.webp`)}
            style={{ paddingTop: "75%" }}
          >
            <Image
              src={`/data/${number}/image_2.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_1.webp`)}
            style={{ paddingTop: "177%" }}
          >
            <Image
              src={`/data/${number}/image_1.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_2.webp`)}
            style={{ paddingTop: "177%" }}
          >
            <Image
              src={`/data/${number}/image_2.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative col-span-2 md:col-span-1 flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_3.webp`)}
            style={{ paddingTop: "177%" }}
          >
            <Image
              src={`/data/${number}/image_3.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="relative lg:col-span-2 flex shadow-lg h-56 lg:h-auto cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_1.webp`)}
          >
            <Image
              src={`/data/${number}/image_1.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative lg:col-span-1 flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_2.webp`)}
            style={{ paddingTop: "75%" }}
          >
            <Image
              src={`/data/${number}/image_2.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative lg:col-span-1 flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_3.webp`)}
            style={{ paddingTop: "75%" }}
          >
            <Image
              src={`/data/${number}/image_3.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative lg:col-span-2 flex shadow-lg h-56 lg:h-auto cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_4.webp`)}
          >
            <Image
              src={`/data/${number}/image_4.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_1.webp`)}
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/data/${number}/image_1.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_2.webp`)}
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/data/${number}/image_2.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg lg:row-span-2 cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_3.webp`)}
            style={{ paddingTop: "177%" }}
          >
            <Image
              src={`/data/${number}/image_3.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_4.webp`)}
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/data/${number}/image_4.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_5.webp`)}
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/data/${number}/image_5.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
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
            className="relative flex shadow-lg cursor-pointer"
            onClick={() => handleLightBox(`/data/${number}/image_5.webp`)}
            style={{ paddingTop: "75%" }}
            key={index}
          >
            <Image
              src={`/data/${number}/image_${index}.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="eager"
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

const Pictures = ({ reference, number, gallerySize }) => {
  const [lightBox, setLightBox] = useState(false);
  const [image, setImage] = useState("");

  const handleLightBox = (url) => {
    setImage(url);
    setLightBox(true);
  };

  if (gallerySize == 0) {
    return <div ref={reference}></div>;
  } else {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8" ref={reference}>
        <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
          Pictures
        </h1>
        <div className="relative mt-8">
          <ImageList
            number={number}
            gallerySize={gallerySize}
            handleLightBox={handleLightBox}
          />
        </div>
        {lightBox ? (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
            <div className="relative h-5/6 w-5/6">
              <Image
                src={image}
                alt=""
                layout="fill"
                objectFit="contain"
                className="shadow-lg"
                priority
              />
            </div>
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setLightBox(false)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-current text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Pictures;
