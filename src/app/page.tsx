import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Services } from "@/sections/Services";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* Features Section */}
      <Features />
      {/* Product Showcase Section */}
      <ProductShowcase />
      {/* Call To Action Section */}
      <CallToAction />
      {/* Logo Ticker Section */}
      <LogoTicker />

      {/* Footer */}
      <Footer />
    </div>
  );
}
