import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface TubelightNavbarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavbar({ items, className }: TubelightNavbarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Implement scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      // Get all section elements
      const sections = items
        .map(item => {
          // Handle the home section specially
          if (item.href === '#') {
            return document.querySelector('section'); // First section
          }
          return document.querySelector(item.href);
        })
        .filter(Boolean) as HTMLElement[];
      
      // Find the current section
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentIndex = index;
        }
      });
      
      setActiveIndex(currentIndex);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  return (
    <nav className={cn("flex justify-center items-center", className)}>
      <div className="relative flex items-center gap-4 md:gap-8">
        {items.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium transition-colors duration-300",
              activeIndex === index ? "text-mvrk-teal" : "text-mvrk-navy-slate hover:text-mvrk-slate"
            )}
            onClick={(e) => {
              // Smooth scroll to section when clicked
              const href = item.href;
              if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                  e.preventDefault();
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                  // Update active index
                  setActiveIndex(index);
                }
              }
            }}
          >
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 bg-mvrk-soft-cyan/20 rounded-md z-0"
                layoutId="navbar-active-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
} 