"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Assets
import product1 from "@/assets/hero1212.png";
import product2 from "@/assets/hero1213.png";
import product3 from "@/assets/hero1214.png";
import product4 from "@/assets/hero1215.png";
import leftHandImage from "@/assets/hand.png";
import rightHandImage from "@/assets/hand2.png";

const contentData = [
  {
    id: 1,
    title: "Визуализация данных города",
    description:
      "Комплексная система сбора, обработки и анализа данных, поступающих от различных источников в режиме реального времени.",
    imageSrc: product1.src,
  },
  {
    id: 2,
    title: "Мониторинг показателей",
    description:
      "Мониторинг ключевых показателей для оценки качества жизни и эффективности услуг.",
    imageSrc: product2.src,
  },
  {
    id: 3,
    title: "Интерактивная карта города",
    description:
      "Предоставляет операторам возможность легко ориентироваться и находить нужную информацию.",
    imageSrc: product3.src,
  },
  {
    id: 4,
    title: "Интеграция городских систем",
    description:
      "Интеграция данных для единой картины состояния городских систем.",
    imageSrc: product4.src,
  },
];

export const ProductShowcase = () => {
  const [activeContent, setActiveContent] = useState(contentData[0]);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleContentChange = (contentId: number) => {
    const selectedContent = contentData.find(
      (content) => content.id === contentId
    );
    if (selectedContent) {
      setActiveContent(selectedContent);
    }
  };

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip relative"
    >
      {/* Motion Images */}
      <motion.img
        src={leftHandImage.src}
        alt="Left Hand"
        className="absolute -left-30 bottom-0 z-0 hidden lg:block object-contain"
        style={{
          height: "400px", // Adjust size for hands
          width: "auto",
          translateY,
        }}
      />
      <motion.img
        src={rightHandImage.src}
        alt="Right Hand"
        className="absolute -right-10 top-0 z-0 hidden lg:block object-contain"
        style={{
          height: "400px", // Adjust size for hands
          width: "auto",
          translateY,
        }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl px-8">
        <div className="bg-white p-10 rounded-lg shadow-xl">
          {/* Top text section */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Интерфейс с расширенными возможностями для работы с данными
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl">
              Современный интерфейс позволяет операторам легко ориентироваться и
              быстро находить необходимую информацию, что ускоряет реакцию на
              события и улучшает рабочий процесс.
            </p>
          </div>
          {/* Buttons and Image section */}
          <div className="flex flex-wrap md:flex-nowrap items-start relative z-10">
            {/* Left Column: Buttons */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 pr-8">
              {contentData.map((content) => (
                <button
                  key={content.id}
                  onClick={() => handleContentChange(content.id)}
                  className={`p-6 text-left border-2 rounded-lg transition-all duration-300 ${
                    activeContent.id === content.id
                      ? "bg-blue-700 text-white border-blue-700"
                      : "bg-white text-gray-800 border-gray-300 hover:border-blue-700"
                  }`}
                >
                  <span className="font-bold text-lg">{content.title} →</span>
                  {activeContent.id === content.id && (
                    <p className="mt-2 text-sm">{content.description}</p>
                  )}
                </button>
              ))}
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-2/3 mt-6 md:mt-0 flex justify-center relative">
              <Image
                src={activeContent.imageSrc}
                alt={activeContent.title}
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
