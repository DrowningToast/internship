import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = ({ reference, aboutVideo, internVideo, majorVideo }) => {
  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      aboutVideo.current.play();
      internVideo.current.pause();
      majorVideo.current.pause();
    } else {
      aboutVideo.current.pause();
      internVideo.current.pause();
      majorVideo.current.pause();
    }
  }, [aboutVideo, inView, internVideo, majorVideo]);

  return (
    <div className="relative" ref={reference}>
      <div
        className="min-h-screen container mx-auto px-6 lg:px-8 py-8 section flex flex-col gap-8 justify-center lg:grid grid-cols-2"
        ref={ref}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              วิชาเอกคอมพิวเตอร์
            </h1>
            <p
              className="md:text-lg lg:text-xl"
              style={{ textIndent: "1.5em" }}
            >
              วิชาเอกคอมพิวเตอร์
              เป็นเอกที่โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร
              (ฝ่ายมัธยม) ได้จัดตั้งขึ้น
              เนื่องจากทางโรงเรียนได้เล็งเห็นถึงความสำคัญของการนำเทคโนโลยีมาเป็นหลักสูตรเพื่อพัฒนาศักยภาพทางด้านคอมพิวเตอร์แขนงต่าง
              ๆ ของนักเรียนที่มีความสนใจจะนำไปใช้ต่อยอดในอนาคต
            </p>
            <p
              className="md:text-lg lg:text-xl"
              style={{ textIndent: "1.5em" }}
            >
              โดยหลักสูตรจะถูกแบ่งเป็น 2 วิชาเอก ได้แก่
              วิชาเอกนวัตกรรมเทคโนโลยีมัลติมีเดีย (IMT)
              และวิชาเอกเทคโนโลยีสารสนเทศ (IT)
              ซึ่งทั้งสองวิชาเอกมีเกณฑ์การจบหลักสูตร คือ
              นักเรียนต้องผ่านประสบการณ์การฝึกงานไม่ต่ำกว่า 140 ชั่วโมง
              ดังนั้นทางผู้จัดทำจึงได้สร้างเว็บไซต์นี้ขึ้นเพื่อนำประสบการณ์ที่ได้รับตลอดช่วงการฝึกงานมาแบ่งปันให้แก่ผู้ที่สนใจ
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end">
          <div className="relative w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/3">
            <div style={{ paddingTop: "100%" }}>
              <Image
                className="object-contain	shadow-md z-20 rounded-full lg:w-48"
                src="/main/about.jpg"
                layout="fill"
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
            <div className="absolute -top-8 -left-8 lg:-top-16 lg:-left-16 z-0">
              <svg
                viewBox="0 0 355 478"
                fill="none"
                className="w-32 lg:w-72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M350 82.2641C94.8339 -54.7812 -125.751 65.0026 99.5496 473"
                    stroke="#5587E3"
                    strokeWidth="3"
                  />
                </g>
                <ellipse cx="162.5" cy="28" rx="13.5" ry="14" fill="#CF4450" />
                <circle cx="10.5" cy="232.5" r="10.5" fill="#ECBA2C" />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0.500488"
                    y="22.5001"
                    width="354.209"
                    height="455.225"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* For Desktop */}
        <div className="absolute top-0 right-0" style={{ zIndex: "-1" }}>
          <svg
            className="w-32 lg:w-48"
            viewBox="0 0 248 272"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="134" width="136" height="136" fill="#F6D854" />
            <path
              d="M134 0C134 75.1107 74.0062 136 0 136L-5.85733e-06 0L134 0Z"
              fill="#CF4450"
            />
            <path
              d="M134 5.94475e-06C209.111 2.66155e-06 270 60.8893 270 136L134 136L134 5.94475e-06Z"
              fill="#477BD3"
            />
            <path
              d="M270 272C194.889 272 134 211.111 134 136L270 136L270 272Z"
              fill="#2E6559"
            />
          </svg>
        </div>
        <div className="absolute top-3/4 left-0" style={{ zIndex: "-1" }}>
          <svg
            className="w-16 lg:w-24"
            viewBox="0 0 90 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 69C50 37.5198 24.0325 12 -8 12L-8 126C24.0325 126 50 100.48 50 69Z"
              fill="#ECBA2C"
            />
            <path
              d="M20.5 0C-17.8838 0 -49 30.8924 -49 69H90C90 30.8924 58.8838 0 20.5 0Z"
              fill="#477BD3"
            />
          </svg>
        </div>
        <div
          className="hidden lg:block absolute top-0 left-0 h-full w-full"
          style={{ zIndex: "-1" }}
        >
          <video
            className="h-full w-full"
            playsInline
            muted
            loop
            preload="auto"
            ref={aboutVideo}
          >
            <source
              src="assets/LandingPageInternshipInfo1-WigglingCircle.webm"
              type="video/webm"
            />
            <source src="assets/LandingPageInternshipInfo1-WigglingCircle.mov" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
