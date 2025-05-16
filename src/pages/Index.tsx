import Hero from "@/components/Hero";
import About from "@/components/About";
import Implementation from "@/components/Implementation";
import Improvement from "@/components/Improvement";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed background with blur */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: "0.15"
        }}
      />
      
      {/* Globally blurred overlay for better text readability */}
      <div 
        className="fixed inset-0 z-0 backdrop-blur-xl bg-white/20"
      />

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
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
