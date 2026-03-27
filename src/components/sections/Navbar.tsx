"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Logo } from "../ui/logo";
import { TubeLightNavBar } from "../ui/tubelight-navbar";
import { Home, Users, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Careers', url: '/careers', icon: Briefcase }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/60 backdrop-blur-xl py-3 mx-4 mt-4 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/5" : "bg-transparent py-6 mx-0 mt-0 rounded-none border-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-10 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12 drop-shadow-[0_0_15px_rgba(242,167,192,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(242,167,192,0.8)]">
            <Image src="/logo/heart_logo.png" alt="IRL Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-pink group-hover:to-accent-purple-light transition-all duration-300">IRL</span>
        </Link>

        {/* Navigation - Centered using absolute positioning to not affect flex-between layout */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
           <TubeLightNavBar items={navItems} className="!static !transform-none !mb-0 sm:!pt-0" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/apply">
            <Button variant="primary" className="shadow-[0_0_15px_rgba(242,167,192,0.4)] hover:shadow-[0_0_25px_rgba(242,167,192,0.6)] transition-all duration-300">Apply to Join</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
