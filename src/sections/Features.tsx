"use client";
import React from "react";
import robotImage from "@/assets/robosit.png";

const Features = () => {
  return (
    <div
      id="features"
      style={{
        background: "radial-gradient(circle, #1E34A0 0%, #1C212C 100%)",
        padding: "20px 0", // Reduced padding at the top and bottom
        color: "white",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          flexWrap: "nowrap", // Prevent wrapping for alignment
          flexDirection: "row", // Default for larger screens
        }}
      >
        {/* Left Column: Text Content */}
        <div
          style={{
            flex: "1",
            padding: "10px", // Reduced padding around text content
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
              lineHeight: "1.4",
            }}
          >
            Возможности Ситуационного Центра
          </h2>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "15px",
              lineHeight: "1.6",
            }}
          >
            Центр отслеживает в режиме реального времени городские процессы,
            выявляет угрозы и помогает оперативно принимать управленческие
            решения для обеспечения безопасности и устойчивого развития.
          </p>
          <a
            href="https://opendata.smartalmaty.kz/"
            style={{
              backgroundColor: "#0d47a1",
              color: "white",
              padding: "8px 16px", // Reduced button padding
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            Перейти к данным
          </a>
          <div>
            <div style={{ marginBottom: "15px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                01. Анализ и прогнозирование данных
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                Применение аналитических алгоритмов для анализа данных и
                прогнозирования возможных происшествий.
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                02. Визуализация данных
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                Данные визуализируются на интерактивных панелях и картах, что
                облегчает анализ ситуации и позволяет видеть полную картину
                происходящего в городе.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                03. Прозрачность и отчетность
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                Центр предоставляет отчеты и статистику, которые повышают
                прозрачность работы и способствуют доверию граждан к городским
                службам и руководству.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Robot Image */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={robotImage.src}
            alt="Robot"
            style={{
              width: "80%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Media Query for Mobile View */}
      <style jsx>{`
        @media (max-width: 768px) {
          #features > div {
            flex-direction: column !important;
          }
          #features img {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
