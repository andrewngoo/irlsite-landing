import { FadeInUp } from "../animations/FadeInUp";
import { Button } from "../ui/Button";
import { UpdatedGlobe } from "../ui/updated-globe";
import { HeroTypewriter } from "../animations/HeroTypewriter";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-visible flex flex-col justify-start items-center">
      <div className="container mx-auto px-6 max-w-5xl relative z-20 text-center mt-12 md:mt-24 pointer-events-none">

        {/* Subtle radial gradient behind text to ensure readability against the globe */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,18,18,0.8)_0%,transparent_70%)] pointer-events-none -z-10 blur-2xl block scale-150" />

        <FadeInUp duration={0.8} yOffset={30}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-accent-pink motion-safe:animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-text-secondary">Exclusive access</span>
          </div>
        </FadeInUp>

        <FadeInUp duration={0.8} delay={0.1} yOffset={40}>
          <HeroTypewriter 
            line1="Meet better."
            line2="Meet IRL."
            speed={90}
            delay={600}
          />
        </FadeInUp>

        <FadeInUp duration={0.8} delay={0.2} yOffset={30}>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed pointer-events-auto">
            The first app that pays you back. Discover curated, partnered venues across New York City and help bring organic connections back to real life.
          </p>
        </FadeInUp>

        <FadeInUp duration={0.8} delay={0.3} yOffset={20} className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <Link href="/apply">
            <Button variant="primary" className="shadow-[0_0_15px_rgba(242,167,192,0.4)] hover:shadow-[0_0_25px_rgba(242,167,192,0.6)] transition-all duration-300 w-full sm:w-auto relative z-30">
              Apply to Join
            </Button>
          </Link>
        </FadeInUp>
      </div>

      {/* Absolute Background Overlay Globe (Integrated into Hero & spilling into Experience) */}
      <div className="absolute top-[25%] md:top-[15%] left-1/2 -translate-x-1/2 w-[140vw] md:w-[90vw] max-w-[1000px] aspect-[1/1] z-0 pointer-events-none opacity-60 flex items-center justify-center overflow-visible">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,167,192,0.1),transparent_60%)] z-10" />
        <UpdatedGlobe className="w-full h-full max-w-none opacity-100 mix-blend-screen drop-shadow-xl" />
      </div>
    </section>
  );
}
