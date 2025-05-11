
import React from "react";
import ProcessSection from "./ProcessSection";

const improvementSteps = [
  {
    title: "Stabilize",
    description: "We help ensure your systems are operating reliably and efficiently, addressing any immediate concerns or performance issues.",
    icon: "🛠️",
  },
  {
    title: "Enhance",
    description: "We identify opportunities to optimize your existing technology investments, adding capabilities and improving performance.",
    icon: "⚡",
  },
  {
    title: "Transform",
    description: "We guide you through transformational changes that leverage technology to create new business models and opportunities.",
    icon: "✨",
  },
];

const Improvement = () => {
  return (
    <ProcessSection
      id="improvement"
      title="Continuous Improvement"
      steps={improvementSteps}
    />
  );
};

export default Improvement;
