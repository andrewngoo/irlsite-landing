"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeInUp } from "@/components/animations/FadeInUp";
import Script from "next/script";
import { useEffect } from "react";

export default function ApplyPage() {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds();
    }
  }, []);
  return (
    <main className="min-h-screen bg-background selection:bg-accent-pink/30 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <section className="flex-1 pt-40 pb-24 px-6 relative z-10 flex flex-col items-center">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.1)_0%,transparent_60%)] pointer-events-none -z-10 blur-3xl opacity-60" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeInUp duration={0.8} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">Waitlist Open</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Apply to Join IRL
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We process applications on a rolling basis. If accepted, you'll join our curated NYC cohort and start receiving exclusive invitations to our partner venues.
            </p>
          </FadeInUp>

          <div className="mt-16 w-full max-w-3xl mx-auto">
            {/* Application Form Column (Tally Embed Space) */}
            <FadeInUp delay={0.4} className="w-full">
              <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl shadow-2xl relative min-h-[600px] flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2.5rem]" />

                {/* Tally Embed */}
                <div className="relative z-10 w-full h-full min-h-[500px]">
                  <iframe
                    data-tally-src="https://tally.so/embed/yPxNOX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="IRL Application">
                  </iframe>
                </div>

                <p className="text-center text-white/40 text-sm mt-6 mb-2 relative z-10 max-w-md mx-auto">
                  We'll get back to you soon
                </p>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>

      <Footer />
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </main>
  );
}
