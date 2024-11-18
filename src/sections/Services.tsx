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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Основные направления для создания умного города в Алматы:
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Эти направления помогут Алматы стать удобнее и безопаснее для всех
            жителей, повышая уровень жизни и устойчивость города.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-xl rounded-lg p-6 text-left group transition-all duration-300 hover:bg-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg mr-4">
                  <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h5>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Animated Details */}
              <ul
                className="list-disc pl-8 text-gray-800 bg-blue-200 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {service.details.map((detail, i) => (
                  <li key={i} className="text-gray-700 text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
