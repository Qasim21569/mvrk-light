'use client';

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  // Load reCAPTCHA script
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup if component unmounts
        document.body.removeChild(script);
      };
    }
  }, []);

  // Add timestamp function for reCAPTCHA
  useEffect(() => {
    const timestamp = () => {
      const response = document.getElementById("g-recaptcha-response");
      if (response == null || response.value.trim() == "") {
        if (document.getElementsByName("captcha_settings").length > 0) {
          try {
            const elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
          } catch (e) {
            console.error("Error updating captcha timestamp", e);
          }
        }
      }
    };

    const interval = setInterval(timestamp, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#D4F4F8] to-[#D4F4F8]/30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, rgba(99, 215, 228, 0.15), transparent 70%), radial-gradient(circle at 70% 30%, rgba(223, 109, 134, 0.1), transparent 70%)"
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-center text-4xl md:text-5xl font-bold text-[#4C5A6E] pt-12 pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Want to Get In Touch?
        </motion.h2>
        
        {/* Form Container */}
        <motion.div
          className="max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
            <form 
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" 
              method="POST"
              className="grid grid-cols-1 gap-6"
            >
              {/* Hidden Salesforce fields */}
              <input type="hidden" name="oid" value="00D5j000000JNst" />
              <input type="hidden" name="retURL" value="https://www.mvrk.io/thank-you" />
              <input type="hidden" name="captcha_settings" value='{"keyname":"reCAPTCHA","fallback":"true","orgId":"00D5j000000JNst","ts":""}' />
              
              {/* First Name */}
              <div>
                <label className="text-slate-700 font-medium mb-1 block">
                  First Name
                </label>
                <input 
                  type="text" 
                  name="first_name" 
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#36A9B1] bg-white/60 transition-shadow"
                />
              </div>
              
              {/* Last Name */}
              <div>
                <label className="text-slate-700 font-medium mb-1 block">
                  Last Name
                </label>
                <input 
                  type="text" 
                  name="last_name" 
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#36A9B1] bg-white/60 transition-shadow"
                />
              </div>
              
              {/* Email */}
              <div>
                <label className="text-slate-700 font-medium mb-1 block">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#36A9B1] bg-white/60 transition-shadow"
                />
              </div>
              
              {/* Company */}
              <div>
                <label className="text-slate-700 font-medium mb-1 block">
                  Company
                </label>
                <input 
                  type="text" 
                  name="company" 
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#36A9B1] bg-white/60 transition-shadow"
                />
              </div>
              
              {/* Description */}
              <div>
                <label className="text-slate-700 font-medium mb-1 block">
                  Description
                </label>
                <textarea 
                  name="description" 
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#36A9B1] bg-white/60 transition-shadow min-h-[150px]"
                ></textarea>
              </div>
              
              {/* reCAPTCHA */}
              <div className="mt-4 mb-6">
                <div className="g-recaptcha" data-sitekey="6LfNcPwUAAAAAHtxjzwFWle1aBW-XgIMpOyHqWR0"></div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#36A9B1] text-white py-3 px-6 rounded-lg shadow hover:bg-[#2f8d99] transition"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
