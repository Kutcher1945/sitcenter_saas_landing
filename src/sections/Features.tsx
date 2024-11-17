"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBus,
  faLeaf,
  faBuilding,
  faUsers,
  faChartLine,
  faShieldAlt,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faMapMarkerAlt,
    title: "Карта города",
    text: "Слои данных о дорогах, зданиях, инженерных сетях и других аспектах городской инфраструктуры.",
  },
  {
    icon: faBus,
    title: "Транспорт",
    text: "Данные о маршрутах, остановках, транзакциях и мониторинг общественного транспорта.",
  },
  {
    icon: faLeaf,
    title: "Экология",
    text: "Данные о качестве воздуха, зелёных зонах и экологических инициативах.",
  },
  {
    icon: faBuilding,
    title: "Городские сервисы",
    text: "Аналитика по предоставлению сервисов для горожан и улучшению взаимодействия с населением.",
  },
  {
    icon: faUsers,
    title: "Социальная сфера",
    text: "Данные о школах, культурных объектах, кружках и секциях, а также социальных услугах.",
  },
  {
    icon: faChartLine,
    title: "Экономика",
    text: "Мониторинг предпринимательства, курсов валют, бюджетов и государственных закупок.",
  },
  {
    icon: faShieldAlt,
    title: "Чрезвычайные ситуации",
    text: "Интеграция данных систем безопасности, мониторинг ЧС и городской преступности.",
  },
  {
    icon: faLightbulb,
    title: "Программы развития",
    text: "Информация о проектах цифровизации, стратегии города и других программах развития.",
  },
];

const firstColumn = features.slice(0, 3);
const secondColumn = features.slice(3, 6);
const thirdColumn = features.slice(6, 8);

const FeaturesColumn = (props: {
  className?: string;
  features: typeof features;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.features.map(({ text, icon, title }) => (
              <div className="card" key={title}>
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-blue-500 h-10 w-10"
                  />
                  <h5 className="text-lg font-bold tracking-tight leading-5">
                    {title}
                  </h5>
                </div>
                <p className="text-gray-400 leading-6">{text}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Features = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-white text-black-200 py-16"
      id="about"
    >
      <div className="container mx-auto">
        <div className="section-heading text-center">
          <h2 className="section-title mt-5 text-black">Какие данные у нас есть?</h2>
          <p className="section-des mt-5 text-gray-400">
            Данные, собранные из различных источников, помогают улучшать
            городскую инфраструктуру, транспорт, экологию, экономику и многое
            другое.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <FeaturesColumn features={firstColumn} duration={15} />
          <FeaturesColumn
            features={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <FeaturesColumn
            features={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
