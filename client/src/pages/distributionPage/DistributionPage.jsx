import React from "react";

import AVODRevenueCalculator from "./AVODRevenueCalculator";
import TVODRevenueCalculator from "./TVODRevenueCalculator";
import ContentPerformanceDashboard from "./ContentPerformanceDashboard";
import ContentTypeRevenueChart from "./ContentTypeRevenueChart";
import GeoDistributionChart from "./GeoDistributionChart";
import CPMRevenueDashboard from "./CPMRevenue/CPMRevenueDashboard";

const DistributionPage = () => {
  const [contractDuration, setContractDuration] = React.useState(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
            <span className="text-white">Our Distribution&nbsp;</span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We offer comprehensive distribution solutions tailored to maximize
            your content's reach and revenue potential.
          </p>
        </div>

        {/* Distribution Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "50+", label: "Content Titles" },
            { number: "25+", label: "Platform Partners" },
            { number: "15+", label: "Countries" },
            { number: "100M+", label: "Total Views" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Content Acquisition */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Content Acquisition
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Exclusive Rights Acquisition",
                "Non-Exclusive Licensing",
                "Territory-Specific Rights",
                "Multi-Platform Syndication",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Distribution Models */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Distribution Models
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "AVOD Revenue Share",
                "TVOD Pay-Per-View",
                "Minimum Guarantee (MG)",
                "Outright Purchase",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-orange-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Platform Partnerships */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Platform Partnerships
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Major OTT Platforms",
                "Satellite TV Networks",
                "IPTV Services",
                "Regional Broadcasters",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-yellow-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-red-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Rights Management Section */}
        <div className="mt-24">
          {/* Rights Management Header */}
          <div className="text-center mb-16 mt-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
              <span className="text-white">Rights&nbsp;</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Management
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Customize your distribution strategy with flexible rights options
              tailored to your content and business goals.
            </p>
          </div>

          {/* Rights Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Available Rights Types
            </h3>

            {/* Rights Type Cards in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Exclusive Rights",
                  description:
                    "Grant a platform exclusive rights to your content in specified territories for a premium fee.",
                  icon: "🎯",
                },
                {
                  title: "Non-exclusive Rights",
                  description:
                    "Distribute your content across multiple platforms simultaneously to maximize reach.",
                  icon: "🌐",
                },
                {
                  title: "Territory-based Rights",
                  description:
                    "Segment your distribution by geographic regions to optimize for local markets.",
                  icon: "🗺️",
                },
                {
                  title: "Duration-based Rights",
                  description:
                    "Set specific timeframes for distribution rights to maintain flexibility.",
                  icon: "⏳",
                },
              ].map((right, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{right.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {right.title}
                      </h4>
                      <p className="text-gray-300">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Duration Slider */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contract Duration
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Rights Duration</span>
                  <span>
                    {contractDuration}{" "}
                    {contractDuration === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <div className="relative w-full">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={contractDuration}
                    onChange={(e) =>
                      setContractDuration(parseInt(e.target.value))
                    }
                    className="w-full h-4 bg-white/10 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        #f59e0b 0%, 
                        #fb923c ${(contractDuration / 5) * 100}%, 
                        rgba(255, 255, 255, 0.1) ${
                          (contractDuration / 5) * 100
                        }%, 
                        rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #f59e0b;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                    }
                    input[type="range"]::-moz-range-thumb {
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #f59e0b;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                    }
                  `}</style>
                </div>
              </div>

              <div className="flex justify-between px-2 mt-4">
                {[1, 2, 3, 4, 5].map((year) => (
                  <div
                    key={year}
                    className="text-center cursor-pointer"
                    onClick={() => setContractDuration(year)}
                  >
                    <div
                      className={`text-sm ${
                        year <= contractDuration
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      Year {year}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  Explore Rights Options
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model Comparison Section */}
        <div className="mt-16">
          <div className="text-center mb-16 mt-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
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

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AVOD",
                  subtitle: "Ad-supported video on demand with revenue sharing",
                  share: "50-70% Revenue Share",
                  icon: "📺",
                  color: "from-green-400 via-emerald-400 to-teal-400",
                  features: [
                    "Ad revenue sharing",
                    "No upfront cost",
                    "Performance based",
                    "Flexible terms",
                  ],
                },
                {
                  title: "TVOD",
                  subtitle: "Transactional video on demand per view/purchase",
                  share: "60-80% Revenue Share",
                  icon: "🎬",
                  color: "from-blue-400 via-indigo-400 to-purple-400",
                  features: [
                    "Pay per view",
                    "Purchase options",
                    "Higher margins",
                    "Direct monetization",
                  ],
                },
                {
                  title: "Minimum Guarantee",
                  subtitle: "Upfront payment plus revenue share",
                  share: "Fixed + 40-60% Share",
                  icon: "💰",
                  color: "from-yellow-400 via-orange-400 to-red-400",
                  features: [
                    "Upfront payment",
                    "Revenue sharing",
                    "Risk sharing",
                    "Long-term value",
                  ],
                },
                {
                  title: "Outright",
                  subtitle: "One-time payment for all rights",
                  share: "Negotiated Lump Sum",
                  icon: "🎯",
                  color: "from-pink-400 via-rose-400 to-red-400",
                  features: [
                    "Full rights transfer",
                    "Single payment",
                    "No revenue sharing",
                    "Complete ownership",
                  ],
                },
              ].map((model, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${model.color} text-2xl`}
                    >
                      {model.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {model.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 h-12">
                    {model.subtitle}
                  </p>

                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${model.color} bg-clip-text text-transparent mb-4`}
                  >
                    {model.share}
                  </div>

                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${model.color} mr-2`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AVODRevenueCalculator />
            <TVODRevenueCalculator />
          </section>

          <section className="space-y-8">
            <ContentPerformanceDashboard />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContentTypeRevenueChart />
              <GeoDistributionChart />
            </div>
          </section>

          <section>
            <CPMRevenueDashboard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DistributionPage;
