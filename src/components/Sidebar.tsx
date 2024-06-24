// components/Sidebar.js

"use client";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import  useStore  from "@/lib/storeCamera";

const Sidebar = () => {
    
    const { cords,cordsR, project, about,reset ,setCors ,setZoom,zoom,setCorsR,orbit,setOrbit} = useStore((state) => ({
        cords: state.cords,
        cordsR: state.cordsR,
        project: state.project,
        about: state.about,
        reset:state.reset,
        setCors : state.setCors,
        setZoom : state.setZoom,
        zoom :state.zoom,
        setCorsR :state.setCorsR,
        orbit:state.orbit,setOrbit:state.setOrbit,
    }));
    
    const [X,setX]=useState(-1);
    const [Y,setY]=useState(0.58);
    const [Z,setZ]=useState(4.22);
    const [XR,setXR]=useState(-0.18);
    const [YR,setYR]=useState(0);
    const [ZR,setZR]=useState(0);
    const [Zoo,setZoo]=useState(zoom);
    const update =()=>{
        setCors(X,Y,Z);
        setCorsR(XR,YR,ZR);
    }
    return (

        <div className="fixed top-16 right-0 h-full w-64 bg-white/60 backdrop-blur-md shadow-md p-6 z-40">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            {(!orbit)?
            <>
            <button onClick={reset} className="bg-gray-800 text-white w-full p-2 rounded-md mb-2">Reset</button>
            <button onClick={about} className="bg-gray-800 text-white w-full p-2 rounded-md mb-2">Who am I</button>
            <button onClick={project} className="bg-gray-800 text-white w-full p-2 rounded-md mb-2">What do I do</button>
            </>:null}
            <button onClick={setOrbit} className= {((!orbit)? 'bg-green-600':'bg-red-600')+" text-white w-full p-2 rounded-md mb-4"}>{(orbit)? 'Stop ✊':'use ✋'} </button>

            <label htmlFor="slider" className="block text-lg mb-2">Zoom</label>
            <input type="number" name="" id="" value={X} step="0.01"onChange={(value)=>{setX((Number(value.target.value)));update();}} />
            <input type="number" name="" id="" value={Y}step="0.01" onChange={(value)=>{setY((Number(value.target.value)));update();}} />
            <input type="number" name="" id="" value={Z}step="0.01" onChange={(value)=>{setZ((Number(value.target.value)));update();}} />


            <input 
                id="slider" 
                type="range" 
                min="0" 
                max="100" 
                className="w-full mb-4"
                value={Zoo}
                onChange={(e)=>{setZoo(e.target.value);console.log(Zoo);setZoom(Zoo)}}
            />
            <h2>Camera rotation</h2>
            <input type="number" name="" id="" value={cordsR[0]} step="0.01"onChange={(value)=>{setXR((Number(value.target.value)));update();}} />
            <input type="number" name="" id="" value={cordsR[1]}step="0.01" onChange={(value)=>{setYR((Number(value.target.value)));update();}} />
            <input type="number" name="" id="" value={cordsR[2]}step="0.01" onChange={(value)=>{setZR((Number(value.target.value)));update();}} />

        </div>
    );
};

export default Sidebar;
