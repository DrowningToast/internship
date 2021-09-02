import Head from "next/head";
const config = require("../next.config");

const Header = ({ name }) => {
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
        content={config.basePath + "/main/IMG_0045.jpeg"}
      />
      <link rel="icon" href={config.basePath + "/psmcom-logo.png"} />
    </Head>
  );
};

export default Header;
