"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Setup = () => {
return (
    <Canvas >
   <ambientLight color="#ffffff" intensity={0.5} /> {/* White ambient light */}
  <pointLight position={[10, 10, 10]} color="#ff0000" intensity={1} /> {/* Red point light */}

    <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
    </mesh>
    <OrbitControls enableZoom={false}/>

    </Canvas>
);
};

export default Setup;
