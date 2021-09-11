/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { Box, Circle, Sphere, useGLTF } from "@react-three/drei";
import { useSpring } from "framer-motion";
import { useMotionAsState } from "framer-motion-hooks";

const config = require("../../../../next.config");

export default function CategoryProgramming(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    `${config.basePath}/main/models/CategoryProgramming.gltf`
  );
  const rotation = useSpring(0, {
    damping: 200,
    stiffness: 1200,
    restDelta: 0.00001,
  });
  const rotationState = useMotionAsState(rotation);

  const handleEnter = () => {
    rotation.set(Math.PI * 2);
  };

  const handleLeave = () => {
    rotation.set(0);
  };

  useEffect(() => {
    rotation.set(0);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
      >
        <mesh
          geometry={nodes.Programming.geometry}
          scale={[1, 1, 0.11]}
          rotation={[0, rotationState ? rotationState : 0, 0]}
        >
          <meshPhongMaterial attach="material" color="white" />
        </mesh>
        <Sphere args={[3, 6, 6]}>
          <meshPhongMaterial
            attach="material"
            color="#f3f3f3"
            transparent
            opacity={0}
          />
        </Sphere>
      </group>
    </group>
  );
}

useGLTF.preload(`${config.basePath}/main/models/CategoryProgramming.gltf`);
