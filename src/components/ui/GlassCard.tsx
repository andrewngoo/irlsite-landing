import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "bg-surface backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden",
        hoverEffect && "transition-all duration-500 hover:border-accent-pink/30 hover:shadow-[0_0_40px_rgba(242,167,192,0.1)] group",
        className
      )}
      {...props}
    >
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
