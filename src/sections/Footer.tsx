"use client";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1D1D2F] to-[#1A1A2E] text-gray-400 text-sm py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo Section */}
        <div>
          <Image src={logo} alt="Логотип компании" height={50} className="mx-auto md:mx-0" />
          <p className="mt-4 text-gray-400 leading-6">
            Улучшаем жизнь и цифровизацию Алматы с любовью и заботой.
          </p>
          <p className="mt-4 text-blue-400 font-semibold hover:underline cursor-pointer">
            <a href="#hero">Узнать больше</a>
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
            Навигация
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                О проекте
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Сервисы
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Модули
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
            Контакты
          </h4>
          <p className="text-gray-400 leading-6">
            <span className="font-semibold">Адрес:</span> г. Алматы пр. Абая 90
          </p>
          <p className="text-gray-400 mt-4">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:sitcenter@almatydc.kz"
              className="hover:text-blue-400 transition duration-300"
            >
              sitcenter@almatydc.kz
            </a>
          </p>
          <p className="text-blue-400 mt-4 font-semibold hover:underline cursor-pointer">
            <a href="#contact-form">Связаться с нами</a>
          </p>
        </div>

        {/* Map Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
            Карта
          </h4>
          <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.112740921332!2d76.94777831509592!3d43.23557467913664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c12f12345b%3A0x123456789abcdef!2sAbay%20Ave%2090%2C%20Almaty%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1698349393001!5m2!1sen!2skz"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
            Мы в соцсетях
          </h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" aria-label="Социальная сеть X" className="hover:scale-125 transition-transform duration-300">
              <SocialX className="h-6 w-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-125 transition-transform duration-300">
              <SocialInsta className="h-6 w-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-125 transition-transform duration-300">
              <SocialLinkedin className="h-6 w-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:scale-125 transition-transform duration-300">
              <SocialPin className="h-6 w-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:scale-125 transition-transform duration-300">
              <SocialYoutube className="h-6 w-6 text-gray-400 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Все права защищены.
      </div>
    </footer>
  );
};
