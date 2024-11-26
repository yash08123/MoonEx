import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Menu } from "lucide-react"; // Add Menu for hamburger

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container z-30 mx-auto px-6 py-6 flex items-center justify-between relative bg-[#0B1221]">
      {" "}
      {/* Same background color as your component */}
      <a href="/" className="flex items-center gap-2">
        <img src="/moonex-logo.png" alt="MoonEX" width={120} height={40} />
      </a>
      {/* Menu */}
      <div className={`hidden md:flex items-center gap-8`}>
        {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((text) => (
          <a
            key={text}
            href={`#${text.toLowerCase().replace(/\s+/g, "")}`}
            className="text-sm font-secondaryBold text-white hover:text-[#FFB800] transition-colors"
          >
            {text}
          </a>
        ))}
      </div>
      {/*Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" /> // Show hamburger icon
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-[#0B1221] text-center py-4 z-20" // Keep background consistent with nav
        >
          {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase().replace(/\s+/g, "")}`}
              className="block text-white py-2 px-4 text-lg font-secondaryBold hover:text-[#FFB800] transition-colors"
            >
              {text}
            </a>
          ))}
        </motion.div>
      )}
      {/*Wallet Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FFB800] text-black px-6 py-2 rounded-full text-sm font-secondaryBold"
      >
        Connect Wallet
      </motion.button>
    </nav>
  );
}
