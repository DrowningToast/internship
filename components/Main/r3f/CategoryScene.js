import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
const Computer = dynamic(() => import("./models/Computer"), { ssr: false });
// import Computer from "./models/Computer";

const CategoryScene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 7] }}>
        {/* Placeholder model */}
        <ambientLight intensity={0.35} />
        <Computer></Computer>
      </Canvas>
    </>
  );
};

export default CategoryScene;
