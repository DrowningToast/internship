import Image from "next/image";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-medium text-gray-500">Categories</h1>
      <div className="grid grid-cols-5 gap-16 mt-8">
        <div
          className="relative bg-purple-600 rounded-3xl"
          style={{ paddingTop: "100%" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Articles.svg"} height={50} width={50} alt="" />
            Articles
          </div>
        </div>
        <div
          className="relative bg-purple-600 rounded-3xl"
          style={{ paddingTop: "100%" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Pictures.svg"} height={50} width={50} alt="" />
            Pictures
          </div>
        </div>
        <div
          className="relative bg-purple-600 rounded-3xl"
          style={{ paddingTop: "100%" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Company.svg"} height={50} width={50} alt="" />
            Company
          </div>
        </div>
        <div
          className="relative bg-purple-600 rounded-3xl"
          style={{ paddingTop: "100%" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Conclusion.svg"} height={50} width={50} alt="" />
            Conclusion
          </div>
        </div>
        <div
          className="relative bg-purple-600 rounded-3xl"
          style={{ paddingTop: "100%" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
            <Image src={"/icon/Contact.svg"} height={50} width={50} alt="" />
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
