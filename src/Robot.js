import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { useGLTFLoader } from "drei";

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTFLoader('/Robot.glb')

  const actions = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = {
      Dance: mixer.clipAction(animations[0], group.current),
      Death: mixer.clipAction(animations[1], group.current),
      Idle: mixer.clipAction(animations[2], group.current),
      Jump: mixer.clipAction(animations[3], group.current),
      No: mixer.clipAction(animations[4], group.current),
      Punch: mixer.clipAction(animations[5], group.current),
      Running: mixer.clipAction(animations[6], group.current),
      Sitting: mixer.clipAction(animations[7], group.current),
      Standing: mixer.clipAction(animations[8], group.current),
      ThumbsUp: mixer.clipAction(animations[9], group.current),
      Walking: mixer.clipAction(animations[10], group.current),
      WalkJump: mixer.clipAction(animations[11], group.current),
      Wave: mixer.clipAction(animations[12], group.current),
      Yes: mixer.clipAction(animations[13], group.current),
    }
    
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <primitive object={nodes.Bone} />
      </group>
      <group position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <skinnedMesh
          material={materials.Main}
          geometry={nodes['Hand.R_1'].geometry}
          skeleton={nodes['Hand.R_1'].skeleton}
        />
        <skinnedMesh
          material={materials.Grey}
          geometry={nodes['Hand.R_2'].geometry}
          skeleton={nodes['Hand.R_2'].skeleton}
        />
      </group>
      <group position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <skinnedMesh
          material={materials.Main}
          geometry={nodes['Hand.L_1'].geometry}
          skeleton={nodes['Hand.L_1'].skeleton}
        />
        <skinnedMesh
          material={materials.Grey}
          geometry={nodes['Hand.L_2'].geometry}
          skeleton={nodes['Hand.L_2'].skeleton}
        />
      </group>
    </group>
  )
}

