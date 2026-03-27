"use client";

import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base static mesh defined in globals.css */}
      <div className="absolute inset-0 bg-hero-mesh opacity-60" />
      
      {/* Animated glowing orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-pink/20 blur-[120px]"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-purple-dark/20 blur-[150px]"
      />
      
      <div className="absolute inset-0 bg-background/50" />
    </div>
  );
}
