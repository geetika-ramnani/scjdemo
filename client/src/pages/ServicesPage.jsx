"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const ServicesPage = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const navigate = useNavigate();

  const services = [
   
    {
      title: "Marketing & PR",
      subtitle: "Strategic Brand Amplification",
      description:
        "Transform your brand presence with our comprehensive marketing and public relations strategies. We build meaningful connections between your brand and your target audience.",
      offerings: [
        "Integrated Marketing Campaign Development",
        "Public Relations & Media Outreach",
        "Influencer Partnership Management",
        "Crisis Communication & Reputation Management",
        "Event Marketing & Experiential Campaigns",
        "Digital Marketing & SEO Optimization",
      ],
      image: "../public/posters/marketing.jpg",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Distribution",
      subtitle: "Global Reach Solutions",
      description:
        "Maximize your content's reach with our comprehensive distribution network. We ensure your message reaches the right audience at the right time across multiple channels.",
      offerings: [
        "Multi-Platform Distribution Strategy",
        "Content Licensing & Rights Management",
        "International Market Expansion",
        "Digital Platform Optimization",
        "Analytics & Performance Tracking",
        "Revenue Optimization & Monetization",
      ],
      image: "../public/posters/distribution.jpg",
      gradient: "from-green-500 to-teal-500",
      link: "src/pages/DistributionPage.jsx",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // More precise section detection
      const sectionIndex = Math.round(scrollPosition / windowHeight)
      setCurrentSection(sectionIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black">
      {/* Hero Section */}
     {/* Hero Section */}
     <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="text-center flex-1 flex flex-col justify-center max-w-10xl mx-auto px-4">
          <h1 className="text-10xl md:text-[20rem] lg:text-[20rem] font-bold mb-20">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-[4em]">
              Our&nbsp;
            </span>
            <span className="text-white text-[4em]">Services</span>
          </h1>
          <p className="text-gray-100 text-2xl md:text-2xl lg:text-4xl max-w-5xl mx-auto leading-relaxed mb-8">
            Comprehensive entertainment solutions designed to elevate your brand
          </p>
          <p className="text-gray-200 text-2xl md:text-3xl lg:text-3xl max-w-4xl mx-auto leading-relaxed mb-6">
            From strategic marketing campaigns to global distribution networks
          </p>
          <p className="text-gray-300 text-xl md:text-2xl lg:text-2.5xl max-w-3xl mx-auto leading-relaxed">
            We transform your vision into reality with proven expertise and innovative approaches
          </p>
        </div>

        {/* Scroll Animation at Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
          </div>
          <p className="text-white/80 text-lg mt-3">Scroll Down</p>
        </div>
      </section>
      
      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={index} className="h-screen flex items-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side - Content */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                currentSection === index + 1 ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-60"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{service.title}</h2>
                <h3
                  className={`text-2xl md:text-3xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}
                >
                  {service.subtitle}
                </h3>
                <p className="text-gray-100 text-lg leading-relaxed mb-8 font-medium">{service.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">What We Offer:</h4>
                <ul className="space-y-3">
                  {service.offerings.map((offering, offeringIndex) => (
                    <li
                      key={offeringIndex}
                      className={`flex items-center text-gray-100 transform transition-all duration-700 ease-out ${
                        currentSection === index + 1 ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-40"
                      }`}
                      style={{ transitionDelay: `${offeringIndex * 150}ms` }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} mr-4 flex-shrink-0 shadow-lg`}
                      ></div>
                      <span className="text-base font-medium">{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Button */}
              <button
                className={`group relative px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  currentSection === index + 1 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-60"
                }`}
                style={{ transitionDelay: "800ms" }}
                onClick={() => {
                  if (service.title === "Distribution") {
                    navigate("/distribution");
                  }
                }}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Right Side - Image with Effects */}
            <div
              className={`relative transform transition-all duration-1000 ease-out ${
                currentSection === index + 1
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-10 opacity-60 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Enhanced Animated Border */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse`}
                ></div>

                {/* Image Container */}
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-110"
                  />

                  {/* Enhanced Overlay Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>

                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} animate-ping shadow-lg`}
                    ></div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} opacity-70 animate-pulse shadow-lg`}
                    ></div>
                  </div>
                  <div className="absolute top-1/2 right-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} opacity-80 animate-bounce shadow-md`}
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Service Number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-black to-gray-800 border-2 border-white/30 flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Section Indicator - Right Side */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col space-y-3">
              {services.map((serviceItem, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-3 h-12 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 ${
                    currentSection === dotIndex + 1
                      ? `bg-gradient-to-b ${serviceItem.gradient} shadow-lg opacity-100`
                      : "bg-white/30 hover:bg-white/50 opacity-60"
                  }`}
                  onClick={() => {
                    window.scrollTo({
                      top: (dotIndex + 1) * window.innerHeight,
                      behavior: "smooth",
                    })
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default ServicesPage
