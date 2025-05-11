
import React from "react";

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

interface ProcessSectionProps {
  id: string;
  title: string;
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ id, title, steps }) => {
  return (
    <section id={id} className="bg-white">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center items-center max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-mvrk-teal">{step.title}</h3>
                <p className="text-mvrk-navy-slate">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="process-arrow px-4">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-mvrk-teal">{step.title}</h3>
                <p className="text-mvrk-navy-slate">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="text-2xl text-mvrk-teal">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
