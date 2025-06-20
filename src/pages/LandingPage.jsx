import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [showLogo, setShowLogo] = useState(false);
  const [showPosters, setShowPosters] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const moviePosters = [
    { src: "/posters/arey-yaar.png", alt: "Arey Yaar" },
    { src: "/posters/rover.png", alt: "Rover - The Beginning" },
    { src: "/posters/pinjare-wali.png", alt: "Pinjare Wali" },
    { src: "/posters/last-date.png", alt: "Last Date" },
    { src: "/posters/home-sweet-office.png", alt: "Home Sweet Office" },
    { src: "/posters/panchlait.png", alt: "Panchlait" },
    { src: "/posters/jolly-llb-2.png", alt: "Jolly LLB 2" },
    { src: "/posters/jahaan-chaar-yaar.png", alt: "Jahaan Chaar Yaar" },
    { src: "/posters/thriller-punjabi.png", alt: "Thriller Drama" },
    { src: "/posters/ateet.png", alt: "Ateet" },
  ];

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 500);
    const postersTimer = setTimeout(() => setShowPosters(true), 1500);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(postersTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Top Row Posters */}
      <div
        className={`absolute top-0 left-0 w-full h-1/3 overflow-hidden transition-opacity duration-1000 ${
          showPosters ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "slideLeftToRight 30s linear infinite",
            width: "200%",
          }}
        >
          {[...moviePosters, ...moviePosters].map((poster, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0"
              style={{ width: "00px", marginRight: "8px" }}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{
                  filter: "brightness(0.8) contrast(1.1)",
                  height: "280px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row Posters */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/3 overflow-hidden transition-opacity duration-1000 ${
          showPosters ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "slideRightToLeft 30s linear infinite",
            width: "200%",
          }}
        >
          {[...moviePosters, ...moviePosters].map((poster, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0"
              style={{ width: "200px", marginRight: "8px" }}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{
                  filter: "brightness(0.8) contrast(1.1)",
                  height: "280px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/50" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          className={`transition-all duration-1500 ease-out ${
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="text-center">
            <img
              src="/scj-logo-new.png"
              alt="SCJ Entertainment"
              className="w-80 md:w-96 lg:w-[450px] max-w-[80vw] h-auto mx-auto mb-8"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.4))",
                animation: "logoFloat 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            className="relative px-8 py-3 text-lg font-semibold text-white bg-black/60 hover:bg-blue-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600 hover:border-blue-500 backdrop-blur-sm"
            onClick={() => navigate("/home")}
          >
            Let's Explore
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px);
            filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.4));
          }
          50% {
            transform: translateY(-8px);
            filter: drop-shadow(0 0 60px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 80px rgba(249, 115, 22, 0.6));
          }
        }

        @keyframes slideLeftToRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slideRightToLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
