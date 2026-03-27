import { FadeInUp } from "../animations/FadeInUp";
import { GlassCard } from "../ui/GlassCard";
import { DollarSign, MapPin, Wine } from "lucide-react";
import { Globe } from "../ui/globe";

export function AboutUs() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-accent-pink" />,
      title: "Connections",
      description: "Your time is valuable... Add your friends and earn recieve monetary incentives for showing up and meeting IRL"
    },
    {
      icon: <Wine className="w-6 h-6 text-accent-purple-light" />,
      title: "Curated Venues",
      description: "Can't decide on plans? Our Discovery engine highlights the trendiest restaurants, clubs, bars, and curated events for the best experiences"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative z-10 px-6 overflow-hidden">

      {/* Gradient mask for seamless transition to Footer only */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto max-w-5xl relative z-20">
        <FadeInUp duration={0.6} className="text-center mb-24">
          <h2 className="mb-6 text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
            The Antidote to Online Dating
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Our mission is to bring people back together in the real world. Forget endless chats—we connect you with the people, the events, and the best spaces New York City has to offer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full border border-white/10 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-pink"></span>
              </span>
              <p className="text-xs font-semibold tracking-wider text-white/90 uppercase">Now Available in NYC</p>
            </div>
          </div>
        </FadeInUp>

        {/* Clean Bento Box Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 (Spans 2 columns) */}
          <FadeInUp delay={0.2} className="md:col-span-2">
            <div className="h-full rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-md p-10 md:p-12 flex flex-col justify-between group hover:border-accent-pink/50 transition-colors duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-pink/20 transition-all duration-700 pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-accent-pink/10 flex items-center justify-center mb-12 border border-accent-pink/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <DollarSign className="w-8 h-8 text-accent-pink" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Connections</h3>
                <p className="text-white/70 leading-relaxed max-w-md text-lg">
                  Your time is valuable... Add your friends and receive monetary incentives for showing up and meeting IRL.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Feature 2 (Spans 1 column) */}
          <FadeInUp delay={0.4} className="md:col-span-1">
            <div className="h-full rounded-[2.5rem] bg-gradient-to-bl from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-md p-10 flex flex-col justify-between group hover:border-accent-purple-light/50 transition-colors duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-purple-light/20 transition-all duration-700 pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-accent-purple-light/10 flex items-center justify-center mb-8 border border-accent-purple-light/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Wine className="w-8 h-8 text-accent-purple-light" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Curated Venues</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Can't decide on plans? Our Discovery engine highlights the trendiest restaurants, clubs, bars, and curated events for the best experiences.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Feature 3 (Spans 3 columns) */}
          <FadeInUp delay={0.6} className="md:col-span-3">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-t from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl p-10 md:p-12 group hover:border-white/30 transition-all duration-500 flex flex-col md:flex-row items-center gap-10">
              <div className="absolute left-1/4 bottom-0 w-96 h-48 bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent-pink/20 transition-all duration-700" />

              <div className="flex-1 relative z-10 w-full text-center md:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-inner group-hover:rotate-12 transition-transform duration-500 mx-auto md:mx-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                  Exclusive to NYC <span className="text-white/50 text-xl font-normal ml-2 block sm:inline mt-2 sm:mt-0">(for now)</span>
                </h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                  We've mapped out the perfect spots. From hidden speakeasies to exclusive rooftops, the city is your playground.
                </p>
              </div>

              <div className="flex-1 w-full max-w-sm md:max-w-none relative h-64 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-background/80 to-background/20 backdrop-blur-md shadow-2xl">
                {/* Manhattan Sketch Map Effect */}
                <img src="/images/manhattan_sketch.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-[transform,opacity] duration-1000" alt="Map of Manhattan" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,18,18,0.8)_100%)] pointer-events-none" />

                {/* Pulsing Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-0 motion-safe:animate-ping rounded-full border-2 border-accent-pink opacity-50 scale-150" />
                  <span className="absolute inset-[-1rem] motion-safe:animate-pulse rounded-full bg-accent-pink/30 blur-xl" />
                  <MapPin className="relative w-14 h-14 text-accent-pink drop-shadow-[0_0_10px_rgba(242,167,192,0.8)]" />
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
