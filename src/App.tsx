import Hero from "@/components/hero";
import Features from "@/components/features";
import Comparison from "@/components/comparison";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1221] text-white overflow-hidden">
      <Hero />
      <Comparison />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
