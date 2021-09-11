import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portrait from "../../components/Profile/Portrait";
import meta from "../../meta.json";
import Header from "../../components/Header";
const configFile = require("../../next.config");
/**
 *
 * Profile type = Standard 5 photo (standard), Flexible 5+ (flex), video (video), instragram stories (stories)
 */

const BackgroundVideo = ({ category }) => {
  switch (category) {
    case "programming":
      return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryProgramming.webm`}
              type="video/webm"
            />
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryProgramming.mov`}
            />
          </video>
        </div>
      );
      break;
    case "production":
      return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryProduction.webm`}
              type="video/webm"
            />
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryProduction.mov`}
            />
          </video>
        </div>
      );
      break;
    case "design":
      return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryDesign.webm`}
              type="video/webm"
            />
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryDesign.mov`}
            />
          </video>
        </div>
      );
      break;
    case "business":
      return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryBusiness.webm`}
              type="video/webm"
            />
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryBusiness.mov`}
            />
          </video>
        </div>
      );
      break;
    case "gamedevelopment":
      return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryGameDevelopment.webm`}
              type="video/webm"
            />
            <source
              src={`${configFile.basePath}/assets/LandingPageCategoryGameDevelopment.mov`}
            />
          </video>
        </div>
      );
      break;
    default:
      return <div></div>;
      break;
  }
};

const Category = ({ title, members, color, category }) => {
  const container = useRef();
  const [width, setWidth] = useState(0);

  const updateContainerWidth = () => {
    if (!container.current) return;
    var styles = window?.getComputedStyle(container.current, null);
    var padding =
      parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const width = parseFloat(styles.width) - padding;

    if (!width) return;
    setWidth(width);
  };

  useEffect(() => {
    if (!window || !container.current) return;
    window.addEventListener("resize", updateContainerWidth);
    updateContainerWidth();
  }, [container.current]);

  return (
    <>
      <Header />

      <div className="w-full min-h-screen relative overflow-x-hidden">
        <div className="min-h-screen w-full flex flex-col absolute top-0 left-0 z-10">
          <div
            style={{
              backgroundColor: color.primary,
              flexBasis: "0",
              minHeight: "20vh",
              maxHeight: "20vh",
            }}
            className="h-full w-full grid place-items-center relative"
          >
            <h1 className="text-center font-extrabold text-white text-xl md:text-3xl lg:text-6xl titlename mx-auto">
              {title}
            </h1>
            <motion.div
              initial={{ height: "100%" }}
              animate={{ height: "0%" }}
              className="z-10 absolute inset-0 grid place-items-center bg-white overflow-hidden"
            >
              <h1
                style={{ color: "#656565" }}
                className="text-center text-3xl lg:text-7xl uppercase title mx-auto"
              >
                Categories
              </h1>
            </motion.div>
          </div>
          <div
            ref={container}
            className="mt-8 memberContainer gap-y-8 px-4 lg:px-16 py-4 lg:py-8"
          >
            {members.map((member, i) => {
              return (
                <Portrait
                  key={member.id}
                  url={`/data/${member.id}/portrait.webp`}
                  callsign={
                    member.callsign.split("-")[0].charAt(0).toUpperCase() +
                    member.callsign.split("-")[0].slice(1)
                  }
                  type={member.position}
                  id={member.id}
                  company={member.company}
                  color={color}
                  route={`/${member.callsign.toLowerCase()}`}
                  i={i}
                  containerWidth={width}
                />
              );
            })}
          </div>
        </div>
        <div className="hidden lg:block">
          <BackgroundVideo category={category} />
        </div>
      </div>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  let members = [];
  // initial fetch;
  const data = meta;
  // const data = JSON.parse(meta);
  // Fetch ALL members id
  for (const [callsign, details] of Object.entries(data.members)) {
    members.push({
      callsign: callsign,
      category: details.category,
      position: details.position,
      id: details.id,
      company: details.company,
    });
  }
  // Filter out incorresponding members
  members = members.filter((member) => member.category === params.category);

  return {
    props: {
      category: params.category,
      title: data.categories[params.category].display,
      members,
      color: data.categories[params.category].color,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { category: "programming" },
      },
      {
        params: { category: "production" },
      },
      {
        params: { category: "design" },
      },
      {
        params: { category: "business" },
      },
      {
        params: { category: "gamedevelopment" },
      },
    ],
    fallback: false,
  };
}
