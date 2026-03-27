"use client";

import React, { useEffect, useState } from "react";

export function HeroTypewriter({
  line1,
  line2,
  speed = 80,
  delay = 500,
}: {
  line1: string;
  line2: string;
  speed?: number;
  delay?: number;
}) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [start1, setStart1] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStart1(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!start1) return;
    if (count1 < line1.length) {
      const t = setTimeout(() => setCount1((prev) => prev + 1), speed);
      return () => clearTimeout(t);
    } else if (count2 < line2.length) {
      // Small reading pause between the lines specifically requested
      const burstDelay = count2 === 0 ? speed * 4 : speed;
      const t = setTimeout(() => setCount2((prev) => prev + 1), burstDelay);
      return () => clearTimeout(t);
    }
  }, [start1, count1, count2, line1, line2, speed]);

  const activeLine = count1 < line1.length ? 1 : 2;
  const isFinished = count2 === line2.length;

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 pointer-events-auto flex flex-col items-center justify-center">
      {/* LINE 1 */}
      <div className="relative text-white flex justify-center whitespace-nowrap">
        {/* Invisible sizing anchor that halts layout jumping when typing */}
        <span className="opacity-0 pointer-events-none select-none">{line1}</span>
        
        {/* Visible rendering layer */}
        <div className="absolute inset-0 flex">
          <span>{line1.slice(0, count1)}</span>
          {activeLine === 1 && !isFinished && (
            <span className="animate-[pulse_0.8s_ease-in-out_infinite] font-light ml-1 opacity-50">
              |
            </span>
          )}
        </div>
      </div>

      {/* LINE 2 */}
      <div className="relative flex justify-center whitespace-nowrap mt-2 md:mt-4">
        {/* Invisible sizing anchor */}
        <span className="opacity-0 pointer-events-none select-none text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-purple-light">
          {line2}
        </span>
        
        {/* Visible rendering layer */}
        <div className="absolute inset-0 flex text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-purple-light">
          <span>{line2.slice(0, count2)}</span>
          {(activeLine === 2 || isFinished) && (
            <span className="animate-[pulse_0.8s_ease-in-out_infinite] font-light ml-1 opacity-100 text-accent-pink mix-blend-screen drop-shadow-[0_0_10px_rgba(242,167,192,0.8)]">
              |
            </span>
          )}
        </div>
      </div>
    </h1>
  );
}
