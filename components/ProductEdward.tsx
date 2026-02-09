"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Brain, Zap, Shield } from "lucide-react";
import { GitHub } from "@/components/GitHubIcon";

const features = [
  {
    icon: Brain,
    title: "Intelligent Design",
    description: "Built with conscious architecture patterns for scalability and performance.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized at every layer to ensure lightning-fast interactions.",
  },
  {
    icon: Shield,
    title: "Pragmatic Security",
    description: "Enterprise-grade security defaults out of the box.",
  },
] as const;

const previewContent = (
  <div className="absolute inset-0 pt-28 pb-6 px-6 overflow-hidden">
    <div className="w-full h-full rounded-2xl bg-[#080808] border border-white/5 overflow-hidden flex flex-col shadow-inner">
      <div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-white/10" aria-hidden="true" />
        <div className="w-2 h-2 rounded-full bg-white/10" aria-hidden="true" />
        <div className="w-2 h-2 rounded-full bg-white/10" aria-hidden="true" />
      </div>
      <div className="flex-1 p-6 space-y-6 overflow-hidden">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-2xl bg-accent-gold/5 flex items-center justify-center border border-accent-gold/10">
            <div className="w-6 h-6 rounded-full bg-accent-gold/20 animate-pulse" />
          </div>
          <div className="flex-1 space-y-3 py-2">
            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
            <div className="h-2 w-1/2 bg-white/5 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-28 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col p-4 space-y-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
          </div>
          <div className="h-28 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col p-4 space-y-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full" />
            <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
          </div>
        </div>
        <div className="h-32 rounded-2xl bg-gradient-to-br from-accent-gold/[0.03] via-transparent to-transparent border border-accent-gold/[0.05] p-6 space-y-4">
          <div className="h-2 w-1/3 bg-accent-gold/20 rounded-full" />
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/5 rounded-full" />
            <div className="h-1.5 w-5/6 bg-white/5 rounded-full" />
          </div>
        </div>
      </div>
      <div className="h-10 border-t border-white/5 bg-white/[0.01] px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500/40 animate-pulse" aria-hidden="true" />
          <div className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Edward</div>
        </div>
        <div className="text-[9px] text-accent-gold/40 font-bold">READY</div>
      </div>
    </div>
  </div>
);

export const ProductEdward = () => {
  return (
    <section 
      id="product" 
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
      aria-labelledby="product-heading"
    >
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <div className="font-display text-accent-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
            Our First Product
          </div>
          <h2 
            id="product-heading" 
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight"
          >
            Meet Edward
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Edward is an autonomous engineering engine that bridges the gap 
            between high-level architectural intent and production-ready code. 
            It codifies technical wisdom to automate the heavy lifting of system design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article 
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 group"
                >
                  <Icon 
                    className="w-5 h-5 text-accent-gold/70 group-hover:text-accent-gold transition-colors" 
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-white/90 font-semibold mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/pragnya-works/edward"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold text-black text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
            >
              <GitHub className="w-4 h-4" aria-hidden="true" />
              Github
            </Link>
            <Link
              href="https://edward.pragnyaa.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/80 text-xs font-bold uppercase tracking-widest hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Website [WIP]
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:w-1/2 relative"
        >
          <div 
            className="absolute -inset-10 bg-accent-gold/10 rounded-3xl blur-[100px] -z-10 opacity-50" 
            aria-hidden="true"
          />

          <div 
            className="aspect-[4/3] bg-[#0c0c0c] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group"
            role="img"
            aria-label="Edward product demonstration showing an AI prompt interface generating a website"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" 
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 top-0 p-6 z-20">
              <div className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                <div className="w-8 h-8 rounded-lg bg-accent-gold/20 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] text-accent-gold font-bold uppercase tracking-widest mb-0.5">
                    Prompt
                  </div>
                  <div className="text-white/80 text-xs font-mono overflow-hidden whitespace-nowrap border-accent-gold animate-typing">
                    Build a conscious agency site...
                  </div>
                </div>
              </div>
            </div>

            {previewContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
