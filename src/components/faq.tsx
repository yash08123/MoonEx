import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer:
      "You can get a referral code by signing up and visiting the referral section in your dashboard.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "Can I refer multiple buyers at the same time?",
    answer:
      "Yes, you can refer as many buyers as you want and earn rewards for each transaction they complete!",
  },
];

export default function FAQ() {
  return (
    <section
      className="py-16 px-4 md:py-24 bg-[#0B1221] font-primaryRegular"
      id="faqs"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          <span className="text-yellow-400">FAQs</span>
        </motion.h2>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A2333] p-8 md:p-12 rounded-lg shadow-lg"
        >
          <Accordion type="single" collapsible>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#232F3F] rounded-lg overflow-hidden shadow-md"
                  >
                    <AccordionTrigger className="w-full p-6 flex items-center justify-between text-left text-white">
                      <span className="font-medium text-base md:text-lg">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.3,
                        }}
                        className="px-6 pb-6 text-gray-400 text-sm md:text-base"
                      >
                        {faq.answer || "Answer coming soon!"}
                      </motion.div>
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
