"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBus,
  faLeaf,
  faCity,
  faUsers,
  faChartLine,
  faRoad,
  faShieldAlt,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

// Import the background image
import backgroundImage from "@/assets/robot-hand-human.png";

const services = [
  {
    icon: faMapMarkerAlt,
    title: "Карта города",
    description: "Сбор и анализ данных о городе для выявления проблем.",
    details: [
      "Инфраструктура",
      "Мониторинг районов",
      "Цифровая инклюзия",
      "Шаговая доступность соц. объектов",
      "Коммуникации",
    ],
  },
  {
    icon: faBus,
    title: "Транспорт",
    description: "Управление и оптимизация транспортной системы города.",
    details: ["Мониторинг транспорта", "Мониторинг транзакции"],
  },
  {
    icon: faLeaf,
    title: "Экология",
    description: "Мониторинг экологического состояния города.",
    details: ["Экологический мониторинг", "Зеленые насаждения"],
  },
  {
    icon: faCity,
    title: "Городские сервисы",
    description: "Оптимизация и автоматизация услуг для городской среды.",
    details: [
      "Предложения инициатив",
      "Встречи акима с населением",
      "Маслихат",
      "Админ маслихат",
      "Проблемные вопросы города",
    ],
  },
  {
    icon: faUsers,
    title: "Социальная сфера",
    description: "Поддержка и развитие социальных услуг.",
    details: [
      "Мониторинг школ",
      "Мониторинг ДДО",
      "Культурные мероприятия",
      "Объекты культуры",
      "Событийный календарь",
      "Кружки и секции",
    ],
  },
  {
    icon: faChartLine,
    title: "Экономика",
    description: "Анализ экономических показателей.",
    details: [
      "СЗПТ",
      "Мониторинг цен",
      "Количество МСБ",
      "Мониторинг курса валют",
      "Мониторинг гос. закупок",
      "Бюджет города",
      "Инвест проекты города",
      "Поддержка предпринимателей",
      "Финансы",
    ],
  },
  {
    icon: faRoad,
    title: "Городская инфраструктура",
    description: "Контроль и поддержка городской инфраструктуры.",
    details: [
      "Инфраструктура",
      "Мониторинг районов",
      "Цифровая инклюзия",
      "Шаговая доступность соц. объектов",
      "Коммуникации",
    ],
  },
  {
    icon: faShieldAlt,
    title: "Чрезвычайные ситуации",
    description: "Построение системы мониторинга и быстрого реагирования.",
    details: [
      "ДЧС",
      "Админка ДЧС",
      "Мониторинг ЧС",
      "Преступность",
      "ДТП",
      "Городские видеокамеры",
    ],
  },
  {
    icon: faLightbulb,
    title: "Программы развития",
    description: "Информирование жителей о важных событиях и изменениях.",
    details: [
      "Оценка цифровизации",
      "Админ оценки цифровизации",
      "Проекты ИКТ",
      "Бюджет народного участия",
      "Стратегия 2050",
      "Эталонный стандарт",
      "Новый Алматы",
    ],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-16 bg-white relative"
    >
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(1.5px)", // Add blur effect
          zIndex: 1,
        }}
      ></div>

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/90 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Text container styled like a card */}
        <div className="max-w-4xl mx-auto mb-10 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
            Основные направления для создания умного города в Алматы:
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Эти направления помогут Алматы стать удобнее и безопаснее для всех
            жителей, повышая уровень жизни и устойчивость города.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300 relative group overflow-hidden hover:bg-gradient-to-tr hover:from-[#001E80] hover:to-[#3A50FF] hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon, Title, and Description */}
              <div className="flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="p-5 bg-gradient-to-tr from-[#001E80] to-[#3A50FF] rounded-full shadow-lg mb-4">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-white text-4xl"
                  />
                </div>
                <h5 className="text-2xl font-bold">{service.title}</h5>
                <p className="text-lg mt-2">{service.description}</p>
              </div>

              {/* Details List */}
              <ul className="absolute inset-0 flex items-center justify-center text-left px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="list-disc text-lg space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
