"use client";
import React, { useEffect } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls ,Environment, PerspectiveCamera, Html, DragControls} from '@react-three/drei';
import Room from'@/components/Room';
import useStore from '@/lib/storeCamera';
import { Color, Euler, Matrix4, Vector3 } from 'three';
import { rotate } from 'three/examples/jsm/nodes/Nodes.js';
const CameraLogger = () => {
    const { cords,cordsR, project, about,zoom } = useStore((state) => ({
      cords: state.cords,
      cordsR: state.cordsR,
      project: state.project,
        about: state.about,
        zoom: state.zoom,
      }));
    const { camera } = useThree();
      
      camera.position.set(cords[0], cords[1], cords[2]);
      camera.rotation.set(cordsR[0], cordsR[1], cordsR[2]);

    useFrame(() => {
      console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}, zoom=${zoom}`);
      console.log(camera.matrix.toArray);
      
  
    });
  
    return null;
  };
const Setup = () => {
  const { cords,cordsR, project, about,zoom ,orbit,setOrbit} = useStore((state) => ({
    cords: state.cords,
    cordsR: state.cordsR,
    project: state.project,
      about: state.about,
      zoom: state.zoom,
      orbit:state.orbit,setOrbit:state.setOrbit,

    }));
return (

    <Canvas  className='z-0' >
    <group  >
    <CameraLogger />
    <pointLight position={[-2.52,1.26,1.4]} intensity={2} />
    <spotLight position={[-1,1.5,3]} angle={0.3} penumbra={1} intensity={10} castShadow  color={'#ffffff80'}/>
    {/**
    <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
    </mesh>
     */}
    <Room   >
    
    </Room>
      {(orbit)? <OrbitControls/>:null} 
    </group>
    </Canvas>
);
};

export default Setup;
