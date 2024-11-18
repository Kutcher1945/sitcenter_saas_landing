import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ситуационный Центр Алматы",
  description:
    "Ситуационный центр Алматы — это инновационный инструмент мониторинга и анализа городских процессов, который помогает улучшить безопасность и устойчивость города.",
  keywords: [
    "Ситуационный центр",
    "Алматы",
    "Городские процессы",
    "Мониторинг",
    "Анализ данных",
    "Безопасность города",
    "Инфраструктура",
    "Прозрачность",
    "Устойчивое развитие",
    "Технологии города",
  ],
  openGraph: {
    title: "Ситуационный Центр Алматы",
    description:
      "Ситуационный центр Алматы отслеживает в реальном времени городские процессы, выявляет угрозы и помогает принимать оперативные управленческие решения.",
    images: [
      {
        url: "/opengraph-image.png", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Ситуационный Центр Алматы",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {/* <header className="bg-[#1E34A0] text-white py-4">
          <div className="container mx-auto px-6">
            <h1 className="text-2xl font-bold">
              Ситуационный Центр Алматы
            </h1>
            <p className="mt-2 text-sm">
              Инструмент мониторинга и анализа городских процессов для
              повышения безопасности и устойчивости города.
            </p>
          </div>
        </header> */}
        <main>{children}</main>
        {/* <footer className="bg-[#1E34A0] text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm">
              © 2024 Ситуационный Центр Алматы. Все права защищены.
            </p>
            <p className="text-sm mt-2">
              Свяжитесь с нами: <a href="mailto:contact@smartalmaty.kz" className="text-blue-300">contact@smartalmaty.kz</a>
            </p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
