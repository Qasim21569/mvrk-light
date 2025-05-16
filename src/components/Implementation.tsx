'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Target, Briefcase, Rocket, ChevronRight } from "lucide-react";

const phases = [
  {
    letter: "S",
    title: "Strategize",
    description: "We begin by understanding your current reality and goals, establishing a clear strategy for your CRM deployment that aligns with your business objectives.",
    icon: <Target className="w-12 h-12 text-mvrk-teal" />
  },
  {
    letter: "P",
    title: "Procure",
    description: "We help you acquire the required Salesforce licensing and third-party tools at the best possible price, ensuring you get exactly what you need.",
    icon: <Briefcase className="w-12 h-12 text-mvrk-teal" />
  },
  {
    letter: "I",
    title: "Implement",
    description: "We collaboratively implement the platform, documenting our work and training your team to ensure a successful launch and sustained value.",
    icon: <Rocket className="w-12 h-12 text-mvrk-teal" />
  }
];

const Implementation = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Track scroll position for mobile cards
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newActiveCard = Math.round(scrollPosition / cardWidth);
    
    if (newActiveCard !== activeCard) {
      setActiveCard(newActiveCard);
    }
  };

  return (
    <section 
      id="implementing" 
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#D4F4F8] to-[#D4F4F8]/30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, rgba(99, 215, 228, 0.15), transparent 70%), radial-gradient(circle at 70% 30%, rgba(223, 109, 134, 0.1), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center text-mvrk-navy-slate pt-10 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Implementing Salesforce?
        </motion.h2>
        
        {/* Supporting Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base text-slate-600 mt-4 leading-relaxed tracking-wide">
            Interested in implementing Salesforce? Our proven 3-phase plan – Strategize, Procure, Implement – provides a clear and guided path to your successful Salesforce deployment, always focusing on a clear MVP to deliver value quickly and cost-effectively while meeting your strategic goals.
          </p>
        </motion.div>
        
        {/* Desktop Phase Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-16">
          {phases.map((phase, index) => (
            <PhaseCard 
              key={phase.title} 
              phase={phase}
              delay={0.6 + index * 0.2}
              isLast={index === phases.length - 1}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile Phase Cards Horizontal Scroll */}
        <div className="md:hidden w-full mt-16">
          <div 
            className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 flex"
            onScroll={handleScroll}
            style={{ scrollBehavior: 'smooth' }}
          >
            {phases.map((phase, index) => (
              <div 
                key={phase.title} 
                className="snap-center w-full flex-shrink-0 px-4 first:pl-4 last:pr-4"
              >
                <PhaseCard 
                  phase={phase}
                  delay={0.6 + index * 0.2}
                  isLast={index === phases.length - 1}
                  isFirst={index === 0}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {phases.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === index ? "bg-mvrk-teal w-6" : "bg-slate-300"
                )}
                onClick={() => {
                  const container = document.querySelector('#implementing .snap-x');
                  if (container) {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`View phase ${index + 1}: ${phases[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* SPI Framework Progress Indicator */}
        <motion.div 
          className="mt-12 text-center text-sm text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="flex items-center justify-center space-x-2">
            <span className="text-mvrk-teal font-semibold">S</span>
            <ArrowIcon />
            <span className="text-mvrk-teal font-semibold">P</span>
            <ArrowIcon />
            <span className="text-mvrk-teal font-semibold">I</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface PhaseProps {
  phase: {
    letter: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  delay: number;
  isLast: boolean;
  isFirst: boolean;
  index: number;
}

const PhaseCard = ({ phase, delay, isLast, isFirst, index }: PhaseProps) => {
  return (
    <motion.div 
      className="relative pt-4 px-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div 
        className="bg-white/30 backdrop-blur-md shadow-md rounded-xl p-6 h-full border border-white/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-mvrk-teal/50"
        tabIndex={0}
        aria-label={`${phase.title} phase: ${phase.description}`}
      >
        <div className="absolute -top-1 md:-top-3 left-2 md:-left-3 bg-mvrk-teal text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
          {phase.letter}
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-center">
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center",
              index === 0 ? "bg-mvrk-soft-cyan/50" : 
              index === 1 ? "bg-mvrk-aqua-blue/30" : 
              "bg-mvrk-teal/20"
            )}>
              {phase.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-mvrk-teal">{phase.title}</h3>
          <p className="text-base text-slate-600 leading-relaxed tracking-wide">{phase.description}</p>
        </div>
      </div>
      
      {/* Desktop connector arrows */}
      {!isLast && (
        <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 hidden md:block z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="bg-mvrk-coral/10 rounded-full p-1"
          >
            <ChevronRight className="w-8 h-8 text-mvrk-coral" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <ChevronRight className={cn("w-4 h-4 text-mvrk-coral", className)} />
);

export default Implementation;
