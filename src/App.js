import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Yellow from "./Yellow";
import "./App.css";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />;
      <directionalLight position={[10, 10, 5]} intensity={0.7} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Canvas
        colorManagement
        camera={{ position: [0, 20, 80], fov: 80 }}
        style={{ height: 1000, width: 1000 }}
      >
        <Lights />
        <mesh position={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Yellow scale={[10, 10, 10]} />
          </Suspense>
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
