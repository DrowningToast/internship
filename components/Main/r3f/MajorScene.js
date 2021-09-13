import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Suspense } from "react";
import Computer from "./models/Computer";
import Slate from "./models/Slate";

import { ResizeObserver } from "@juggle/resize-observer";

const MajorScene = ({ selected, id, className, iteration }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref?.current) return;
    ref.current.className = "w-full h-full";
  }, []);

  return (
    <>
      <Canvas
        // iteration={iteration}
        resize={{ polyfill: ResizeObserver }}
        id={id}
        ref={ref}
        camera={{ position: [0, 0, 13] }}
      >
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          {(selected === "it" || id === "it") && (
            <Computer ID={id} selected={selected}></Computer>
          )}
          {(selected === "mt" || id === "mt") && (
            <Slate ID={id} selected={selected} />
          )}
        </Suspense>
      </Canvas>
    </>
  );
};

export default MajorScene;
