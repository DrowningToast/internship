import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Children } from "react";
import ComputerScene from "./r3f/ComputerScene";
import { AnimatePresence } from "framer-motion";
// import ComputerScene from "./r3f/ComputerScene";

const Major = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className={`md:my-32 my-0 h-screen w-full flex flex-col justify-center ${
        selected === null ? "gap-y-16 lg:gap-y-24 xl:gap-y-32" : ""
      } align-center`}
    >
      <section
        onClick={() => setSelected(selected === "it" ? null : "it")}
        style={{ backgroundColor: "#7246D1" }}
        className={`${
          selected === "mt" ? "h-auto" : "h-1/6 md:h-1/5 lg:h-1/4 xl:h-1/3"
        } grid place-items-center relative`}
      >
        <h1
          className={`uppercase inline-block text-white font-extrabold ${
            selected !== "mt"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl"
              : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
          } text-center z-10`}
        >
          Information Technology
        </h1>
        <div className="square bg-red-400 h-full max-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ComputerScene className="square" selected={selected} id="it" />
        </div>
      </section>
      {selected !== null && (
        <div
          className={`majorDetails my-4 lg:my-12 xl:my-16 h-auto md:h-96 px-8 md:px-12 lg:px-20 grid place-items-center gap-y-4`}
        >
          {selected === "it" && (
            <p className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle">
              เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีสารสนเทศ
              เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับคณิตศาสตร์
              ภาษาต่างประเทศ เทคโนโลยี เครือข่าย หุ่นยนต์ การเขียนโปรแกรม กราฟิก
              และการออกแบบเว็บไซต์
              เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
              เมื่อนักเรียนจบการศึกษาจากวิชาเอก IT จะมีความสามารถทั้งหมด 2 ด้าน
              ได้แก่ การออกแบบและพัฒนาเว็บไซต์
              ด้านการเขียนโปรแกรมและพัฒนาหุ่นยนต์
            </p>
          )}
          {selected === "mt" && (
            <p className="h-auto text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left align-middle">
              เป็นวิชาเอกที่ศึกษาเกี่ยวกับการจัดการเรียนรู้ด้านเทคโนโลยีมัลติมีเดีย
              เพื่อให้ผู้เรียนมีความรู้และทักษะเกี่ยวกับกราฟิก การออกแบบเว็บไซต์
              แอนิเมชัน ภาพยนตร์ และการเขียนโปรแกรม
              เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับชั้นอุดมศึกษาในสาขาที่เกี่ยวข้อง
              เมื่อนักเรียนจบการศึกษาจากวิชาเอก IMT จะมีความสามารถทั้งหมด 4 ด้าน
              ได้แก่ ด้านการออกแบบกราฟิก ด้านการพัฒนาเกม ด้านการสร้างภาพยนตร์
              และด้านการออกแบบและพัฒนาเว็บไซต์ วิชาเอก IMT
              มุ่งเน้นผลิตนักเรียนที่มีความสามารในการพัฒนาสื่อ เป็นนักวางแผน
              มีความละเอียดรอบคอบ มีความอดทน คิดอย่างเป็นระบบ
              และมีการพัฒนาตนเองอยู่ตลอดเวลา
            </p>
          )}

          <div className="square bg-red-400 w-1/2 md:w-5/6">
            <ComputerScene selected={selected} />
          </div>
        </div>
      )}
      <section
        onClick={() => setSelected(selected === "mt" ? null : "mt")}
        style={{ backgroundColor: "#CF55E3" }}
        className={`${
          selected === "it" ? "h-auto" : "h-1/6 md:h-1/5 lg:h-1/4 xl:h-1/3"
        } grid place-items-center`}
      >
        <h1
          className={`uppercase inline-block text-white font-extrabold ${
            selected !== "it"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl"
              : "text-base my-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
          } text-center`}
        >
          Multimedia Technology
        </h1>
      </section>
    </div>
  );
};

export default Major;
