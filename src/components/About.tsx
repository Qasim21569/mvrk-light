
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white bg-opacity-70">
      <div className="section-container">
        <h2 className="section-title">About MVRK</h2>
        
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-mvrk-teal">What is a Maverick?</h3>
            <p className="text-lg leading-relaxed">
              A maverick is an independent-minded person who thinks and acts differently, 
              challenging the status quo to drive innovation and positive change. 
              At MVRK, we embrace this spirit in everything we do, approaching each 
              challenge with fresh perspectives and creative solutions.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-mvrk-teal">Who is MVRK?</h3>
            <p className="text-lg leading-relaxed mb-4">
              MVRK is a strategic consulting firm specializing in guiding organizations 
              through digital transformation. We combine deep industry expertise with 
              technical knowledge to deliver impactful solutions that drive growth and efficiency.
            </p>
            <p className="text-lg leading-relaxed">
              Founded by industry veterans with decades of combined experience across 
              enterprise technology, business strategy, and organizational change management, 
              we partner with our clients to navigate complexity and achieve their business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
