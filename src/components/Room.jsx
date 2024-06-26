/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 room.gltf 
*/

import React, { useRef } from 'react'
import { Decal, Html, Image, Instance, Wireframe, useGLTF, useTexture } from '@react-three/drei'
import useStore from '@/lib/storeCamera';

export  default function Model(props) {
  const { nodes, materials } = useGLTF('/room/room.gltf')
  const texture = useTexture("textures/bord.png");
  const {cordsR,cords} = useStore((state) => ({
    cordsR: state.cordsR,
  cords:state.cords,    }));

  return (
    <group {...props} dispose={null}>
    
      <mesh geometry={nodes.Cube002.geometry} material={materials.Leather} position={[-1.867, 0.496, 1.615]} rotation={[-Math.PI, 0.605, -Math.PI]}  >

      <Html
          color='#130200'
          position={[0.9, 0.46, -0.02]}
          rotation={[-0.82,4.73, 5.466]} // Adjust the position as needed
          transform
          occlude={'blending'}
          scale={[0.082,0.046,0.046]}
        >
          <iframe
            src="/home"
            style={{ position:'relative' , left:0, top:0,width: '800px', height: '800px', border: 'none' }}
            frameBorder="0"
          />
        </Html>
      </mesh>
      
      <group position={[-0.141, 0.592, 0.611]} rotation={[1.525, -0.008, 0.625]} scale={0.178}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.477, -0.131, 0.95]} rotation={[1.525, -0.008, 0.625]} scale={0.178}>
        <mesh geometry={nodes.Stand_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Stand_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Stand_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Stand_4.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Stand_5.geometry} material={materials['Material.010']} />
      </group>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle020_Circle025.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube018_Cube020.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder031_Cylinder032.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube024_Cube025.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle007_Circle009.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube013_Cube015.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder034.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle021_Circle026.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube002_Cube010.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle016_Circle001.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder030_Cylinder031.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder025.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube000_Cube011.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder032_Cylinder033.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle006_Circle008.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle014_Circle016.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder029_Cylinder030.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle004_Circle006.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube011_Cube013.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube014_Cube016.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder014.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle018.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder027_Cylinder028.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle011_Circle013.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder028_Cylinder029.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle002_Circle003.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder024.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube016_Cube001.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube006_Cube008.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Plane_Plane001.geometry} material={materials.Mesh} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle001_Circle002.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Plane001_Plane002.geometry} material={materials.Mesh} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle003_Circle005.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle009_Circle011.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle008_Circle010.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle017.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube009_Cube004.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube008_Cube002.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube004_Cube006.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube022_Cube018.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube019_Cube021.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder033_Cylinder026.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube003_Cube005.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle005_Circle007.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube021_Cube023.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle012_Circle014.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle015_Circle.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube023_Cube024.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder020.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle013_Circle015.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder015.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube001_Cube003.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder023.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle010_Circle012.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder026_Cylinder027.geometry} material={materials.Material} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube017_Cube019.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube007_Cube009.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle022_Circle027.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube020_Cube022.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube012_Cube014.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.Aluminium} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube005_Cube007.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube010_Cube012.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube015_Cube017.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle_Circle004.geometry} material={materials.DarkMetal} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Circle019_Circle021.geometry} material={materials.Kevlar} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cube025_Cube026.geometry} material={materials.Leather} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.Cylinder022.geometry} material={materials.None} position={[-0.453, -0.282, 1.005]} rotation={[1.579, 0.004, -0.97]} scale={0.146} />
      <mesh geometry={nodes.uploads_files_2770907_Table.geometry} material={materials['Material.005']} position={[-0.494, -0.278, 0.35]} rotation={[-Math.PI, 0.605, -Math.PI]} scale={0.792} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.006']} position={[-0.325, 0.513, 3.505]} rotation={[-Math.PI, 0.605, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/room/room.gltf')
