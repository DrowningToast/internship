import { Canvas } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Children } from "react";
const Scene = dynamic(() => import("./r3f/MajorScene"), { ssr: false });
// import Scene from "./r3f/Scene";
import { AnimatePresence } from "framer-motion";
import { motion, AnimateSharedLayout } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Major = ({ aboutVideo, internVideo, majorVideo }) => {
  const [selected, setSelected] = useState(null);
  const [layoutSelectedIT, setLayoutSelectedIT] = useState(null);
  const [layoutSelectedMT, setLayoutSelectedMT] = useState(null);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    setIteration(iteration + 1);
    if (!selected) return;
    if (layoutSelectedIT === selected || layoutSelectedMT === selected) return;
    setLayoutSelectedIT(selected);
    setLayoutSelectedMT(selected);
  }, [selected]);

  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      aboutVideo.current.pause();
      internVideo.current.pause();
      majorVideo.current.play();
    } else {
      aboutVideo.current.pause();
      internVideo.current.pause();
      majorVideo.current.pause();
    }
  }, [aboutVideo, inView, internVideo, majorVideo]);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        style={{ height: "100vh" }}
        className={`relative py-16 lg:py-48 w-full flex flex-col justify-around xl:justify-between section ${
          selected === null
            ? "gap-y-4 md:gap-y-8 lg:gap-y-20 xl:gap-y-28"
            : "xl:gap-y-8 "
        } align-center`}
        ref={ref}
      >
        <motion.section
          layout
          onClick={() => setSelected(selected === "it" ? null : "it")}
          style={{ backgroundColor: "#7246D1" }}
          className={`${
            selected === "mt" ? "h-auto" : "h-1/6 md:h-1/5 lg:h-1/4 xl:h-1/3"
          } grid place-items-center relative interactable z-30`}
        >
          <motion.h1
            layout
            className={`uppercase inline-block text-white pointer-events-none  font-extrabold ${
              selected !== "mt"
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl"
                : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
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
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                className="absolute h-full"
              >
                <Scene selected={selected} id="it" iteration={iteration} />
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.35 } }}
          className={`majorDetails my-2 lg:my-4 ${
            selected ? "h-auto md:h-auto" : "hidden absolute"
          } px-8 md:px-12 grid place-items-center gap-y-4 relative container mx-auto z-10`}
        >
          {selected === "it" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              layout
              className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle"
            >
              เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีสารสนเทศ
              เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับคณิตศาสตร์
              ภาษาต่างประเทศ เทคโนโลยี เครือข่าย หุ่นยนต์ การเขียนโปรแกรม กราฟิก
              และการออกแบบเว็บไซต์
              เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
              เมื่อนักเรียนจบการศึกษาจากวิชาเอก IT จะมีความสามารถทั้งหมด 2 ด้าน
              ได้แก่ การออกแบบและพัฒนาเว็บไซต์
              ด้านการเขียนโปรแกรมและพัฒนาหุ่นยนต์
            </motion.div>
          )}
          {selected === "mt" && (
            <motion.div
              layout
              className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle"
            >
              เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีมัลติมีเดีย
              เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับกราฟิก การออกแบบเว็บไซต์
              แอนิเมชัน ภาพยนตร์
              และการเขียนโปรแกรมเพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
              เมื่อนักเรียนจบการศึกษาจากวิชาเอก IMT จะมีความสามารถทั้งหมด 4 ด้าน
              ได้แก่ ด้านการออกแบบกราฟิก ด้านการพัฒนาเกม ด้านการสร้างภาพยนตร์
              และด้านการออกแบบและพัฒนาเว็บไซต์ วิชาเอก IMT
              มุ่งเน้นผลิตนักเรียนที่มีความสามารในการพัฒนาสื่อ เป็นนักวางแผน
              มีความละเอียดรอบคอบ มีความอดทน คิดอย่างเป็นระบบ
              และมีการพัฒนาตนเองอยู่ตลอดเวลา
            </motion.div>
          )}

          <motion.div layout className="w-full">
            <Scene selected={selected} />
          </motion.div>
        </motion.div>

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
            className={`uppercase inline-block text-white pointer-events-none font-extrabold ${
              selected !== "it"
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl"
                : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
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
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                className="absolute h-full"
              >
                <Scene selected={selected} id="mt" iteration={iteration} />
              </motion.div>
            )}
          </motion.div>
        </motion.section>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="h-full w-full"
            ref={majorVideo}
            playsInline
            muted
            loop
            preload="auto"
          >
            <source src="/assets/LandingPageMajor.webm" type="video/webm" />
          </video>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Major;
