import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Implementing Salesforce?', href: '#implementing' },
    { label: 'Improving Salesforce?', href: '#improving' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-mvrk-soft-cyan/30"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(99, 215, 228, 0.15), transparent 70%), radial-gradient(circle at 30% 70%, rgba(223, 109, 134, 0.1), transparent 70%)"
          }}
        />
      </div>
      
      {/* Subtle watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-1/2 max-w-md opacity-[0.03] transform rotate-12">
          <img
            src="/logo-color.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>

      {/* Fixed Header with transparent background */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
          isScrolled && "backdrop-blur-sm border-b border-mvrk-teal/10"
        )}
      >
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <TubelightNavbar items={navItems} />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mvrk-navy-slate p-2 hover:text-mvrk-teal transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with frosted glass */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-white/90 backdrop-blur-md shadow-xl transform transition-transform duration-500 ease-in-out z-50 border-l border-mvrk-teal/10",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col pt-20 px-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-mvrk-navy-slate hover:text-mvrk-teal p-2"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 text-mvrk-navy-slate hover:text-mvrk-teal transition-colors duration-300 text-lg font-medium border-b border-mvrk-teal/10 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content with premium layering */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen px-6 pt-16 z-10">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12">
          {/* Logo with animation */}
          <div 
            className={cn(
              "w-full max-w-lg mx-auto scale-95 opacity-0 transition-all duration-1000",
              isLoaded && "scale-100 opacity-100"
            )}
          >
            <img
              src="/logo-color.png"
              alt="MVRK Logo"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Content card with frosted glass effect */}
          <div 
            className={cn(
              "text-center max-w-4xl mx-auto bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg transform translate-y-4 opacity-0 transition-all duration-1000 border border-white/50",
              isLoaded && "translate-y-0 opacity-100"
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mvrk-navy-slate mb-10 leading-tight tracking-tight drop-shadow-sm">
              Giving you control of your investment in the Salesforce platform
            </h1>
            
            <h3 className="text-xl font-semibold text-mvrk-teal mb-8 drop-shadow-sm">
              What is a Maverick?
            </h3>
            
            <p className="text-base text-slate-600 max-w-[700px] mx-auto leading-relaxed tracking-wide">
              As Mavericks, we see your business with fresh eyes, aren't afraid to 
              question the status quo, and have the expertise to help you forge your 
              own trail, delivering lasting value and Salesforce stability.
            </p>
          </div>

          {/* Scroll indicator */}
          <div 
            className={cn(
              "mt-8 opacity-0 transition-all duration-1000 delay-1000",
              isLoaded && "opacity-70"
            )}
          >
            <a 
              href="#about" 
              className="flex flex-col items-center text-mvrk-teal hover:text-mvrk-aqua-blue transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium mb-2">Learn More</span>
              <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </section>
  );
};

export default Hero;
