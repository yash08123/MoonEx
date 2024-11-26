"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonPoints = [
  "Supports Multi-Chain Transactions",
  "Low Transaction Fees",
  "Referral Program",
  "High Liquidity Pools",
  "Advanced Trading Tools",
];

export default function Comparison() {
  return (
    <section className="py-16 px-4 font-primaryRegular">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Why <span className="text-yellow-400">MoonEX</span>?
        </motion.h2>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#1A2333] rounded-lg overflow-hidden shadow-md"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-4 px-6 md:px-12 border-b border-[#2A3447] bg-[#131A2A]">
            <div className="text-yellow-400 font-bold text-center md:text-left">
              Comparison
            </div>
            <div className="flex justify-center items-center font-bold mt-2 md:mt-0">
              <img
                src="/moonex-logo.png"
                alt="MoonEX"
                width={80}
                height={20}
                className="md:w-auto"
              />
            </div>
            <div className="flex justify-center items-center font-bold text-pink-500 mt-2 md:mt-0">
              UNISWAP
            </div>
          </div>

          {/* Table */}
          {comparisonPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-3 py-4 px-6 border-b border-[#2A3447] ${
                index % 2 === 0 ? "bg-[#1A2333]" : "bg-[#1D2638]"
              }`}
            >
              <div className="text-center md:text-left flex items-center justify-center md:justify-start text-gray-300 text-sm md:text-base">
                {point}
              </div>

              {/* MoonEX Icon */}
              <div className="flex justify-center items-center mt-2 md:mt-0">
                <Check className="text-green-400 w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* UNISWAP Icon */}
              <div className="flex justify-center items-center mt-2 md:mt-0">
                <X className="text-red-400 w-5 h-5 md:w-6 md:h-6" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
