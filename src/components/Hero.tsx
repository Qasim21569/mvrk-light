
import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-mvrk-soft-cyan bg-opacity-80 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-mvrk-soft-cyan bg-opacity-80"></div>
      <div className="section-container relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-mvrk-navy-slate">
          <span className="text-mvrk-teal">M</span>
          <span className="text-mvrk-slate">V</span>
          <span className="text-mvrk-coral">R</span>
          <span className="text-mvrk-teal">K</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-mvrk-navy-slate">
          Transform. Innovate. Empower.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-mvrk-navy-slate">
          We help businesses navigate digital transformation with strategic consulting and technology implementation.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-mvrk-teal text-white rounded-md hover:bg-mvrk-aqua-blue transition-colors shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white text-mvrk-teal border border-mvrk-teal rounded-md hover:bg-mvrk-soft-cyan transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
