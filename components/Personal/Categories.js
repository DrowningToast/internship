import Image from "next/image";

const Categories = ({
  scrollToArticles,
  scrollToPictures,
  scrollToCompany,
  scrollToConclusion,
  scrollToContact,
}) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-medium text-gray-500">Categories</h1>
      <div className="grid grid-cols-5 gap-16 mt-8">
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToArticles}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Articles.svg"} height={50} width={50} alt="" />
            Articles
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToPictures}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Pictures.svg"} height={50} width={50} alt="" />
            Pictures
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToCompany}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Company.svg"} height={50} width={50} alt="" />
            Company
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToConclusion}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Conclusion.svg"} height={50} width={50} alt="" />
            Conclusion
          </div>
        </button>
        <button
          className="relative bg-purple-600 rounded-3xl cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          style={{ paddingTop: "100%" }}
          onClick={scrollToContact}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Contact.svg"} height={50} width={50} alt="" />
            Contact
          </div>
        </button>
      </div>
    </div>
  );
};

export default Categories;
