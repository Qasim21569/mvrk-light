
import React from "react";
import ProcessSection from "./ProcessSection";

const implementationSteps = [
  {
    title: "Strategize",
    description: "We work with you to understand your business objectives, assess your current state, and develop a comprehensive implementation strategy.",
    icon: "🧠",
  },
  {
    title: "Procure",
    description: "We help you identify and select the right technology solutions that align with your strategy, ensuring efficient procurement processes.",
    icon: "🔍",
  },
  {
    title: "Implement",
    description: "Our team executes the implementation plan, ensuring seamless integration with your existing systems and processes.",
    icon: "🚀",
  },
];

const Implementation = () => {
  return (
    <ProcessSection
      id="process"
      title="Implementation Process"
      steps={implementationSteps}
    />
  );
};

export default Implementation;
