import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-pink to-accent-purple-dark text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(242,167,192,0.4)] px-8 py-3.5",
    outline: "border border-white/20 bg-transparent text-white hover:bg-white/5 px-6 py-2.5",
    ghost: "bg-transparent text-text-secondary hover:text-white hover:bg-white/5 px-4 py-2"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
