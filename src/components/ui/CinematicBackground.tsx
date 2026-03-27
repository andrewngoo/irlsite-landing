import React from 'react';

export function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#0E0E0E]">
      <div 
        className="absolute inset-0 bg-[url('/images/skyline-reference.jpg')] bg-cover bg-center md:bg-top opacity-[0.95] md:blur-[8px] blur-[6px] transform scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/20 via-[#0E0E0E]/80 to-[#0E0E0E] h-full" />
    </div>
  );
}
