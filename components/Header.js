import Head from "next/head";
const config = require("../next.config");

const Header = ({ name, number, gallerySize }) => {
  const randomNumber = (start, end, digit) => {
    return (
      Math.random() * (Number(end) - Number(start)) +
      Number(start)
    ).toFixed(digit);
  };

  return (
    <Head>
      <title>PSMCOM62 Internship {name ? `| ${name}` : ""}</title>
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="เว็บไซต์นี้เป็นส่วนหนึ่งของรายวิชาการฝึกงานเทคโนโลยีสารสนเทศ และการสื่อสาร (ว30213) ปีการศึกษา 2562 โรงเรียนสาธิต มศว ประสานมิตร (ฝ่ายมัธยม)"
      />
      <meta
        name="keywords"
        content="PSMCOM, PSMCOM62, PSM, สาธิต ประสานมิตร, เอกคอมพิวเตอร์, IMT, IT, โรงเรียนสาธิต มศว ประสานมิตร (ฝ่ายมัธยม)"
      />
      <meta name="author" content={name || "PSMCOM62 Internship"} />
      <meta
        property="og:title"
        content={`PSMCOM62 Internship ${name ? `| ${name}` : ""}`}
      />
      <meta
        property="og:site_name"
        content={`PSMCOM62 Internship ${name ? `| ${name}` : ""}`}
      />
      <meta
        property="og:description"
        content="เว็บไซต์นี้เป็นส่วนหนึ่งของรายวิชาการฝึกงานเทคโนโลยีสารสนเทศ และการสื่อสาร (ว30213) ปีการศึกษา 2562 โรงเรียนสาธิต มศว ประสานมิตร (ฝ่ายมัธยม)"
      />
      <meta
        property="og:image"
        content={
          !gallerySize
            ? config.basePath + "/main/IMG_0045.jpeg"
            : config.basePath +
              `/data/${number}/image_${randomNumber(1, gallerySize, 0)}.webp`
        }
      />
      <link rel="icon" href={config.basePath + "/psmcom-logo.png"} />
    </Head>
  );
};

export default Header;
