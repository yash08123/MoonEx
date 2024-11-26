import { motion } from "framer-motion";
import { DollarSign, Shield, Scissors, Repeat } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: Shield,
    title: "CerTIK",
    description:
      "We are Audited by Certik. CerTIK is the leading security-focused ranking platform to",
  },
  {
    icon: Scissors,
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
  },
  {
    icon: Repeat,
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 font-primaryRegular">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our <span className="text-yellow-400">Features</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A2333] p-6 rounded-lg hover:bg-[#232D42] transition-colors"
            >
              <div className="w-12 h-12 bg-[#2A3447] rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
