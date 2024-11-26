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
    <section className="py-24 px-4 font-primaryRegular ">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Why <span className="text-yellow-400  ">MoonEX</span>?
        </motion.h2>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#1A2333] rounded-lg overflow-hidden shadow-md"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 py-4 px-6 border-b border-[#2A3447] bg-[#131A2A]">
            <div className="text-yellow-400 font-bold text-center">
              Comparison
            </div>
            <div className="flex justify-center items-center font-bold">
              <img
                src="/moonex-logo.png"
                alt="MoonEX"
                width={100}
                height={24}
              />
            </div>
            <div className="flex justify-center items-center font-bold text-pink-500">
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
              className={`grid grid-cols-3 py-4 px-6 border-b border-[#2A3447] ${
                index % 2 === 0 ? "bg-[#1A2333]" : "bg-[#1D2638]"
              }`}
            >
              <div className="text-center flex items-center justify-center text-gray-300">
                {point}
              </div>

              {/* MoonEX Icon */}
              <div className="flex justify-center items-center">
                <Check className="text-green-400 w-6 h-6" />
              </div>

              {/* UNISWAP Icon */}
              <div className="flex justify-center items-center">
                <X className="text-red-400 w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
