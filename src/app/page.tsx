import Navbar from "@/components/NavBar";
import Setup from "@/components/Setup";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";
import Image from "next/image";

export default function Home() {
  return (
    <>

<main className="flex h-screen flex-col items-center justify-between p-24 z-0 border">
      <Setup/>
    </main>
    <Navbar/>
    <Sidebar/>
    <Widget/>
    
    </>
  );
}
