"use client";  
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between  items-center">
                <div className="text-white text-2xl font-bold mr-5">Younes Ait Ouahda</div>
                <div className="hidden md:flex mr-3 space-x-4">
                    <Link href="#home"><span className="text-white hover:text-gray-300">Home</span></Link>
                    <Link href="#about"><span className="text-white hover:text-gray-300">About</span></Link>
                    <Link href="#projects"><span className="text-white hover:text-gray-300">Projects</span></Link>
                    <Link href="mailto:Younes.AitOuahda@gmail.com"><span className="text-white hover:text-gray-300">Contact</span></Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden flex flex-col space-y-2 mt-2 ${isOpen ? '' : 'hidden'}`}>
                <Link href="#home"><span className="text-white block px-2 py-1 hover:bg-gray-700">Home</span></Link>
                <Link href="#about"><span className="text-white block px-2 py-1 hover:bg-gray-700">About</span></Link>
                <Link href="#projects"><span className="text-white block px-2 py-1 hover:bg-gray-700">Projects</span></Link>
                <Link href="#contact"><span className="text-white block px-2 py-1 hover:bg-gray-700">Contact</span></Link>
            </div>
        </nav>
    );
};

export default Navbar;
