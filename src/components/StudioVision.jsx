import { useState, useEffect } from "react"

const StudioVision = () => {
  // Optional fade-in on mount
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 px-6 bg-slate-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Our Studio</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
              <p>
                <span className="text-orange-400 font-semibold">SCJ</span> isn't just a name. It's a{" "}
                <span className="text-white font-semibold">movement</span> — blending cinema, music, and future tech to
                create meaningful, soul-stirring entertainment.
              </p>

              <p>
                We believe every frame tells a story, every note carries emotion, and every pixel holds the power to{" "}
                <span className="text-orange-400 font-semibold">transform lives</span>. Our mission is to push the
                boundaries of storytelling through innovative technology and timeless human connection.
              </p>

              <p>
                From <span className="text-blue-400 font-semibold">AI-powered scriptwriting</span> to{" "}
                <span className="text-purple-400 font-semibold">immersive AR experiences</span>, we're not just making
                content — we're crafting the future of entertainment.
              </p>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 hover:bg-slate-800 transition-all duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">15+ Projects Delivered</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 hover:bg-slate-800 transition-all duration-300">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white font-semibold">50M+ Views Generated</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 hover:bg-slate-800 transition-all duration-300">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-white font-semibold">Award-Winning Team</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 via-red-600 to-red-800 rounded-3xl p-16 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                {/* Main Cinema Icon */}
                <div className="text-8xl animate-pulse opacity-80 z-10">🎬</div>

                {/* Floating Icons */}
                <div className="absolute top-12 left-12 w-16 h-16 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
                  <span className="text-3xl">🎭</span>
                </div>

                <div className="absolute top-20 right-16 w-14 h-14 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce delay-300">
                  <span className="text-2xl">🎵</span>
                </div>

                <div className="absolute bottom-32 left-20 w-18 h-18 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-4xl">🎥</span>
                </div>

                <div className="absolute bottom-16 right-12 w-16 h-16 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce delay-500">
                  <span className="text-3xl">⭐</span>
                </div>

                <div className="absolute top-1/2 right-8 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse delay-700">
                  <span className="text-2xl">🎨</span>
                </div>

                <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce delay-1000">
                  <span className="text-xl">🎪</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-red-700 rounded-3xl blur-2xl scale-105 opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioVision
