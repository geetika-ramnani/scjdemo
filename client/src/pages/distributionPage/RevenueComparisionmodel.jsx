import React, { useState, useRef } from "react";

const RevenueModelComparision = () => {
  const [selectedRightsType, setSelectedRightsType] = useState("Exclusive");
  const sliderRef = useRef(null);

  const updateScrollButtons = () => {
    // You can enhance this for scroll behavior if needed.
  };

  return (
    <div className="mt-16 px-4 md:px-8">
      <div className="text-center mb-16 mt-8">
        <h2 className="font-bold mb-6 mt-12" style={{ fontSize: "3rem" }}>
          <span className="text-white">Revenue Model&nbsp;</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Comparison
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
          Choose from multiple revenue models tailored to your content
          distribution strategy
        </p>
      </div>

      {/* Rights Type Toggle */}
      <div className="flex justify-center mb-12 gap-8">
        {["Exclusive", "Non-Exclusive"].map((type) => (
          <button
            key={type}
            className={`px-12 py-4 rounded-full font-bold text-2xl font-sans tracking-wide transition-all duration-300 focus:outline-none shadow-lg ${
              selectedRightsType === type
                ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black shadow-2xl"
                : "bg-white/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105"
            }`}
            style={{
              textShadow:
                selectedRightsType === type
                  ? "0 2px 8px rgba(255,193,7,0.18)"
                  : "0 2px 8px rgba(251,191,36,0.18)",
            }}
            onClick={() => setSelectedRightsType(type)}
          >
            {type} Rights
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Exclusive Rights Section */}
        {selectedRightsType === "Exclusive" && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white"> Rights&nbsp;</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Models
                </span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Maximize your content value with exclusive distribution rights
                across different platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Outright",
                  description:
                    "Complete ownership transfer with one-time payment for all distribution rights",
                  icon: "🎯",
                  color: "from-pink-400 via-rose-400 to-red-400",
                },
                {
                  title: "Digital Sales",
                  description:
                    "Exclusive digital distribution rights across streaming platforms and online stores",
                  icon: "💻",
                  color: "from-blue-400 via-indigo-400 to-purple-400",
                },
                {
                  title: "Satellite Sales",
                  description:
                    "Exclusive satellite and cable television distribution rights",
                  icon: "📡",
                  color: "from-green-400 via-emerald-400 to-teal-400",
                },
                {
                  title: "Theatrical",
                  description:
                    "Exclusive theatrical release rights for cinema distribution",
                  icon: "🎬",
                  color: "from-yellow-400 via-orange-400 to-red-400",
                },
                {
                  title: "Inflight Entertainment",
                  description:
                    "Exclusive inflight entertainment rights for airlines",
                  icon: "✈️",
                  color: "from-purple-400 via-violet-400 to-indigo-400",
                },
              ].map((model, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 hover:border-yellow-400 hover:ring-4 hover:ring-yellow-300/30"
                  style={{ position: "relative" }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${model.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {model.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {model.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-orange-400/0 to-red-400/0 group-hover:from-yellow-400/10 group-hover:via-orange-400/10 group-hover:to-red-400/10 rounded-xl transition-all duration-500 ease-out group-hover:shadow-[0_10px_25px_rgba(255,215,0,0.2)]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Non-Exclusive Rights Section */}
        {selectedRightsType === "Non-Exclusive" && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Non-Exclusive Rights&nbsp;</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Models
                </span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Choose from various revenue models to maximize your content
                monetization
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

              <div className="overflow-x-auto rounded-xl bg-white/5 border border-white/10">
                <div
                  ref={sliderRef}
                  className="flex gap-4 md:gap-6 p-4 overflow-x-auto scrollbar-hide flex-nowrap"
                  style={{ scrollBehavior: "smooth", minHeight: "200px" }}
                  onScroll={updateScrollButtons}
                >
                  {[
                    {
                      title: "AVOD",
                      description:
                        "Ad-supported video on demand with revenue sharing from advertising",
                      icon: "📺",
                      color: "from-green-400 via-emerald-400 to-teal-400",
                    },
                    {
                      title: "TVOD",
                      description:
                        "Transactional video on demand with pay-per-view or purchase options",
                      icon: "🎬",
                      color: "from-blue-400 via-indigo-400 to-purple-400",
                    },
                    {
                      title: "Pay Per View",
                      description:
                        "Individual payment for each view with immediate revenue generation",
                      icon: "👁️",
                      color: "from-purple-400 via-violet-400 to-indigo-400",
                    },
                    {
                      title: "Pay Per Watch",
                      description:
                        "Payment based on actual watch time and engagement metrics",
                      icon: "⏱️",
                      color: "from-pink-400 via-rose-400 to-red-400",
                    },
                    {
                      title: "Flat Fees",
                      description:
                        "One-time fixed payment for content licensing and distribution rights",
                      icon: "💰",
                      color: "from-yellow-400 via-orange-400 to-red-400",
                    },
                    {
                      title: "MG + Revenue",
                      description:
                        "Minimum guarantee upfront payment plus ongoing revenue sharing",
                      icon: "📈",
                      color: "from-cyan-400 via-blue-400 to-indigo-400",
                    },
                  ].map((model, index) => (
                    <div
                      key={`${model.title}-${index}`}
                      className="slider-card flex-shrink-0 w-56 md:w-64 h-48 group cursor-pointer"
                      style={{ minWidth: "14rem" }}
                    >
                      <div
                        className={`relative w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105`}
                      >
                        <div className="flex flex-col items-center text-center h-full justify-center">
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${model.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {model.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {model.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {model.description}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-orange-400/0 to-red-400/0 group-hover:from-yellow-400/10 group-hover:via-orange-400/10 group-hover:to-red-400/10 rounded-xl transition-all duration-500 ease-out group-hover:shadow-[0_10px_25px_rgba(255,215,0,0.2)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Hide Scrollbar */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueModelComparision;
