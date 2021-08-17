import Image from "next/image";

const Categories = ({
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
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-16 mt-8">
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToArticles}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Articles.svg"} layout="fill" alt="" />
            </div>
            <div className="mt-2 text-sm lg:text-base">Articles</div>
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToPictures}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Pictures.svg"} layout="fill" alt="" />
            </div>
            <div className="mt-2 text-sm lg:text-base">Pictures</div>
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToCompany}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Company.svg"} layout="fill" alt="" />
            </div>
            <div className="mt-2 text-sm lg:text-base">Company</div>
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToConclusion}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Conclusion.svg"} layout="fill" alt="" />
            </div>
            <div className="mt-2 text-sm lg:text-base">Conclusion</div>
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToContact}
        >
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image src={"/icon/Contact.svg"} layout="fill" alt="" />
            </div>
            <div className="mt-2 text-sm lg:text-base">Contact</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Categories;
