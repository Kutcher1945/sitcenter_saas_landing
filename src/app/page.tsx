"use client";

import React, { useState } from "react";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import Features from "@/sections/Features";
import { Services } from "@/sections/Services";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { ChatButton } from "@/sections/ChatButton";
import { ChatComponent } from "@/components/ChatComponent";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
      <ChatButton onToggle={() => setIsChatOpen((prev) => !prev)} />
      {isChatOpen && <ChatComponent onClose={() => setIsChatOpen(false)} />}
      {/* Footer */}
      <Footer />
    </div>
  );
}
