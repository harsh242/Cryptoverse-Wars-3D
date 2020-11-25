import { useGLTFLoader } from "drei";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

const Loading = () => {
  const gltf = useGLTFLoader("./yellow.glb", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => {
  return <ambientLight intensity={0.3} />;
};

const Model = () => {
  return (
    <div>
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
        style={{ height: 1000, width: 1000 }}
      >
        <Lights />
        <mesh position={[0, 35, 0]}>
          <Suspense fallback={null}>
            <Loading />
          </Suspense>
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Model;
