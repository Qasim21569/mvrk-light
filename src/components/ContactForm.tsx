
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder for the actual Salesforce endpoint integration
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Thank you for your message! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-mvrk-soft-cyan bg-opacity-30 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-mvrk-navy-slate font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-mvrk-teal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-mvrk-teal"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-mvrk-navy-slate font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-mvrk-teal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-mvrk-teal"
                  placeholder="Your company"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-mvrk-navy-slate font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-mvrk-teal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-mvrk-teal"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-mvrk-navy-slate font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-mvrk-teal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-mvrk-teal resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-mvrk-teal text-white rounded-md hover:bg-mvrk-aqua-blue transition-colors shadow-md"
              >
                Send Message
              </button>
            </div>
            
            <p className="text-sm text-center mt-4 text-mvrk-navy-slate opacity-80">
              By submitting this form, you agree to our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
