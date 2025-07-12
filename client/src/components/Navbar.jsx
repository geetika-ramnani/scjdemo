import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import FetchingDots from "./FetchingDots";

// redux related imports
import { useSelector, useDispatch } from "react-redux";
import { useGetUserDetailsQuery } from "../../services/auth/authService";
import { setCredentials } from "../../features/auth/authSlice";

// function entry point
const Navbar = ({
  onBackToSlider,
  onNavigateToSignIn,
  onNavigateToSignUp,
  onNavigateToPage,
}) => {
  const navigate = useNavigate();

  // ui states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavigation = (page) => {
    onNavigateToPage(page);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigateToPage("home");
  };

  const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "Hindi" },
    { code: "TA", name: "Tamil" },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.code);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false);
          setIsLanguageOpen(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  // redux auth.state and authApi
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    pollingInterval: 900000, // perform refetch after some duration (in milliseconds)
  });

  // modifying redux state.userInfo
  useEffect(() => {
    if (data) dispatch(setCredentials(data.user));
  }, [data, dispatch]);
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

      <div className="flex items-center h-16 relative z-10">
        {/* Logo - now outside the centered container */}
        <div
          className="flex-shrink-0 cursor-pointer group pl-20 pr-20"
          onClick={handleLogoClick}
        >
          <img
            src="/scj-logo-new.png"
            alt="SCJ Entertainment"
            className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 group-hover:scale-105"
          />
        </div>
        {/* Centered content */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation - Organized in Groups */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-1">
                  {/* Main Navigation Group */}
                  <div className="flex items-center space-x-1 mr-6">
                    <button
                      onClick={() => navigate("/home")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => navigate("/services")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => navigate("/projects")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Projects
                    </button>
                  </div>

                  {/* Business Navigation Group */}
                  <div className="flex items-center space-x-0.6 mr-6">
                    <button
                      onClick={() => navigate("/talent")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Talent
                    </button>
                  </div>

                  {/* Contact Navigation Group */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => navigate("/career")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Careers
                    </button>
                    <button
                      onClick={() => navigate("/contact")}
                      className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side buttons */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center space-x-1 text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20"
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

                {/* Auth Buttons */}
                <div className="flex items-center space-x-10">
                  {isFetching ? (
                    <FetchingDots />
                  ) : userInfo ? (
                    <DropDown />
                  ) : (
                    <>
                      <button
                        onClick={() => navigate("/signin")}
                        className="text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20"
                      >
                        Sign in
                      </button>
                      <button
                        onClick={() => navigate("/signup")}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40"
                      >
                        Sign up
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-all duration-300"
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="flex flex-col space-y-1">
                    <span
                      className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                    ></span>
                    <span
                      className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                      className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm rounded-lg mt-2 border border-white/20">
            {/* Main Navigation */}
            <div className="border-b border-white/10 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                Main
              </div>
              <button
                onClick={() => handleNavigation("home")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("services")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("projects")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Projects
              </button>
            </div>

            {/* Business Navigation */}
            <div className="border-b border-white/10 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                Business
              </div>
              <button
                onClick={() => handleNavigation("distribution")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Distribution Portfolio
              </button>
              <button
                onClick={() => handleNavigation("talent")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Talent Management
              </button>
            </div>

            {/* Contact Navigation */}
            <div className="border-b border-white/10 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                Connect
              </div>
              <button
                onClick={() => navigate("/career")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Careers
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Language & Auth */}
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                Account
              </div>

              {/* Mobile Language Selector */}
              <div className="px-4 py-2 mb-2">
                <div className="text-sm font-medium text-gray-400 mb-2">
                  Language
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className={`px-3 py-2 text-sm rounded transition-all duration-300 ${
                        selectedLanguage === language.code
                          ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent bg-yellow-400/20"
                          : "text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10"
                      }`}
                    >
                      {language.code}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={onNavigateToSignIn}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent hover:bg-white/10 rounded-md transition-all duration-300 border border-white/20 mb-2"
              >
                Sign in
              </button>
              <button
                onClick={onNavigateToSignUp}
                className="block w-full text-left px-4 py-3 text-base font-medium bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black rounded-md transition-all duration-300 hover:scale-105"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
