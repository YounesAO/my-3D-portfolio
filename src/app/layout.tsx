import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Younes Ait Ouahda 3D Portfolio",
  description: "this is a 3D Setup portfolio using THREEjs and Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
