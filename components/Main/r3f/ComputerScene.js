import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Suspense } from "react";
import Computer from "./models/Computer";

const ComputerScene = ({ selected, id, className }) => {
  console.log(id);

  return (
    <>
      <Canvas className={className} camera={{ position: [0, 0, 13] }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Computer ID={id} selected={selected}></Computer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default ComputerScene;
