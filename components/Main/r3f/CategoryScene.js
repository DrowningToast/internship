import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CategoryBusiness from "./models/CategoryBusiness";
import CategoryDesign from "./models/CategoryDesign";
import CategoryGame from "./models/CategoryGame";
import * as THREE from "three";
import CategoryProduction from "./models/CategoryProduction";
import CategoryProgramming from "./models/CategoryProgramming";

const CategoryScene = ({ selected }) => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 3] }}
        dpr={2}
        gl={{
          powerPreference: "high-performance",
          shadowMap: {
            enabled: true,
            autoUpdate: true,
            needsUpdate: true,
            type: THREE.PCFSoftShadowMap,
          },
        }}
      >
        {/* Placeholder model */}
        <ambientLight intensity={0.6} />
        <pointLight
          position={[3, 6, 5]}
          color={"white"}
          castShadow
          intensity={4}
          distance={0}
          shadow-mapSize-height={256}
          shadow-mapSize-width={256}
        />
        <Suspense fallback={null}>
          {selected === "business" && <CategoryBusiness />}
          {selected === "design" && <CategoryDesign />}
          {selected === "gamedevelopment" && <CategoryGame />}
          {selected === "production" && <CategoryProduction />}
          {selected === "programming" && <CategoryProgramming />}
        </Suspense>
      </Canvas>
    </>
  );
};

export default CategoryScene;
