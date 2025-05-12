
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValuesSlider from "@/components/ValuesSlider";
import Implementation from "@/components/Implementation";
import Improvement from "@/components/Improvement";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: "url('/lovable-uploads/dba3700c-84ba-4d10-9701-a7079b020805.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: "0.15"
        }}
      />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <ValuesSlider />
        <Implementation />
        <Improvement />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
