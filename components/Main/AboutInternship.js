import Image from "next/image";

const AboutInternship = () => {
  return (
    <div className="relative">
      <div className="min-h-screen container mx-auto px-6 lg:px-8 py-8 section flex flex-col-reverse gap-8 justify-center lg:grid grid-cols-2">
        <div className="flex flex-col justify-center items-start">
          <div
            style={{ aspectRatio: "1/1" }}
            className="relative w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/3"
          >
            <Image
              className="object-contain	shadow-md z-10 rounded-full"
              src="/main/aboutintern.png"
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
            <div className="absolute left-0 -bottom-3 transform translate-y-full text-center lg:text-left">
              <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl">
                ผศ.สุคนธ์ อักษรชู
              </h2>
              <h5 className="text-sm md:text-xl lg:text-2xl">
                หัวหน้าสาขาวิชา นวัตกรรมเทคโนโลยีมัลติมีเดีย
              </h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-right">
          <div className="text-center lg:text-right">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">การฝึกงาน</h1>
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
      </div>
      <div>
        {/* For Desktop */}
        <div className="absolute bottom-0 left-0">
          <svg
            width="200"
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
        <div className="absolute top-0 left-3/4 transform -translate-x-3/4">
          <svg
            width="600"
            viewBox="0 0 664 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M6 -16C102.5 85.5 368.2 229.6 659 -6"
                stroke="#5587E3"
                strokeWidth="3"
              />
            </g>
            <ellipse cx="139.5" cy="85" rx="13.5" ry="14" fill="#CF4450" />
            <circle cx="545.5" cy="70.5" r="10.5" fill="#ECBA2C" />
            <defs>
              <filter
                id="filter0_d"
                x="0.912842"
                y="-21.0336"
                width="663.031"
                height="148.026"
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
        <div className="absolute top-1/4 right-0">
          <svg
            width="92"
            height="126"
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
      </div>
    </div>
  );
};

export default AboutInternship;
