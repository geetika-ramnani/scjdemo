
import React, { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom";

const Navbar = ({ onBackToSlider }) => {
    const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "Hindi" },
    { code: "TA", name: "Tamil" },
  ]

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.code)
    setIsLanguageOpen(false)
  }

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
        setIsLanguageOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-md border-b border-white/10 z-[1000] transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 188, 212, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 152, 0, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer group" onClick={onBackToSlider}>
            <img
              src="../public/scj-logo-new.png"
              alt="SCJ Entertainment"
              className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["home", "services", "projects", "careers", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("Us", " Us")}
                </button>
              ))}
            </div>
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <span>{selectedLanguage}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:bg-white/10"
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/signin")}
              className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40"
            >
              Sign up
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col space-y-1">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm rounded-lg mt-2 border border-white/20">
            {["home", "services", "projects", "careers", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("Us", " Us")}
              </button>
            ))}

            <div className="border-t border-white/20 pt-3 mt-3 px-4">
              <div className="text-sm font-medium text-gray-400 mb-2">Language</div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all duration-300 ${
                    selectedLanguage === language.code
                      ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent bg-yellow-400/20"
                      : "text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10"
                  }`}
                >
                  {language.name}
                </button>
              ))}

              <button
                onClick={() => navigate("/signin")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300 border border-white/20 mb-2"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="block w-full text-left px-4 py-3 text-base font-medium bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black rounded-md transition-all duration-300 hover:scale-105"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)}></div>}
    </nav>
  )
}

export default Navbar;
