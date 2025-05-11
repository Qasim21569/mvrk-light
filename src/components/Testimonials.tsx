
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "MVRK's strategic guidance transformed our approach to technology, leading to a 30% increase in operational efficiency.",
    author: "Sarah Johnson",
    position: "CIO, Global Retail Corp",
    logo: "GRC",
  },
  {
    quote: "The team at MVRK delivered exceptional results. Their process-driven approach ensured our implementation was smooth and on-budget.",
    author: "Michael Chen",
    position: "VP of Operations, TechSolutions Inc",
    logo: "TSI",
  },
  {
    quote: "Working with MVRK gave us the clarity we needed to make confident decisions about our digital transformation journey.",
    author: "Alex Thompson",
    position: "CEO, Innovate Financial",
    logo: "IF",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the slider
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="bg-mvrk-soft-cyan bg-opacity-50 py-20">
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-mvrk-aqua-blue flex items-center justify-center text-white text-2xl font-bold">
                {testimonials[currentIndex].logo}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-mvrk-navy-slate mb-6 text-center">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-mvrk-teal">{testimonials[currentIndex].author}</p>
              <p className="text-mvrk-slate text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 mx-2 rounded-full ${
                  index === currentIndex ? "bg-mvrk-teal" : "bg-mvrk-teal bg-opacity-30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-mvrk-soft-cyan transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mvrk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-mvrk-soft-cyan transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mvrk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
