
import React, { useRef, useState } from "react";

const values = [
  {
    title: "Strategy",
    description: "We develop clear, actionable strategies tailored to your business goals and challenges, creating a roadmap for success that aligns technology initiatives with organizational objectives.",
    icon: "📊",
  },
  {
    title: "Transparency",
    description: "We believe in open, honest communication throughout every engagement. Our clients always know the status of their projects, the challenges we're facing, and how we're addressing them.",
    icon: "🔍",
  },
  {
    title: "Team",
    description: "We work as an extension of your team, bringing specialized expertise while respecting and enhancing your organization's culture and capabilities. Your success is our success.",
    icon: "🤝",
  },
];

const ValuesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / values.length;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="values" className="bg-mvrk-soft-cyan bg-opacity-50">
      <div className="section-container">
        <h2 className="section-title">Our Values</h2>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-white p-8 rounded-lg shadow-md card-hover flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-mvrk-teal">{value.title}</h3>
              <p className="text-mvrk-navy-slate">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden">
          <div className="flex justify-center mb-4">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? "bg-mvrk-teal" : "bg-mvrk-teal bg-opacity-30"
                }`}
              />
            ))}
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex-shrink-0 w-full snap-center px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-mvrk-teal">{value.title}</h3>
                  <p className="text-mvrk-navy-slate">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSlider;
