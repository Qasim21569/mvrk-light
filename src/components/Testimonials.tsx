'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    quote: "MVRK's strategic approach transformed our Salesforce implementation. Their SET framework helped us stabilize our platform and unlock new capabilities we didn't know were possible.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechGrowth Solutions",
    logo: "TGS"
  },
  {
    id: 2,
    quote: "Working with MVRK gave us the clarity and confidence we needed. Their process-driven methodology ensured our implementation was smooth, on-budget, and delivered real value.",
    author: "Michael Rodriguez",
    position: "VP of Operations",
    company: "Global Retail Dynamics",
    logo: "GRD"
  },
  {
    id: 3,
    quote: "The team at MVRK doesn't just implement Salesforce—they transform how your business operates. Their expertise and strategic guidance led to a 40% increase in our team's efficiency.",
    author: "Emily Thompson",
    position: "Director of Digital Strategy",
    company: "InnovateFirst Financial",
    logo: "IFF"
  }
];

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (newPage >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  };

  // Auto-advance the carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section 
      id="testimonials" 
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#D4F4F8] to-[#D4F4F8]/30"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(99, 215, 228, 0.15), transparent 70%), radial-gradient(circle at 30% 70%, rgba(223, 109, 134, 0.1), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center text-[#4C5A6E] pt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Curious about the MVRK difference?
        </motion.h2>
        
        {/* Supporting Text */}
        <motion.p 
          className="text-slate-600 text-base md:text-lg mt-2 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear directly from our satisfied clients.
        </motion.p>

        {/* Testimonial Carousel */}
        <div className="relative max-w-[900px] mx-auto px-4">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.15 },
                scale: { duration: 0.25 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <motion.div 
                className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
        >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo Section */}
                  <motion.div 
                    className="w-[80px] h-[80px] bg-white/50 rounded-full flex items-center justify-center text-2xl font-bold text-[#36A9B1] shadow-md"
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {testimonials[page].logo}
                  </motion.div>
                  
                  {/* Quote Section */}
                  <motion.div 
                    className="flex-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <blockquote className="text-lg md:text-xl leading-relaxed text-slate-700 italic">
                      "{testimonials[page].quote}"
                    </blockquote>
                    <div className="mt-4 text-sm md:text-base text-slate-600">
                      <span className="font-semibold">— {testimonials[page].author}</span>
                      <span className="italic">, {testimonials[page].position}</span>
                      <br />
                      <span>{testimonials[page].company}</span>
              </div>
                  </motion.div>
            </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              paginate(-1);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#4C5A6E] hover:bg-[#36A9B1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowIcon className="w-6 h-6 transform rotate-180" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              paginate(1);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#4C5A6E] hover:bg-[#36A9B1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowIcon className="w-6 h-6" />
          </motion.button>
          </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
            <motion.button
                key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                page === index ? "bg-[#36A9B1] w-6" : "bg-slate-300"
              )}
                onClick={() => {
                const direction = index > page ? 1 : -1;
                setPage([index, direction]);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={cn("w-4 h-4", className)}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Testimonials;
