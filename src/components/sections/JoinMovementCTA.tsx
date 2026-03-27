import { FadeInUp } from "@/components/animations/FadeInUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function JoinMovementCTA() {
  return (
    <div className="relative z-20 pb-24 px-6 mt-16 flex justify-center">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeInUp duration={0.8} delay={0.2} className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to trade your profile for presence? Apply to join our next NYC cohort.
          </p>
          <Link href="/apply">
            <Button variant="primary" className="shadow-[0_0_15px_rgba(242,167,192,0.4)] hover:shadow-[0_0_25px_rgba(242,167,192,0.6)] transition-all duration-300 w-full sm:w-auto px-10 py-5 text-lg relative z-30">
              Apply to Join IRL
            </Button>
          </Link>
        </FadeInUp>
      </div>
    </div>
  );
}
