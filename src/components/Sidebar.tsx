// components/Sidebar.js

"use client"; // Ensure this component is treated as a client component

const Sidebar = () => {
    return (
        <div className="fixed top-16 right-0 h-full w-64 bg-white/60 backdrop-blur-md shadow-md p-6 z-40">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <button className="bg-gray-800 text-white w-full p-2 rounded-md mb-4">Who am I</button>
            <button className="bg-gray-800 text-white w-full p-2 rounded-md mb-4">What do I do</button>
            <label htmlFor="slider" className="block text-lg mb-2">Zoom</label>
            <input 
                id="slider" 
                type="range" 
                min="0" 
                max="100" 
                className="w-full mb-4"
            />
        </div>
    );
};

export default Sidebar;
