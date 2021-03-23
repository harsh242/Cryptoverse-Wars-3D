import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { Html, useGLTFLoader } from "drei";

export default function Yellow(props) {
  const group = useRef();
  const {scene, nodes, materials, animations } = useGLTFLoader("/yellow.glb");
  console.log(scene)

  const actions = useRef();

  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      Idle: mixer.clipAction(animations[0], group.current),
      Walking: mixer.clipAction(animations[1], group.current),
    };
    actions.current.Idle.play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);

  const Changeanimation = () => {
    return (
      <Html ref={actions}>
        <div className="animation-buttons">
          <button
            onClick={() => {
              actions.current.Idle.play();
            }}
          >
            Idle
          </button>
          <button
            onClick={() => {
              actions.current.Walking.play();
            }}
          >
            Walking
          </button>
        </div>
      </Html>
    );
  };


  return (
    <group ref={group} {...props} dispose={null}>
      <Changeanimation />
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          material={materials["black.001"]}
          geometry={nodes["base-joint001"].geometry}
          skeleton={nodes["base-joint001"].skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.base001.geometry}
          skeleton={nodes.base001.skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes["body-main001"].geometry}
          skeleton={nodes["body-main001"].skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.Cylinder002.geometry}
          skeleton={nodes.Cylinder002.skeleton}
        />
        <skinnedMesh
          material={materials["black.001"]}
          geometry={nodes.Cylinder003.geometry}
          skeleton={nodes.Cylinder003.skeleton}
        />
        <skinnedMesh
          material={materials["black.001"]}
          geometry={nodes.ears001.geometry}
          skeleton={nodes.ears001.skeleton}
        />
        <skinnedMesh
          material={materials["eyes-glass.001"]}
          geometry={nodes["Cylinder.003_1"].geometry}
          skeleton={nodes["Cylinder.003_1"].skeleton}
        />
        <skinnedMesh
          material={materials["eye-cover.001"]}
          geometry={nodes["Cylinder.003_2"].geometry}
          skeleton={nodes["Cylinder.003_2"].skeleton}
        />
        <skinnedMesh
          material={materials["black.001"]}
          geometry={nodes.hand001.geometry}
          skeleton={nodes.hand001.skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.head001.geometry}
          skeleton={nodes.head001.skeleton}
        />
        <skinnedMesh
          material={materials["Material.004"]}
          geometry={nodes.Icosphere001.geometry}
          skeleton={nodes.Icosphere001.skeleton}
        />
        <skinnedMesh
          material={materials["black.001"]}
          geometry={nodes.neck001.geometry}
          skeleton={nodes.neck001.skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.shoulders001.geometry}
          skeleton={nodes.shoulders001.skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.Sphere004.geometry}
          skeleton={nodes.Sphere004.skeleton}
        />
        <skinnedMesh
          material={materials["Material.001"]}
          geometry={nodes["Sphere.004_1"].geometry}
          skeleton={nodes["Sphere.004_1"].skeleton}
        />
        <skinnedMesh
          material={materials["yellow.001"]}
          geometry={nodes.Sphere003.geometry}
          skeleton={nodes.Sphere003.skeleton}
        />
      </group>
    </group>
  );
}
