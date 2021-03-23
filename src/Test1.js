import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/test1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.43, -2.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group position={[51.82, 111.4, -3584.06]} rotation={[-1.25, -1.03, 0.29]}>
          <group position={[0, 348.67, 4.32]} rotation={[0.06, -0.01, 0.02]}>
            <group position={[0, 406.81, 0]} rotation={[0.13, 0, 0.01]}>
              <group position={[0, 464.93, 0]} rotation={[0.13, 0.01, 0.01]}>
                <group position={[0, 523.04, 0]} rotation={[-0.01, 0.14, -0.13]}>
                  <group position={[0, 166.39, 2.14]} rotation={[-0.11, 0.63, -0.29]} />
                </group>
                <group position={[992.8, 382.69, 0.76]} rotation={[1.6, -0.29, -1.53]}>
                  <group position={[0, 1708.37, 0]} rotation={[0.14, -0.95, 0.43]}>
                    <group position={[0, 1777.11, 0]} rotation={[0.06, -0.2, 0.65]} />
                  </group>
                </group>
                <group position={[-992.8, 382.71, 2.72]} rotation={[1.68, 0.29, 1.39]}>
                  <group position={[0, 1708.37, 0]} rotation={[0.34, 0.12, -1.25]}>
                    <group position={[0, 1777.11, 0]} rotation={[0.33, 0.33, -1.65]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[583.86, -193.87, 22.63]} rotation={[-1.1, 0.23, -2.47]} scale={[1, 1, 1]}>
            <group position={[0, 1733.71, 0]} rotation={[-0.78, -0.08, 0]}>
              <group position={[0, 2191.34, 0]} rotation={[0.75, -0.05, -0.27]} scale={[1, 1, 1]}>
                <group position={[0, 396.33, 0]} rotation={[0.65, 0, 0]} />
              </group>
            </group>
          </group>
          <group position={[-583.86, -193.87, 19.66]} rotation={[-0.86, 0.06, 2.91]} scale={[1, 1, 1]}>
            <group position={[0, 1733.71, 0]} rotation={[-1.32, 0, 0]} scale={[1, 1, 1]}>
              <group position={[0, 2191.36, 0]} rotation={[1.38, -0.05, 0.23]}>
                <group position={[0, 329, 0]} rotation={[0.82, 0.01, -0.01]} scale={[1, 1, 1]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <group position={[2.55, 105.95, -3493.15]} rotation={[-1.29, -1.02, 0.31]}>
          <group position={[0, 433.87, 1.21]} rotation={[0.06, -0.01, -0.02]}>
            <group position={[0, 506.18, 0]} rotation={[0.14, 0, -0.02]}>
              <group position={[0, 578.49, 0]} rotation={[0.14, 0, -0.02]} scale={[1, 1, 1]}>
                <group position={[0, 650.8, 0]} rotation={[0, 0.14, -0.13]}>
                  <group position={[0, 431.29, 12.14]} rotation={[-0.11, 0.62, -0.28]} />
                </group>
                <group position={[758.97, 521.71, 0.3]} rotation={[1.6, -0.29, -1.55]}>
                  <group position={[0, 1510.7, 0]} rotation={[0.16, -0.94, 0.45]}>
                    <group position={[0, 703.17, 0]} rotation={[0.06, -0.19, 0.61]}>
                      <group position={[0, 324.27, 0]} rotation={[0.03, -0.42, -0.31]}>
                        <group position={[-240.36, 826.21, 5.2]} rotation={[0.52, 0.28, 0.66]}>
                          <group position={[249.07, 641.74, 0]} rotation={[0.05, 0.02, -1.32]}>
                            <group position={[-113.1, 263.87, 0]} rotation={[-0.05, 0.04, -0.53]} />
                          </group>
                        </group>
                        <group position={[-261.91, 1989.97, -1.92]} rotation={[0.22, 0.03, 0.1]}>
                          <group position={[0.11, 330.86, 0]} rotation={[0.22, 0, -0.02]}>
                            <group position={[0.08, 317.41, 0]} rotation={[0.11, 0, -0.01]} scale={[1, 1, 1]} />
                          </group>
                        </group>
                        <group position={[130.96, 1983.34, 0.98]} rotation={[0.22, 0.03, 0.1]}>
                          <group position={[-0.21, 329.22, 0]} rotation={[0.22, 0, -0.02]}>
                            <group position={[-0.13, 312.57, 0]} rotation={[0.11, 0, -0.01]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-758.97, 521.71, 0.42]} rotation={[1.68, 0.29, 1.35]}>
                  <group position={[0, 1510.7, 0]} rotation={[0.33, 0.14, -1.21]}>
                    <group position={[0, 703.17, 0]} rotation={[0.34, 0.32, -1.65]}>
                      <group position={[0, 324.35, 0]} rotation={[-0.17, 0.13, 0.13]}>
                        <group position={[238.77, 833.91, -2.71]} rotation={[0.57, -0.45, -0.84]}>
                          <group position={[-243.47, 649.82, 0]} rotation={[0.41, -0.11, 1.66]} scale={[1, 1, 1]}>
                            <group position={[119.34, 244.02, 0]} rotation={[0.01, -0.29, 0.51]} scale={[1, 1, 1]} />
                          </group>
                        </group>
                        <group position={[252.91, 1980.13, 1.5]} rotation={[1.65, 0.01, 0.14]} scale={[1, 1, 1]}>
                          <group position={[0.16, 334.48, 0]} rotation={[1.65, 0.14, 0.13]}>
                            <group position={[0.11, 318.6, 0]} rotation={[0.82, 0.04, 0.09]} />
                          </group>
                        </group>
                        <group position={[-126.46, 1987.45, -0.76]} rotation={[1.65, 0.01, 0.14]}>
                          <group position={[-0.84, 326.38, 0]} rotation={[1.65, 0.14, 0.12]}>
                            <group position={[-0.83, 312.1, 0]} rotation={[0.82, 0.04, 0.1]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[569.17, -241.11, -0.38]} rotation={[-1, 0.31, -2.55]} scale={[1, 1, 1]}>
            <group position={[0, 1837.94, 0]} rotation={[-0.72, -0.09, 0]}>
              <group position={[0, 1839.03, 0]} rotation={[0.97, 0.07, -0.59]}>
                <group position={[0, 535.53, 0]} rotation={[0.54, 0.05, -0.03]} />
              </group>
            </group>
          </group>
          <group position={[-569.17, -241.11, 5.47]} rotation={[-0.73, 0.07, 2.85]} scale={[1, 1, 1]}>
            <group position={[0, 1837.94, 0]} rotation={[-1.79, 0.13, 2.58]} scale={[1, 1, 1]}>
              <group position={[0, 1839.02, 0]} rotation={[1.42, 0.21, 3.06]} scale={[1, 1, 1]}>
                <group position={[0, 542.57, 0]} rotation={[0.54, -0.09, 0.05]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips_2} />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-ArmsL'].geometry}
          skeleton={nodes['2-ArmsL'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-ArmsL001'].geometry}
          skeleton={nodes['2-ArmsL001'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-ArmsR'].geometry}
          skeleton={nodes['2-ArmsR'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-ArmsR001'].geometry}
          skeleton={nodes['2-ArmsR001'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-base-jointsL'].geometry}
          skeleton={nodes['2-base-jointsL'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-base-jointsR'].geometry}
          skeleton={nodes['2-base-jointsR'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-Bodybase'].geometry}
          skeleton={nodes['2-Bodybase'].skeleton}
        />
        <skinnedMesh
          material={materials['eyes.004']}
          geometry={nodes['2-eyes'].geometry}
          skeleton={nodes['2-eyes'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-face'].geometry}
          skeleton={nodes['2-face'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-face001'].geometry}
          skeleton={nodes['2-face001'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-FootL'].geometry}
          skeleton={nodes['2-FootL'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-FootL001'].geometry}
          skeleton={nodes['2-FootL001'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-FootR'].geometry}
          skeleton={nodes['2-FootR'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-FootR001'].geometry}
          skeleton={nodes['2-FootR001'].skeleton}
        />
        <skinnedMesh
          material={materials['gem-case.002']}
          geometry={nodes['2-gem'].geometry}
          skeleton={nodes['2-gem'].skeleton}
        />
        <skinnedMesh
          material={materials['gem.003']}
          geometry={nodes['2-gem001'].geometry}
          skeleton={nodes['2-gem001'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-kneeL'].geometry}
          skeleton={nodes['2-kneeL'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-kneeR'].geometry}
          skeleton={nodes['2-kneeR'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-LegsL'].geometry}
          skeleton={nodes['2-LegsL'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-LegsR'].geometry}
          skeleton={nodes['2-LegsR'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-shouldersL'].geometry}
          skeleton={nodes['2-shouldersL'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-shouldersL001'].geometry}
          skeleton={nodes['2-shouldersL001'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-shouldersR'].geometry}
          skeleton={nodes['2-shouldersR'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-shouldersR001'].geometry}
          skeleton={nodes['2-shouldersR001'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-torso'].geometry}
          skeleton={nodes['2-torso'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-upper-armsL'].geometry}
          skeleton={nodes['2-upper-armsL'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-upper-armsR'].geometry}
          skeleton={nodes['2-upper-armsR'].skeleton}
        />
        <skinnedMesh
          material={materials['black-grease.004']}
          geometry={nodes['2-waist'].geometry}
          skeleton={nodes['2-waist'].skeleton}
        />
        <skinnedMesh
          material={materials['emit-yellow.002']}
          geometry={nodes['2-WeaponL'].geometry}
          skeleton={nodes['2-WeaponL'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-WeaponL001'].geometry}
          skeleton={nodes['2-WeaponL001'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-WeaponL002'].geometry}
          skeleton={nodes['2-WeaponL002'].skeleton}
        />
        <skinnedMesh
          material={materials['black.003']}
          geometry={nodes['2-WeaponL003'].geometry}
          skeleton={nodes['2-WeaponL003'].skeleton}
        />
        <skinnedMesh
          material={materials['emit-yellow.002']}
          geometry={nodes['2-WeaponR'].geometry}
          skeleton={nodes['2-WeaponR'].skeleton}
        />
        <skinnedMesh
          material={materials['green.002']}
          geometry={nodes['2-WeaponR001'].geometry}
          skeleton={nodes['2-WeaponR001'].skeleton}
        />
        <skinnedMesh
          material={materials['silver.008']}
          geometry={nodes['2-WeaponR002'].geometry}
          skeleton={nodes['2-WeaponR002'].skeleton}
        />
        <skinnedMesh
          material={materials['black.003']}
          geometry={nodes['2-WeaponR003'].geometry}
          skeleton={nodes['2-WeaponR003'].skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/test1.glb')
