import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Target, Heart, Users } from "lucide-react";

const About = () => {
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
      id="about" 
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-mvrk-soft-cyan/30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, rgba(99, 215, 228, 0.15), transparent 70%), radial-gradient(circle at 70% 30%, rgba(223, 109, 134, 0.1), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center">
        {/* Headline */}
        <motion.h2 
          className="text-4xl font-bold md:text-5xl text-mvrk-navy-slate mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who is MVRK?
        </motion.h2>
        
        {/* Intro Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base text-slate-600 text-center leading-relaxed tracking-wide">
            MVRK is a strategic consulting firm specializing in guiding organizations 
            through Salesforce implementation and optimization. Founded by industry veterans with 
            decades of combined experience, we bring a fresh perspective to every challenge. 
            Our team combines deep technical expertise with business acumen to deliver solutions 
            that drive real value. Unlike traditional consultants, we see your business with fresh eyes, 
            aren't afraid to question the status quo, and have the expertise to help you forge your own trail, 
            delivering lasting value and Salesforce stability.
          </p>
        </motion.div>
        
        {/* Subheading */}
        <motion.h3 
          className="text-xl font-semibold text-mvrk-teal mb-10 text-center md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Values
        </motion.h3>
        
        {/* Desktop Values Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          {values.map((value, index) => (
            <ValueCard 
              key={value.title} 
              title={value.title} 
              description={value.description} 
              delay={0.6 + index * 0.2}
              index={index}
              icon={value.icon}
            />
          ))}
        </div>
        
        {/* Mobile Values Horizontal Scroll - One card at a time */}
        <div className="md:hidden w-full">
          <div 
            className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 flex"
            onScroll={handleScroll}
            style={{ scrollBehavior: 'smooth' }}
          >
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="snap-center w-full flex-shrink-0 px-4 first:pl-4 last:pr-4"
              >
                <ValueCard 
                  title={value.title} 
                  description={value.description} 
                  delay={0.6 + index * 0.2}
                  index={index}
                  icon={value.icon}
                />
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {values.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === index ? "bg-mvrk-teal w-6" : "bg-mvrk-slate/30"
                )}
                onClick={() => {
                  const container = document.querySelector('.snap-x');
                  if (container) {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`View value ${index + 1}: ${values[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
  index: number;
  icon: React.ReactNode;
}

const ValueCard = ({ title, description, delay, index, icon }: ValueCardProps) => {
  return (
    <motion.div 
      className="bg-white/40 backdrop-blur-md rounded-xl shadow-md p-6 h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-mvrk-teal/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      tabIndex={0}
      aria-label={`Value: ${title} - ${description}`}
    >
      <div className="mb-4 flex items-center justify-center">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4",
          index === 0 ? "bg-mvrk-soft-cyan/50" : 
          index === 1 ? "bg-mvrk-aqua-blue/30" : 
          "bg-mvrk-coral/20"
        )}>
          {icon}
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-4 text-mvrk-teal md:text-xl text-center">{title}</h4>
      <p className="text-base text-slate-600 leading-relaxed tracking-wide">{description}</p>
    </motion.div>
  );
};

const values = [
  {
    title: "Strategy > Technology",
    description: "We believe that technology should serve your business strategy, not the other way around. We focus on understanding your unique needs and objectives before recommending technical solutions, ensuring that every implementation drives meaningful business outcomes.",
    icon: <Target className="w-8 h-8 text-mvrk-teal" />
  },
  {
    title: "Radical Transparency",
    description: "We communicate openly and honestly at every step of the process. You'll always know where your project stands, what challenges we're facing, and how we plan to address them. We believe that transparency builds trust and leads to better results.",
    icon: <Heart className="w-8 h-8 text-mvrk-teal" />
  },
  {
    title: "Win As A Team",
    description: "Success is a collaborative effort. We work closely with your team, sharing knowledge and skills to ensure that everyone is aligned and empowered. When your team succeeds, we succeed, and this partnership mentality drives everything we do.",
    icon: <Users className="w-8 h-8 text-mvrk-teal" />
  }
];

export default About;
