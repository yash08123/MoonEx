// components/Hero.tsx

import { motion } from "framer-motion";
import Navigation from "./navigation";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#0B1221] via-[#0B1221] to-[#132136] overflow-hidden"
      style={{
        backgroundImage: "url('/circles.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation />

      <div className="container mx-auto px-6 mt-20 md:mt-32 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-primaryBold leading-tight text-white">
            <div>Trusted Multi-Chain</div>
            <div className="text-[#FFB800]">DEX Platform</div>
          </h1>
          <p className="mt-6 font-primaryRegular text-gray-400 text-sm md:text-lg max-w-xl">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFB800] text-black px-8 py-3 rounded-full text-sm font-secondaryBold"
            >
              Connect Wallet
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#FFB800] text-[#FFB800] px-8 py-3 rounded-full text-sm font-secondaryBold"
            >
              Trade Crypto
            </motion.button>
          </div>
        </motion.div>

        {/* Gradient Sphere */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 md:top-0 md:right-10 md:left-auto md:translate-x-0 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-80 shadow-[0_0_30px_10px_rgba(255,184,0,0.5)]"
        />
      </div>
    </section>
  );
}
