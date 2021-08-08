import Image from "next/image";

const AboutInternship = () => {
  return (
    <div className="max-h-screen xl:min-h-screen w-full grid place-items-center py-4 lg:pt-4 lg:py-20 px-12 md:px-36 lg:px-28 my-24 xl:my-0 relative">
      <div className="w-full h-full xl:h-3/5 grid gap-x-16 grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:items-end">
        <div className=" flex justify-center flex-col items-start gap-y-4 lg:gap-y-10 lg:col-start-2">
          <h1 className="text-4xl lg:text-6xl font-bold">การฝึกงาน</h1>
          <p className="inline-block md:text-lg lg:text-xl xl:text-2xl md:mr-4 lg:mr-12">
            เป็นวิชาเอกคอมพิวเตอร์ของโรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒประสานมิตร
            (ฝ่ายมัธยม) โดยเล็งเห็นถึงความสำคัญของการใช้เทคโนโลยีคอมพิวเตอร์
            โดยหลักสูตรมีแบ่งแยกย่อยเป็นสองเอกคือ นวัตกรรมเทคโนโลยีมัลติมีเดีย
            (IMT) และ เทคโนโลยีสารสนเทศ (IT)
            ซึ่งวิชาเอกคอมพิวเตอร์นั้นมีการฝึกประสบการณ์วิชาชีพเป็นเกณฑ์การจบการศึกษา
            ทางผู้จัดทำจึงนำประสบการณ์การฝึกประสบการณ์วิชาชีพนี้มาแบ่งปัน
          </p>
        </div>
        <div className="grid place-items-center lg:block relative h-full lg:col-start-1">
          <div
            style={{ aspectRatio: "1/1" }}
            className="relative lg:absolute mb-24 lg:my-0 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:transform w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/3"
          >
            <Image
              className="object-contain	shadow-md z-10 rounded-full"
              src="/main/aboutintern.png"
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
            <div className="absolute left-0 -bottom-3 transform translate-y-full">
              <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl">
                ผศ.สุคนธ์ อักษรชู
              </h2>
              <h5 className="text-sm md:text-xl lg:text-2xl">
                หัวหน้าสาขาวิชา นวัตกรรมเทคโนโลยีมัลติมีเดีย
              </h5>
            </div>
          </div>
        </div>
        <div className="background bg-200"></div>
      </div>
    </div>
  );
};

export default AboutInternship;
