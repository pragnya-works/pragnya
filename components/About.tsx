"use client";

import { motion } from "framer-motion";

const philosophyItems = [
  {
    title: "Architectural Sovereignty",
    description:
      "We don't just ship features; we engineer systems. By maintaining strict architectural integrity, we ensure that every product we build is capable of evolving without the weight of inherited complexity.",
  },
  {
    title: "First-Principles Engineering",
    description:
      "Pragnya is the application of deep technical intuition. We return to first principles to eliminate technical debt at the design phase, building lean, resilient foundations that outperform the status quo.",
  },
] as const;

export const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" 
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="font-display text-accent-gold text-xs uppercase tracking-[0.3em] font-bold mb-8">
          Our Philosophy
        </div>

        <h2 
          id="about-heading" 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 leading-[1.2] tracking-tight"
        >
          "Pragnya is not just about building software; it's about{" "}
          <em className="text-white not-italic">understanding</em> the problem."
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-20">
          {philosophyItems.map((item) => (
            <article key={item.title} className="space-y-4">
              <div 
                className="h-px w-12 bg-accent-gold/40" 
                aria-hidden="true"
              />
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
