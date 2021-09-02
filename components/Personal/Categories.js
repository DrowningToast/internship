import Image from "next/image";

const Categories = ({
  gallerySize,
  scrollToArticles,
  scrollToPictures,
  scrollToCompany,
  scrollToConclusion,
  scrollToContact,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
        Categories
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 mt-8">
        <button
          className="relative rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 h-24 w-24 lg:h-44 lg:w-44 outline-none"
          style={{ backgroundColor: "#7246D1" }}
          onClick={scrollToArticles}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Articles.svg"} layout="fill" alt="" priority />
            </div>
            <div className="mt-2 text-sm lg:text-base">Articles</div>
          </div>
        </button>
        <button
          className="relative rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 h-24 w-24 lg:h-44 lg:w-44 outline-none"
          style={{ backgroundColor: "#7246D1" }}
          onClick={scrollToPictures}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Pictures.svg"} layout="fill" alt="" priority />
            </div>
            <div className="mt-2 text-sm lg:text-base">
              {gallerySize ? "Pictures" : "Videos"}
            </div>
          </div>
        </button>
        <button
          className="relative rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 h-24 w-24 lg:h-44 lg:w-44 outline-none"
          style={{ backgroundColor: "#7246D1" }}
          onClick={scrollToCompany}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Company.svg"} layout="fill" alt="" priority />
            </div>
            <div className="mt-2 text-sm lg:text-base">Company</div>
          </div>
        </button>
        <button
          className="relative rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 h-24 w-24 lg:h-44 lg:w-44 outline-none"
          style={{ backgroundColor: "#7246D1" }}
          onClick={scrollToConclusion}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image
                src={"/icon/Conclusion.svg"}
                layout="fill"
                alt=""
                priority
              />
            </div>
            <div className="mt-2 text-sm lg:text-base">Conclusion</div>
          </div>
        </button>
        <button
          className="relative rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 h-24 w-24 lg:h-44 lg:w-44 outline-none"
          style={{ backgroundColor: "#7246D1" }}
          onClick={scrollToContact}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Contact.svg"} layout="fill" alt="" priority />
            </div>
            <div className="mt-2 text-sm lg:text-base">Contact</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Categories;
