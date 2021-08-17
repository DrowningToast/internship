import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen container mx-auto px-6 lg:px-8 py-8 section flex flex-col gap-8 justify-center lg:grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            เอกคอมพิวเตอร์
          </h1>
          <p className="md:text-lg lg:text-xl xl:text-2xl">
            เป็นวิชาเอกคอมพิวเตอร์ของโรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒประสานมิตร
            (ฝ่ายมัธยม) โดยเล็งเห็นถึงความสำคัญของการใช้เทคโนโลยีคอมพิวเตอร์
            โดยหลักสูตรมีแบ่งแยกย่อยเป็นสองเอกคือ นวัตกรรมเทคโนโลยีมัลติมีเดีย
            (IMT) และ เทคโนโลยีสารสนเทศ (IT)
            ซึ่งวิชาเอกคอมพิวเตอร์นั้นมีการฝึกประสบการณ์วิชาชีพเป็นเกณฑ์การจบการศึกษา
            ทางผู้จัดทำจึงนำประสบการณ์การฝึกประสบการณ์วิชาชีพนี้มาแบ่งปัน
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          style={{ aspectRatio: "1/1" }}
          className="relative w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/3"
        >
          <Image
            className="object-contain	shadow-md z-10 rounded-full lg:w-48"
            src="/main/about.jpg"
            layout="fill"
            alt=""
          />
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
    </div>
  );
};

export default About;
