"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#2A3447] font-secondaryBold bg-[#0B1221]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src="/moonex-logo.png" alt="MoonEX" width={120} height={40} />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8">
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#roadmap"
              className="hover:text-yellow-400 transition-colors"
            >
              Roadmap
            </a>
            <a href="#faqs" className="hover:text-yellow-400 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Social Icons Section */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#1A2333] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              aria-label="Send Message"
            >
              <Send className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#1A2333] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              aria-label="Message"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#1A2333] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
