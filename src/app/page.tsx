"use client";
import Navbar from "@/components/NavBar";
import Setup from "@/components/Setup";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { use, useEffect } from "react";
import StatsView from'@/components/StatsView';

export default function Home() {
  
  return (
    <>
    <StatsView></StatsView>
    <SpeedInsights></SpeedInsights>
    <main className="flex h-screen flex-col items-center justify-between p-24 z-0 border">
      <Setup/>
    </main>
    <Navbar/>
    <Sidebar/>
    <Widget/>
    
    </>
  );
}
