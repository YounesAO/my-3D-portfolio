// components/Widget.js

"use client";
import Link from "next/link";

 // Ensure this component is treated as a client component

const Widget = () => {
    return (
        <div className="fixed bottom-4 left-2 bg-gray-800 text-white p-4 rounded-lg shadow-md z-10">
            <h2 className="text-lg font-bold mb-2">📍Important Information</h2>
            <p className="text-sm">My 3D Portfolio is under construction 🦺🚧</p>
            <p>Check out my old one here : <Link className="underline" href={"https://younes-ait-ouahda.netlify.app/"}>My React Portfolio</Link> or my <Link className="underline" href={"https://my-react-portfolio-roan-two.vercel.app/YounesAitOuahdaCv.pdf"}>Resume</Link></p>
            {/* Add any additional content or functionality here */}
        </div>
    );
};

export default Widget;
