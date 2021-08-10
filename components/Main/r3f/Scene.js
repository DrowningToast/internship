import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Suspense } from "react";
import Computer from "./models/Computer";
import Slate from "./models/Slate";

const MajorScene = ({ selected, id, className, iteration }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref?.current) return;
    ref.current.className = "w-full h-full";
    let container = ref.current.parentNode.parentNode.parentNode;
    // console.log(ref.current.offsetHeight);
    // console.log(container.offsetHeight);
    console.log(ref);
    if (id) resizeObserver.observe(container);
  }, []);

  const resizeObserver = new ResizeObserver((target) => {
    let height = target[0].devicePixelContentBoxSize[0].blockSize;
    let canvas = document.getElementById(id)?.childNodes[0];
    if (!canvas) return;
    if (!ref.current) return;
    console.log(canvas);
    console.log(height);
    canvas.height = height;
    canvas.style.height = height;
    // console.log(container.offsetHeigsht)
    // window.dispatchEvent(new MouseEvent("scroll"));
  });

  return (
    <>
      <Canvas
        // iteration={iteration}

        id={id}
        ref={ref}
        className="square"
        onCreated={() => console.log("render")}
        // className={`min-h-full `}
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
