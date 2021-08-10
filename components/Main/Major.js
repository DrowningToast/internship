import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Children } from "react";
const Scene = dynamic(() => import("./r3f/Scene"), { ssr: false });
// import Scene from "./r3f/Scene";
import { AnimatePresence } from "framer-motion";
import { motion, AnimateSharedLayout } from "framer-motion";

const Major = () => {
  const [selected, setSelected] = useState(null);
  const [layoutSelectedIT, setLayoutSelectedIT] = useState(null);
  const [layoutSelectedMT, setLayoutSelectedMT] = useState(null);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    setIteration(iteration + 1);
    if (!selected) return;
    if (layoutSelectedIT === selected || layoutSelectedMT === selected) return;
    console.log(selected);
    setLayoutSelectedIT(selected);
    setLayoutSelectedMT(selected);
  }, [selected]);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={` my-0 h-screen w-full flex flex-col justify-center ${
          selected === null ? "gap-y-12 lg:gap-y-20 xl:gap-y-28" : "gap-y-8 "
        } align-center z-10`}
      >
        <motion.section
          layout
          onClick={() => setSelected(selected === "it" ? null : "it")}
          style={{ backgroundColor: "#7246D1" }}
          className={`${
            selected === "mt" ? "h-auto" : "h-1/6 md:h-1/5 lg:h-1/4 xl:h-1/3"
          } grid place-items-center relative interactable`}
        >
          <motion.h1
            layout
            className={`uppercase inline-block text-white pointer-events-none ${
              selected !== "mt"
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold"
                : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
            } text-center z-10`}
          >
            Information Technology
          </motion.h1>
          <motion.div
            layout
            onLayoutAnimationComplete={() => {
              setLayoutSelectedIT(selected ? selected : null);
            }}
            className=" inset-0 absolute grid place-items-center"
          >
            {layoutSelectedIT !== "mt" && selected === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="inset-0 absolute grid place-items-center"
              >
                <Scene
                  className="square"
                  selected={selected}
                  id="it"
                  iteration={iteration}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        {selected && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 20 },
            }}
            className={`majorDetails my-2 lg:my-4 ${
              selected ? "h-auto md:h-auto" : "hidden absolute"
            } px-8 md:px-12 grid place-items-center gap-y-4`}
          >
            {selected === "it" && (
              <p className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle">
                เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีสารสนเทศ
                เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับคณิตศาสตร์
                ภาษาต่างประเทศ เทคโนโลยี เครือข่าย หุ่นยนต์ การเขียนโปรแกรม
                กราฟิก และการออกแบบเว็บไซต์
                เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
                เมื่อนักเรียนจบการศึกษาจากวิชาเอก IT จะมีความสามารถทั้งหมด 2
                ด้าน ได้แก่ การออกแบบและพัฒนาเว็บไซต์
                ด้านการเขียนโปรแกรมและพัฒนาหุ่นยนต์
              </p>
            )}
            {selected === "mt" && (
              <p className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle">
                เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีมัลติมีเดีย
                เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับกราฟิก
                การออกแบบเว็บไซต์ แอนิเมชัน ภาพยนตร์ และการเขียนโปรแกรม
                เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
                เมื่อนักเรียนจบการศึกษาจากวิชาเอก IMT จะมีความสามารถทั้งหมด 4
                ด้าน ได้แก่ ด้านการออกแบบกราฟิก ด้านการพัฒนาเกม
                ด้านการสร้างภาพยนตร์ และด้านการออกแบบและพัฒนาเว็บไซต์ วิชาเอก
                IMT มุ่งเน้นผลิตนักเรียนที่มีความสามารในการพัฒนาสื่อ
                เป็นนักวางแผน มีความละเอียดรอบคอบ มีความอดทน คิดอย่างเป็นระบบ
                และมีการพัฒนาตนเองอยู่ตลอดเวลา
              </p>
            )}

            <div className="square w-1/2 md:w-3/4 lg:w-2/3">
              <Scene selected={selected} />
            </div>
          </motion.div>
        )}

        <motion.section
          layout
          onClick={() => setSelected(selected === "mt" ? null : "mt")}
          style={{ backgroundColor: "#CF55E3" }}
          className={`${
            selected === "it" ? "h-auto" : "h-1/6 md:h-1/5 lg:h-1/4 xl:h-1/3"
          } grid place-items-center relative z-10 interactable`}
        >
          <motion.h1
            layout
            className={`uppercase inline-block text-white pointer-events-none ${
              selected !== "it"
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold"
                : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
            } text-center z-10`}
          >
            Multimedia Technology
          </motion.h1>
          <motion.div
            layout
            onLayoutAnimationComplete={() => {
              setLayoutSelectedMT(selected ? selected : null);
            }}
            className=" inset-0 absolute grid place-items-center"
          >
            {layoutSelectedMT !== "it" && selected === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="inset-0 absolute grid place-items-center"
              >
                <Scene
                  className="square"
                  selected={selected}
                  id="mt"
                  iteration={iteration}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.section>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Major;
