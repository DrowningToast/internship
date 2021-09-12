import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
const config = require("../../next.config");

const AboutInternship = ({ aboutVideo, internVideo, majorVideo }) => {
  const { inView, entry, ref } = useInView();
  const video = useRef(null);

  useEffect(() => {
    if (inView) {
      aboutVideo.current.pause();
      internVideo.current.play();
      majorVideo.current.pause();
    } else {
      aboutVideo.current.pause();
      internVideo.current.pause();
      majorVideo.current.pause();
    }
  }, [aboutVideo, inView, internVideo, majorVideo]);

  return (
    <div className="relative" ref={ref}>
      <div className="min-h-screen container mx-auto px-6 lg:px-8 py-8 section flex flex-col-reverse justify-center lg:grid grid-cols-2">
        <div className="flex flex-col justify-center items-start text-right my-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              วัตถุประสงค์
            </h1>
            <p className="md:text-lg lg:text-xl text-left">
              <ol className="list-decimal list-inside">
                <li>เพื่อให้นักเรียนค้นพบความถนัดและความสนใจ</li>
                <li>
                  เพื่อเสริมสร้างความรู้ ทักษะ
                  ประสบการณ์ทางด้านเทคโนโลยีมัลติมีเดีย และเทคโนโลยีสารสนเทศ
                </li>
                <li>
                  เพื่อให้นักเรียนได้ฝึกตนเองเกี่ยวกับการมีบุคลิกภาพที่ดี
                  และความรับผิดชอบในการทำงาน
                </li>
                <li>
                  เพื่อให้นักเรียนได้เรียนรู้ทักษะการปรับตัวเข้ากับเพื่อนร่วมงาน
                </li>
                <li>
                  เพื่อค้นพบแนวทางในอาชีพและประกอบการตัดสินใจในการเลือกคณะ
                  สาขาวิชาในระดับมหาวิทยาลัยในอนาคต
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end my-2">
          <div className="relative w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/3">
            <div style={{ paddingTop: "100%" }}>
              <Image
                className="shadow-md z-20 rounded-full"
                src="/main/aboutintern.png"
                layout="fill"
                objectFit="cover"
                alt=""
                loading="eager"
              />
            </div>
            <div
              style={{ backgroundColor: "#CF4450" }}
              className="w-1/2 h-1/2 absolute bottom-0 left-0 z-10"
            ></div>
            <div
              style={{ backgroundColor: "#F6D854" }}
              className="w-1/2 h-1/2 absolute top-0 right-0 z-10"
            ></div>
          </div>{" "}
          <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl">
            ผศ.สุคนธ์ อักษรชู
          </h2>
          <h5 className="text-sm md:text-xl lg:text-2xl">
            หัวหน้าวิชาเอก นวัตกรรมเทคโนโลยีมัลติมีเดีย
          </h5>
        </div>
      </div>
      <div>
        {/* For Desktop */}
        <div className="absolute bottom-0 left-0" style={{ zIndex: "-1" }}>
          <svg
            className="w-24 lg:w-32"
            viewBox="0 0 270 359"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="136"
              y="359"
              width="136"
              height="136"
              transform="rotate(180 136 359)"
              fill="#F6D854"
            />
            <path
              d="M136 359C136 283.89 195.994 223 270 223L270 359L136 359Z"
              fill="#CF4450"
            />
            <path
              d="M136 359C60.8893 359 5.87293e-06 298.111 0 223L136 223L136 359Z"
              fill="#477BD3"
            />
            <path
              d="M-4.62083e-06 87C75.1107 87 136 147.889 136 223L0 223L-4.62083e-06 87Z"
              fill="#2E6559"
            />
            <path
              d="M87.5 0C39.1751 0 0 38.9512 0 87H175C175 38.9512 135.825 0 87.5 0Z"
              fill="#477BD3"
            />
          </svg>
        </div>
        <div className="absolute top-1/4 right-0" style={{ zIndex: "-1" }}>
          <svg
            className="w-8 lg:w-24"
            viewBox="0 0 92 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 57C40 88.4802 65.9675 114 98 114L98 -2.53526e-06C65.9675 -1.13507e-06 40 25.5198 40 57Z"
              fill="#ECBA2C"
            />
            <path
              d="M69.5 126C107.884 126 139 95.1076 139 57L-6.03217e-06 57C-2.7007e-06 95.1077 31.1162 126 69.5 126Z"
              fill="#477BD3"
            />
          </svg>
        </div>
        <div
          className="hidden lg:block absolute top-0 left-0 w-full h-full"
          style={{ zIndex: "-1" }}
        >
          <video
            className="h-full w-full"
            ref={internVideo}
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${config.basePath}/assets/LandingPageInternshipInfo2.webm`}
              type="video/webm"
            />
            <source
              src={`${config.basePath}/assets/LandingPageInternshipInfo2.mov`}
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutInternship;
