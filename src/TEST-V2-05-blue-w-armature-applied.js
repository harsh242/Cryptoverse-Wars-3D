/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/TEST-V2-05-blue-w-armature-applied.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.23, -0.21, -0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group position={[5.92, -151.01, -4262.16]} rotation={[-1.41, -0.11, -0.01]}>
          <group position={[0, 449.51, -2.29]} rotation={[-0.01, -0.02, 0.01]} scale={[1, 1, 1]}>
            <group position={[0, 524.44, 0]} rotation={[-0.02, -0.02, 0.01]}>
              <group position={[0, 599.36, 0]} rotation={[-0.02, -0.02, 0.01]}>
                <group position={[0, 674.28, 0]} rotation={[-0.03, 0.04, -0.03]}>
                  <group position={[0, 523.65, 64.11]} rotation={[0.02, 0.13, -0.02]} scale={[1, 1, 1]} />
                </group>
                <group position={[573.39, 562.81, 0.3]} rotation={[1.64, -0.36, -1.47]}>
                  <group position={[0, 1194.74, 0]} rotation={[0.75, 0.91, 0.15]}>
                    <group position={[0, 789.26, 0]} rotation={[0, 0, 0.54]} />
                  </group>
                </group>
                <group position={[-573.39, 562.81, -1.44]} rotation={[1.61, 0.37, 1.54]}>
                  <group position={[0, 1194.74, 0]} rotation={[0.76, -0.8, -0.22]} scale={[1, 1, 1]}>
                    <group position={[0, 789.26, 0]} rotation={[0, 0, -0.44]} scale={[1, 1, 1]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[658.8, -250.57, -12.19]} rotation={[-0.34, 0.28, -2.95]} scale={[1, 1, 1]}>
            <group position={[0, 1863.98, 0]} rotation={[-0.27, -0.1, 0.04]}>
              <group position={[0, 1848.48, 0]} rotation={[0.85, -0.27, 0.01]}>
                <group position={[0, 504.82, 0]} rotation={[0.81, -0.05, 0.05]} />
              </group>
            </group>
          </group>
          <group position={[-658.8, -250.57, -10.35]} rotation={[-0.26, -0.2, 3.08]} scale={[1, 1, 1]}>
            <group position={[0, 1863.98, 0]} rotation={[-0.17, 0.16, -0.08]} scale={[1, 1, 1]}>
              <group position={[0, 1848.45, 0]} rotation={[0.83, 0.28, -0.06]} scale={[1, 1, 1]}>
                <group position={[0, 511.14, 0]} rotation={[0.8, 0.05, -0.05]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group position={[-40.03, -113.44, -4245.07]} rotation={[-1.52, -0.13, -0.01]} scale={[1, 1, 1]}>
          <group position={[0, 361.49, 4.1]} rotation={[0, -0.01, 0.01]}>
            <group position={[0, 421.77, 0]} rotation={[-0.02, 0, 0]}>
              <group position={[0, 482.02, 0]} rotation={[-0.02, -0.01, 0]}>
                <group position={[0, 542.27, 0]} rotation={[-0.06, 0.05, -0.04]}>
                  <group position={[0, 214.2, 8.31]} rotation={[0, 0.16, 0]} />
                </group>
                <group position={[991.33, 399.58, 0.85]} rotation={[1.6, -0.14, -1.48]} scale={[1, 1, 1]}>
                  <group position={[0, 1701.01, 0]} rotation={[-0.62, 0.99, 0.5]} scale={[1, 1, 1]}>
                    <group position={[0, 1774.21, 0]} rotation={[0.13, 0, 0.46]} scale={[1, 1, 1]} />
                  </group>
                </group>
                <group position={[-991.33, 399.6, 2.39]} rotation={[1.58, 0.15, 1.55]}>
                  <group position={[0, 1701.01, 0]} rotation={[-0.3, -0.7, -0.26]}>
                    <group position={[0, 1774.2, 0]} rotation={[-0.43, 0.1, -0.96]} scale={[1, 1, 1]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[586.84, -202.12, 23.15]} rotation={[-0.12, 0.3, -2.95]} scale={[1, 1, 1]}>
            <group position={[0, 1699.12, 0]} rotation={[-0.25, -0.1, 0.04]}>
              <group position={[0, 2160.18, 0]} rotation={[1.01, -0.07, -0.21]}>
                <group position={[0, 396.33, 0]} rotation={[0.66, 0.01, 0]} scale={[1, 1, 1]} />
              </group>
            </group>
          </group>
          <group position={[-586.84, -202.12, 19.2]} rotation={[-0.11, -0.16, 3.07]} scale={[1, 1, 1]}>
            <group position={[0, 1699.12, 0]} rotation={[-0.34, 0.16, -0.1]} scale={[1, 1, 1]}>
              <group position={[0, 2160.2, 0]} rotation={[0.83, 0, 0.17]} scale={[1, 1, 1]}>
                <group position={[0, 329, 0]} rotation={[0.83, 0.01, -0.01]} scale={[1, 1, 1]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[0, -1.32, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group position={[-42.86, -9.79, -4505.63]} rotation={[-1.41, -0.16, 0.01]}>
          <group position={[0, 480.47, 3.56]} rotation={[0, -0.03, 0.03]}>
            <group position={[0, 560.57, 0]} rotation={[-0.02, -0.02, 0.02]}>
              <group position={[0, 640.65, 0]} rotation={[-0.02, -0.02, 0.02]}>
                <group position={[0, 720.73, 0]} rotation={[-0.05, 0.03, -0.02]}>
                  <group position={[0, 482.03, 37.48]} rotation={[0.03, 0.11, 0.02]} />
                </group>
                <group position={[547.73, 599.85, 1.14]} rotation={[1.64, -0.36, -1.46]} scale={[1, 1, 1]}>
                  <group position={[0, 1098.51, 0]} rotation={[0.82, 0.95, 0.1]} scale={[1, 1, 1]}>
                    <group position={[0, 1437.12, 0]} rotation={[0, 0, 0.53]} />
                  </group>
                </group>
                <group position={[-547.73, 599.85, 0.65]} rotation={[1.61, 0.38, 1.53]}>
                  <group position={[0, 1098.51, 0]} rotation={[0.69, -0.81, -0.24]}>
                    <group position={[0, 1437.12, 0]} rotation={[0, 0, -0.5]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[591.58, -266.47, 4.3]} rotation={[-0.3, 0.29, -2.96]} scale={[1, 1, 1]}>
            <group position={[0, 1905.35, 0]} rotation={[-0.29, -0.13, 0.08]}>
              <group position={[0, 1670.07, 0]} rotation={[1.04, -0.08, -0.12]}>
                <group position={[0, 1192.73, 0]} rotation={[0.7, -0.1, 0.08]} />
              </group>
            </group>
          </group>
          <group position={[-591.58, -266.47, 6.61]} rotation={[-0.3, -0.16, 3.09]}>
            <group position={[0, 1905.35, 0]} rotation={[-0.32, 0.16, -0.11]}>
              <group position={[0, 1670.11, 0]} rotation={[1.04, 0.09, 0.05]}>
                <group position={[0, 1183.18, 0]} rotation={[0.71, 0.1, -0.08]} scale={[1, 1, 1]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[0, -7.29, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group position={[1.36, -163.79, -4667.94]} rotation={[-1.41, -0.11, -0.01]}>
          <group position={[0, 424.89, -2.88]} rotation={[-0.02, -0.02, 0.01]} scale={[1, 1, 1]}>
            <group position={[0, 495.71, 0]} rotation={[-0.02, -0.02, 0.01]}>
              <group position={[0, 566.53, 0]} rotation={[-0.02, -0.02, 0.01]} scale={[1, 1, 1]}>
                <group position={[0, 637.34, 0]} rotation={[-0.03, 0.04, -0.03]}>
                  <group position={[0, 493.09, 26.7]} rotation={[0.02, 0.13, -0.02]} />
                </group>
                <group position={[611.04, 515.09, -0.95]} rotation={[1.64, -0.34, -1.47]} scale={[1, 1, 1]}>
                  <group position={[0, 1227.63, 0]} rotation={[0.76, 0.91, 0.14]} scale={[1, 1, 1]}>
                    <group position={[0, 1179.76, 0]} rotation={[0, 0, 0.54]}>
                      <group position={[0, 2276.77, 0]} rotation={[0.07, -0.58, -0.25]}>
                        <group position={[-122.31, 291.52, 3.26]} rotation={[0.13, 0.12, 1.67]}>
                          <group position={[119.81, 222.75, 0]} rotation={[-0.04, 0.02, -1.76]}>
                            <group position={[-71.34, 164.25, 0]} rotation={[-0.04, -0.21, -0.35]} />
                          </group>
                        </group>
                        <group position={[-172.61, 576.26, -1.59]} rotation={[-0.22, -0.06, 0.31]}>
                          <group position={[-0.22, 242.42, 0]} rotation={[0.41, -0.01, -0.04]}>
                            <group position={[-0.27, 239.77, 0]} rotation={[0.2, 0, -0.02]} />
                          </group>
                        </group>
                        <group position={[86.31, 567.82, 0.55]} rotation={[-0.22, -0.05, 0.3]}>
                          <group position={[-1.57, 250.74, 0]} rotation={[0.41, -0.01, -0.04]}>
                            <group position={[-1.19, 251.71, 0]} rotation={[0.2, 0, 0.01]} scale={[1, 1, 1]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-611.04, 515.09, -0.7]} rotation={[1.61, 0.36, 1.54]}>
                  <group position={[0, 1227.63, 0]} rotation={[0.77, -0.8, -0.22]}>
                    <group position={[0, 1179.75, 0]} rotation={[0, 0, -0.44]} scale={[1, 1, 1]}>
                      <group position={[0, 2276.77, 0]} rotation={[-0.42, 0.99, 0.44]}>
                        <group position={[126.1, 306.89, 6.95]} rotation={[0.39, -0.27, -1.1]}>
                          <group position={[-115.46, 239.07, 0]} rotation={[0.24, -0.38, 1.63]}>
                            <group position={[81.88, 137.13, 0]} rotation={[-0.26, -0.28, -0.11]} />
                          </group>
                        </group>
                        <group position={[183.77, 567.89, 5.78]} rotation={[-0.18, 0.09, -0.34]}>
                          <group position={[-1.12, 241.97, 0]} rotation={[0.44, 0.02, 0.08]}>
                            <group position={[-0.59, 241.34, 0]} rotation={[0.22, 0, 0.05]} />
                          </group>
                        </group>
                        <group position={[-91.89, 579.75, -2.67]} rotation={[-0.18, 0.08, -0.34]} scale={[1, 1, 1]}>
                          <group position={[-1.18, 247.97, 0]} rotation={[0.44, 0.02, 0.08]} scale={[1, 1, 1]}>
                            <group position={[-0.27, 238.07, 0]} rotation={[0.22, 0, 0.05]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[688.01, -236.48, -7.91]} rotation={[-0.34, 0.28, -2.9]} scale={[1, 1, 1]}>
            <group position={[0, 1896.58, 0]} rotation={[-0.28, -0.09, -0.03]} scale={[1, 1, 1]}>
              <group position={[0, 1899.27, 0]} rotation={[1, -0.11, -0.06]}>
                <group position={[0, 1127.3, 0]} rotation={[0.67, -0.02, 0.01]} />
              </group>
            </group>
          </group>
          <group position={[-688.01, -236.48, -13.73]} rotation={[-0.27, -0.2, 3.04]}>
            <group position={[0, 1896.57, 0]} rotation={[-0.2, 0.15, 0]}>
              <group position={[0, 1899.26, 0]} rotation={[0.97, 0.12, 0]} scale={[1, 1, 1]}>
                <group position={[0, 1130.98, 0]} rotation={[0.67, 0.02, -0.01]} scale={[1, 1, 1]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group scale={[1.3, 1.3, 1.3]}>
        <mesh
          material={materials['emit-eye']}
          geometry={nodes['5-eyes'].geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.13, 0.03, 0.13]}
        />
        <mesh
          material={materials['Material.003']}
          geometry={nodes['5-face'].geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.42, 0.38, 0.42]}
        />
        <mesh
          material={materials.blue}
          geometry={nodes['5-face001'].geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.42, 0.38, 0.42]}
        />
        <mesh material={materials['black-grease']} geometry={nodes['5-Neck001'].geometry} scale={[0.27, 0.15, 0.27]} />
      </group>
      <mesh
        material={materials['black-grease']}
        geometry={nodes['5-ArmsL'].geometry}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.23, 0.23, 0.23]}
      />
      <mesh
        material={materials['black-grease']}
        geometry={nodes['5-armsR'].geometry}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.23, 0.23, 0.23]}
      />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger1L'].geometry} scale={[0.19, 0.14, 0.14]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger1R'].geometry} scale={[0.19, 0.14, 0.14]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger2L'].geometry} scale={[0.2, 0.14, 0.14]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger2R'].geometry} scale={[0.2, 0.14, 0.14]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger3L'].geometry} scale={[0.17, 0.12, 0.12]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-finger3R'].geometry} scale={[0.17, 0.12, 0.12]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-handL'].geometry} scale={[0.41, 0.41, 0.41]} />
      <mesh material={materials.blue} geometry={nodes['5-handL001'].geometry} scale={[0.41, 0.41, 0.41]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-HandR'].geometry} scale={[0.41, 0.41, 0.41]} />
      <mesh material={materials.blue} geometry={nodes['5-HandR001'].geometry} scale={[0.41, 0.41, 0.41]} />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-thumbL'].geometry}
        rotation={[0, -1.57, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-thumbR'].geometry}
        rotation={[0, -1.57, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg1R'].geometry}
        rotation={[0, -1.21, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg1R001'].geometry}
        rotation={[0, -1.21, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg2L'].geometry}
        rotation={[0, -1.52, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg2R'].geometry}
        rotation={[0, -1.52, 0]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg3L'].geometry}
        rotation={[Math.PI, -1.2, Math.PI]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-finger-leg3R'].geometry}
        rotation={[Math.PI, -1.2, Math.PI]}
        scale={[0.19, 0.14, 0.14]}
      />
      <mesh material={materials.blue} geometry={nodes['5-FootL'].geometry} scale={[0.34, 0.34, 0.34]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-FootL001'].geometry} scale={[0.34, 0.34, 0.34]} />
      <mesh material={materials.blue} geometry={nodes['5-FootR'].geometry} scale={[0.34, 0.34, 0.34]} />
      <mesh material={materials['silver.005']} geometry={nodes['5-FootR001'].geometry} scale={[0.34, 0.34, 0.34]} />
      <mesh material={materials['black-grease']} geometry={nodes['5-LegsL'].geometry} scale={[0.27, 0.27, 0.27]} />
      <mesh material={materials['black-grease']} geometry={nodes['5-LegsR'].geometry} scale={[0.27, 0.27, 0.27]} />
      <group scale={[1.35, 1.35, 0.95]}>
        <mesh material={materials.blue} geometry={nodes.Cube019.geometry} />
        <mesh material={materials['silver.005']} geometry={nodes.Cube019_1.geometry} />
      </group>
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-gem'].geometry}
        rotation={[1.6, 0, 0]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh
        material={materials['emit-orange.001']}
        geometry={nodes['5-gem001'].geometry}
        rotation={[1.6, 0, 0]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh material={materials['silver.005']} geometry={nodes['5-Neck'].geometry} scale={[0.35, 0.2, 0.35]} />
      <mesh
        material={materials['silver.006']}
        geometry={nodes['5-shoudlerL'].geometry}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh
        material={materials.blue}
        geometry={nodes['5-shoudlerL001'].geometry}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh
        material={materials['silver.006']}
        geometry={nodes['5-shoudlerR'].geometry}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh
        material={materials.blue}
        geometry={nodes['5-shoudlerR001'].geometry}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.42, 0.42, 0.42]}
      />
      <mesh material={materials.blue} geometry={nodes['5-Torso'].geometry} scale={[0.93, 0.7, 0.93]} />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-torso-leg-jointL'].geometry}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh
        material={materials['silver.005']}
        geometry={nodes['5-torso-leg-jointR'].geometry}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh material={materials['black-grease']} geometry={nodes['5-waist'].geometry} scale={[0.43, 0.27, 0.43]} />
    </group>
  )
}

useGLTF.preload('/TEST-V2-05-blue-w-armature-applied.glb')
