"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CircuitBoard } from "lucide-react";

const badge = (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-[10px] uppercase tracking-widest font-bold mb-8">
    <CircuitBoard className="w-3 h-3" aria-hidden="true" />
    <span>Wisdom-driven Software Agency</span>
  </div>
);

const scrollIndicator = (
  <div className="hidden lg:flex flex-col items-center gap-4 mt-auto pt-12">
    <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
      Scroll to explore
    </span>
    <div 
      className="w-[1px] h-12 bg-gradient-to-b from-accent-gold/40 via-accent-gold/10 to-transparent" 
      aria-hidden="true"
    />
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-between py-12 md:py-24 overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/10 rounded-full blur-[120px] -z-10" 
        aria-hidden="true"
      />

      <div className="h-12 md:h-20" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-6 max-w-4xl"
        style={{ willChange: "transform, opacity" }}
      >
        {badge}

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
          <span className="text-gradient">Conscious intelligence,</span>
          <br />
          <span className="text-gradient-gold">exceptional products.</span>
        </h1>

        <p className="text-base md:text-lg text-white/50 max-w-xl mb-12 leading-relaxed font-medium">
          Pragnya is technical <em className="text-white not-italic">Wisdom</em>. 
          We decouple complexity and architect resilient systems that scale from 
          first principles.
        </p>

        <Link 
          href="#product"
          className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/80 font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50 active:scale-95"
        >
          View our work
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        {scrollIndicator}
      </motion.div>
    </section>
  );
};
