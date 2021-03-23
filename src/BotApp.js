import React, { useRef, useMemo, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei/";
import { Html, useGLTFLoader } from "drei";

function useGroup(scene, type) {
  const result = [];

  const filterType = [type];
  const regexType = new RegExp(filterType.join("|"), "i");

  scene.children.forEach((group) => {
    if (regexType.test(group.name)) {
      result.push(group);
    }
  });

  // console.log("result", result);
  return result;
}

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, scene } = useGLTF("/MULTIPLE_WITHOUT_TEXTURE.glb");
  const [bodyCount, updateBodyCount] = useState(0);
  const head = useGroup(scene, "head");
  const body = useGroup(scene, "body");

  const leg = useGroup(scene, "leg");
  const hand = useGroup(scene, "hand");

  console.log("hand", hand);
  console.log("head", head);

  const renderGroup = (groupObject, id = 0) => {
    return (
      <group
        name="bot_head"
        position={groupObject.length > 0 && groupObject[id].position}
        rotation={groupObject.length > 0 && groupObject[id].rotation}
        scale={groupObject.length > 0 && groupObject[id].scale}
      >
        {groupObject.length > 0 &&
          groupObject[id].children.map((child) => {
            return (
              <mesh
                name={child.name}
                material={child.material}
                geometry={child.geometry}
                position={child.position}
                scale={child.scale}
              />
            );
          })}
      </group>
    );
  };

  return (
    <>
      <Html>
        <button
          onClick={() => {
            updateBodyCount(1);
          }}
        >
          updateBody
        </button>
      </Html>
      <group ref={group} {...props} dispose={null}>
        {renderGroup(head)}
        {renderGroup(hand, 0)}
        {renderGroup(leg, 0)}
        {renderGroup(body, bodyCount)}
      </group>
    </>
  );
}

useGLTF.preload("/MULTIPLE_WITHOUT_TEXTURE.glb");
