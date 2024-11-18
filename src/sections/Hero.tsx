"use client";
import heroVideo from "@/assets/hero-video.mp4"; // Import the video file
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const statsAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section className="relative pb-20 md:pb-10 overflow-hidden" id="hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-screen h-[110vh] object-cover -z-10"
      >
        <source src={heroVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Darker Gradient Overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10"></div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1D1D2F]/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Image
              src={Logo}
              alt="Логотип Ситуационного Центра"
              height={250}
              width={250}
              className="object-contain"
            />
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <nav className="hidden md:flex gap-6 text-white items-center">
              <button
                className="hover:text-gray-300 transition"
                onClick={() => handleScrollToSection("hero")}
              >
                Главная
              </button>
              <button
                className="hover:text-gray-300 transition"
                onClick={() => handleScrollToSection("services")}
              >
                Сервисы
              </button>
              <button
                className="hover:text-gray-300 transition"
                onClick={() => handleScrollToSection("features")}
              >
                О проекте
              </button>
              <button
                className="hover:text-gray-300 transition"
                onClick={() => handleScrollToSection("modules")}
              >
                Модули
              </button>
              <button
                className="hover:text-gray-300 transition"
                onClick={() => handleScrollToSection("contacts")}
              >
                Контакты
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-700 transition">
                РУС
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center text-white">
          <button
            className="absolute top-4 right-4 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <nav className="flex flex-col gap-8 text-center">
            <button
              className="text-xl font-semibold hover:text-gray-300"
              onClick={() => handleScrollToSection("hero")}
            >
              Главная
            </button>
            <button
              className="text-xl font-semibold hover:text-gray-300"
              onClick={() => handleScrollToSection("services")}
            >
              Сервисы
            </button>
            <button
              className="text-xl font-semibold hover:text-gray-300"
              onClick={() => handleScrollToSection("features")}
            >
              О проекте
            </button>
            <button
              className="text-xl font-semibold hover:text-gray-300"
              onClick={() => handleScrollToSection("modules")}
            >
              Модули
            </button>
            <button
              className="text-xl font-semibold hover:text-gray-300"
              onClick={() => handleScrollToSection("contacts")}
            >
              Контакты
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition">
              РУС
            </button>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-white px-4">
        <motion.div
          className="md:flex items-center"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          <div className="md:w-[50%] pt-20 pb-20">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mt-20"
              initial="hidden"
              animate="visible"
              variants={textAnimation}
            >
              Ситуационный Центр <br />
              активный участник в цифровизации Алматы
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mt-6 leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={textAnimation}
            >
              Используйте инновационные данные и аналитические решения для
              устойчивого развития города и улучшения жизни его жителей.
            </motion.p>
            <motion.div
              className="flex gap-4 items-center mt-8"
              initial="hidden"
              animate="visible"
              variants={textAnimation}
            >
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                onClick={() => window.location.href = "https://opendata.smartalmaty.kz/"}
              >
                Перейти на OpenData
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          variants={statsAnimation}
          viewport={{ once: true }}
        >
          <motion.div variants={statsAnimation}>
            <p className="text-4xl font-bold">70</p>
            <p className="text-lg text-gray-200">ГИС-слоев данных городских объектов</p>
          </motion.div>
          <motion.div variants={statsAnimation}>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-lg text-gray-200">информационных модулей и дата-аналитических модулей</p>
          </motion.div>
          <motion.div variants={statsAnimation}>
            <p className="text-4xl font-bold">50</p>
            <p className="text-lg text-gray-200">интеграции и сбор данных</p>
          </motion.div>
          <motion.div variants={statsAnimation}>
            <p className="text-4xl font-bold">100</p>
            <p className="text-lg text-gray-200">индикаторов города</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
