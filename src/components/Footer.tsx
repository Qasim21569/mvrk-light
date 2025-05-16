import React from "react";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#implementing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];
  
  const serviceItems = [
    { label: 'Implementing Salesforce', href: '#implementing' },
    { label: 'Improving Salesforce', href: '#improving' },
    { label: 'Strategy Consulting', href: '#implementing' },
    { label: 'Support & Maintenance', href: '#improving' },
  ];
  
  return (
    <footer className="relative z-10 py-16">
      {/* Footer background with blur effect */}
      <div className="absolute inset-0 bg-mvrk-navy-slate/90 backdrop-blur-sm z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-white mb-4">MVRK</h2>
              <p className="text-gray-300 leading-relaxed">
                Driving clarity, stability, and success with Salesforce. Your trusted partner for implementation, improvement, and transformation.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-mvrk-aqua-blue/50 pb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-mvrk-aqua-blue/50 pb-2">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              {serviceItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-mvrk-aqua-blue/50 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-mvrk-aqua-blue mr-3 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">123 Salesforce Way, Toronto, Ontario, Canada</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-mvrk-aqua-blue mr-3 flex-shrink-0" size={18} />
                <a href="tel:+15555555555" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                  +1 (555) 555-5555
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-mvrk-aqua-blue mr-3 flex-shrink-0" size={18} />
                <a href="mailto:vuk@mvrk.ca" className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors">
                  vuk@mvrk.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Copyright & Credits */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MVRK Consulting. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-mvrk-aqua-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-mvrk-aqua-blue transition-colors text-sm">
              Terms of Service
            </a>
            <span className="text-gray-400 text-sm">
              Built by Qasim Kharodia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
