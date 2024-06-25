"use client";
import Navbar from "@/components/NavBar";
import Setup from "@/components/Setup";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { use, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/younesaitouahdavercelapp.matomo.cloud/container_F1E1bSE1.js'; s.parentNode.insertBefore(g,s);
   }, [])
  return (
    <>
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
