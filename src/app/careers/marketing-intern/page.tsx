"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { Briefcase, MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function MarketingInternPage() {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds();
    }
  }, []);

  const responsibilities = [
    "Help shape IRL's brand voice across social and content.",
    "Assist with influencer outreach and pre-launch campaigns.",
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-accent-pink/30 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
        {/* Subtle mesh background */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(242,167,192,0.1),transparent_60%)] pointer-events-none -z-10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(203,163,216,0.1),transparent_60%)] pointer-events-none -z-10 blur-3xl" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <FadeInUp duration={0.6} className="mb-8">
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Careers</span>
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-white/80 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent-pink" /> Marketing
              </span>
              <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-white/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-purple-light" /> New York City
              </span>
              <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-white/80 flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" /> Internship
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Marketing Intern
            </h1>
          </FadeInUp>

          <FadeInUp duration={0.6} delay={0.2} className="prose prose-invert max-w-none">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">About IRL</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-0 text-balance">
                IRL is a small, scrappy team building something we genuinely believe in. Everyone here wears multiple hats — you'll touch product, marketing, community, and everything in between. We're looking for social, creative people who think differently and aren't afraid to get their hands dirty. Work hard, play hard. If that sounds like you, we want to talk.
              </p>
            </div>

            <div className="grid gap-8 mb-16">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                <h3 className="text-xl font-bold text-white mb-6">What you'll do</h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                  {responsibilities.map((req, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent-pink shrink-0 mt-0.5" />
                      <span className="text-white/70 leading-relaxed text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 pt-16 border-t border-white/10 w-full flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Apply for this Role</h2>

              <div className="mt-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl shadow-2xl relative w-full max-w-4xl min-h-[600px] flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2.5rem]" />
                <div className="relative z-10 w-full h-full min-h-[600px]">
                  <iframe
                    data-tally-src="https://tally.so/embed/q4PxGO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&role=marketing-intern"
                    loading="lazy"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Apply for Marketing Intern">
                  </iframe>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </main>
  );
}
