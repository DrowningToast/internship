import { motion } from "framer-motion";
import Portrait from "../../components/Profile/Portrait";

/**
 *
 * Profile type = Standard 5 photo (standard), Flexible 5+ (flex), video (video), instragram stories (stories)
 */
/**
 *
 * @param {Object} meta
 * @param {String} meta.callsign
 * @param {String} meta.displayedName
 * @param {String} meta.position
 *
 * meta = /data/categories/[category]/meta.json
 * portrait = /data/categories/[category]/[id]/portrait.png
 * thumbnail = /data/categories/[category]/[id]/thumbnail.png
 * logo = /data/categories/[category]/[id]/logo.png
 * summary = /data/categories/[category]/[id]/summary.pdf
 * photo = /data/categories/[category]/[id]/[i].png
 *
 * @returns
 */
const Category = ({ title, members, color, category }) => {
  console.log(members);

  return (
    <>
      <div className="w-full min-h-screen relative">
        <div className="h-screen w-full flex flex-col ">
          <div
            style={{
              backgroundColor: color,
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
          <div className="memberContainer px-4 lg:px-16 py-4 lg:py-8">
            {members.map((member) => {
              console.log(member);
              return (
                <Portrait
                  url={`/data/${member.id}/portrait.jpg`}
                  callsign={member.callsign}
                  type={member.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  let members = [];
  let title = "";

  // initial fetch
  const res = await fetch(`http://localhost:3000/meta.json`);
  const data = await res.json();
  console.log(data);
  // Fetch ALL members id
  for (const [callsign, details] of Object.entries(data.members)) {
    members.push({
      callsign: callsign.split("-")[0],
      category: details.category,
      type: details.type,
      id: details.id,
    });
  }
  console.log(members);
  // Filter out incorresponding members
  members = members.filter((member) => member.category === params.category);

  console.log(members);

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
