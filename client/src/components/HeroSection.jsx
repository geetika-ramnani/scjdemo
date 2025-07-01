import { useState, useEffect } from "react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/25 via-purple-900/15 to-transparent" />
        <div className="absolute bottom-0 right-0 w-2/5 h-2/3 bg-gradient-to-tl from-purple-800/20 via-purple-900/10 to-transparent" />
        <div className="absolute top-1/4 right-0 w-1/4 h-1/2 bg-gradient-to-l from-purple-700/15 to-transparent" />

        {/* Grid SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1920 1080">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="0" x2="1920" y2="1080" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="1" />
          <line x1="0" y1="200" x2="1920" y2="1280" stroke="rgba(100, 116, 139, 0.08)" strokeWidth="1" />
        </svg>

        {/* Dots */}
        <div className="absolute top-48 left-96 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60"></div>
        <div className="absolute top-96 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-purple-500 rounded-full opacity-45"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-35"></div>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-7xl mx-auto transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-bold mb-6 leading-tight tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
            We Create
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold">
            Emotions in Frames
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          From short films to soulful music – SCJ  Entertainment brings stories to life with{" "}
          <span className="text-cyan-400 font-medium">cinematic excellence</span> and{" "}
          <span className="text-cyan-400 font-medium">cutting-edge technology</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto min-w-[220px]">
            <span className="relative z-10 flex items-center justify-center gap-2">🎬 Watch Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          <button className="group bg-transparent border-2 border-gray-500 text-gray-300 font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:border-gray-300 hover:text-white hover:scale-105 w-full sm:w-auto min-w-[220px]">
            <span className="flex items-center justify-center gap-2">💼 Collaborate with Us</span>
          </button>
        </div>
      </div>

      {/* Cursor Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2 group-hover:border-white/50 transition-colors duration-300">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse group-hover:bg-white/70 transition-colors duration-300"></div>
          </div>
          <div className="absolute inset-0 w-8 h-12 border-2 border-white/0 rounded-full group-hover:border-white/20 group-hover:shadow-sm group-hover:shadow-white/10 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
