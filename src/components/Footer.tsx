
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mvrk-navy-slate text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-3">MVRK</h2>
            <p className="text-mvrk-aqua-blue">Transform. Innovate. Empower.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-mvrk-aqua-blue">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-mvrk-aqua-blue transition-colors">Strategy</a></li>
                <li><a href="#" className="hover:text-mvrk-aqua-blue transition-colors">Implementation</a></li>
                <li><a href="#" className="hover:text-mvrk-aqua-blue transition-colors">Improvement</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-mvrk-aqua-blue">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-mvrk-aqua-blue transition-colors">About</a></li>
                <li><a href="#values" className="hover:text-mvrk-aqua-blue transition-colors">Values</a></li>
                <li><a href="#contact" className="hover:text-mvrk-aqua-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-mvrk-aqua-blue">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-mvrk-aqua-blue transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-mvrk-aqua-blue transition-colors">Twitter</a></li>
                <li><a href="mailto:info@mvrk.com" className="hover:text-mvrk-aqua-blue transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-mvrk-aqua-blue border-opacity-30 mt-8 pt-8 text-center text-sm text-mvrk-aqua-blue text-opacity-70">
          <p>© {currentYear} MVRK Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
