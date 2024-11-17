"use client";
import AcmeLogo from "@/assets/uc-logo.svg";
import QuantamLogo from "@/assets/open-almaty-logo.svg";
import EchoLogo from "@/assets/dchs-logo.svg";
import CelestialLogo from "@/assets/akimat-logo.svg";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    <AcmeLogo key="acme" className="h-12 md:h-16 w-auto" />,
    <QuantamLogo key="quantam" className="h-12 md:h-16 w-19" />,
    <EchoLogo key="echo" className="h-12 md:h-16 w-19" />,
    <CelestialLogo key="celestial" className="h-12 md:h-16 w-19" />,
  ];

  return (
    <div className="py-8 md:py-12 bg-[#1D1D2F]"> {/* Updated background color */}
      <div className="container mx-auto relative">
        {/* Masked scrolling effect */}
        <div
          className="flex overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            className="flex gap-16"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Loop logos for seamless scrolling */}
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`logo_${index}`}
                className="flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
