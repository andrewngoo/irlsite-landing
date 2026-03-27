"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CinematicBackground } from "@/components/ui/CinematicBackground";
import { LampContainer } from "@/components/ui/lamp";
import { JoinMovementCTA } from "@/components/sections/JoinMovementCTA";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersHubPage() {
  const jobs = [
    { title: "Growth Lead", type: "Full-Time", location: "New York City", href: "/careers/growth-lead" },
    { title: "Senior Software Engineer", type: "Full-Time", location: "New York City", href: "/careers/senior-software-engineer" },
    { title: "Marketing Intern", type: "Internship", location: "New York City", href: "/careers/marketing-intern" },
    { title: "PR Intern", type: "Internship", location: "New York City", href: "/careers/pr-intern" },
    { title: "Software Engineering Intern", type: "Internship", location: "New York City", href: "/careers/intern" },
    { title: "Campus Ambassador", type: "Ambassador", location: "Multiple Universities", href: "/careers/campus-ambassador" }
  ];

  return (
    <main className="min-h-screen bg-transparent selection:bg-accent-pink/30 selection:text-white overflow-x-hidden flex flex-col relative">
      <CinematicBackground />
      <Navbar />
      
      <div className="flex-1 w-full relative z-10 pt-24 md:pt-32 pb-32">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight drop-shadow-[0_0_20px_rgba(242,167,192,0.8)]">Make a Change</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Help us build something great.
            </p>
          </motion.div>
        </LampContainer>

        <div className="container mx-auto max-w-4xl px-6 relative z-20 -mt-10">
          <ul className="flex flex-col gap-4">
            {jobs.map((job, index) => (
              <FadeInUp key={index} delay={index * 0.1} className="w-full list-none">
                <Link href={job.href} className="block w-full cursor-pointer relative list-none group">
                  <div className="relative w-full rounded-2xl border border-white/5 p-[2px] transition-transform duration-300 group-hover:-translate-x-1">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative flex w-full flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-sm group-hover:shadow-[0_0_30px_rgba(242,167,192,0.15)] transition-shadow duration-500">
                      
                      <div className="flex items-center gap-6">
                        <div className="hidden sm:flex w-12 h-12 rounded-xl border border-white/10 bg-white/5 items-center justify-center text-accent-pink group-hover:bg-accent-pink/10 group-hover:scale-110 transition-transform duration-500 shadow-inner shrink-0">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-pink group-hover:to-accent-purple-light transition-all duration-500">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60 font-medium">
                             <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{job.type}</span>
                             <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-white/40" /> {job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 group-hover:border-accent-pink/50 group-hover:bg-accent-pink/10 group-hover:text-accent-pink transition-all duration-300 self-end sm:self-auto shrink-0 mt-4 sm:mt-0">
                         <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                      
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </ul>
        </div>
      </div>
      
      <JoinMovementCTA />
      <Footer />
    </main>
  );
}
