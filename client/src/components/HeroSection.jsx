"use client"

import { useState, useEffect } from "react"

const movieData = [
  {
    id: 1,
    title: "Neon Dreams",
    genre: "Sci-Fi Thriller",
    year: "2024",
    duration: "2h 15m",
    rating: "8.9",
    description:
      "In a dystopian future where memories can be extracted and sold, a rogue detective discovers a conspiracy that threatens reality itself.",
    director: "Alex Chen",
    cast: ["Emma Stone", "Oscar Isaac", "Mahershala Ali"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop",
    tagline: "Reality is just another memory to be sold",
  },
  {
    id: 2,
    title: "The Last Symphony",
    genre: "Drama",
    year: "2024",
    duration: "1h 58m",
    rating: "9.2",
    description:
      "A legendary composer's final masterpiece becomes the center of a mystery that spans generations and reveals hidden secrets.",
    director: "Sofia Martinez",
    cast: ["Cate Blanchett", "Adam Driver", "Lupita Nyong'o"],
    poster: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop",
    tagline: "Every note tells a story. Every story hides a secret.",
  },
  {
    id: 3,
    title: "Quantum Heist",
    genre: "Action",
    year: "2024",
    duration: "2h 32m",
    rating: "8.7",
    description:
      "A team of quantum physicists plan the impossible heist across multiple dimensions, navigating parallel realities.",
    director: "Jordan Kim",
    cast: ["Ryan Gosling", "Zendaya", "John Boyega"],
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop",
    tagline: "Steal from every reality. Escape to none.",
  },
  {
    id: 4,
    title: "Midnight in Tokyo",
    genre: "Romance",
    year: "2024",
    duration: "1h 47m",
    rating: "8.4",
    description:
      "Two strangers meet during a blackout in Tokyo and spend one magical night discovering love and connection.",
    director: "Yuki Tanaka",
    cast: ["Timothée Chalamet", "Anya Taylor-Joy", "Ken Watanabe"],
    poster: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop",
    tagline: "In darkness, we find light. In strangers, we find ourselves.",
  },
  {
    id: 5,
    title: "The Void Walker",
    genre: "Fantasy",
    year: "2024",
    duration: "2h 45m",
    rating: "9.1",
    description:
      "An ancient guardian awakens to find the barriers between worlds collapsing and must master forgotten powers.",
    director: "Marcus Thompson",
    cast: ["Lupita Nyong'o", "Michael B. Jordan", "Tilda Swinton"],
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    tagline: "When worlds collide, only one can stand between chaos and order.",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movieData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentMovie = movieData[currentSlide]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movieData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movieData.length) % movieData.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Movie Poster - More Prominent */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={currentMovie.poster || "/placeholder.svg"}
          alt={currentMovie.title}
          className="object-cover transition-all duration-1000 ease-in-out w-full h-full absolute inset-0"
          style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
        />
        {/* Lighter Overlay Layers - Let Background Shine */}
        {/* More Focused Overlay - Smaller Area */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Focused overlay only on bottom-left corner for text readability */}
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Particles with varied animations */}
       

        {/* Subtle light rays */}
        <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-white/20 to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-cyan-400/30 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Movie Details Overlay - Bottom Left Position */}
      {/* Movie Details Overlay - Enhanced Size */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <div className="px-8 lg:px-16 pb-24">
          <div
            className={`max-w-4xl transition-all duration-2000 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            {/* Movie Meta Information */}
            {/* Movie Meta Information - Larger */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl shadow-red-500/30">
                  {currentMovie.genre}
                </span>
                <div className="flex items-center gap-3 text-white/90 text-lg font-medium">
                  <span className="text-xl font-bold">{currentMovie.year}</span>
                  <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></span>
                  <span className="text-xl font-bold">{currentMovie.duration}</span>
                  <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></span>
                  <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-yellow-400 text-xl animate-pulse">★</span>
                    <span className="text-white font-bold text-xl">{currentMovie.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Title */}
            {/* Movie Title - Much Larger */}
            <div className="mb-4.5">
              <h1 className="font-extrabold leading-tight tracking-tight mb-4 transform hover:scale-105 transition-transform duration-500">
                <span className="bg-gradient-to-r sm:text-7xl sm:text-1xl from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  {currentMovie.title}
                </span>
              </h1>
              {/* Tagline */}
              {/* Tagline - Larger */}
              <p className="text-xl sm:text-1xl text-cyan-300 font-light italic leading-relaxed drop-shadow-lg">
                "{currentMovie.tagline}"
              </p>
            </div>

            {/* Movie Description */}
            {/* Movie Description - Larger */}
            <div className="mb-6">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light max-w-3xl drop-shadow-md">
                {currentMovie.description}
              </p>
            </div>

            {/* Credits */}
            {/* Credits - Larger */}
            <div className="mb-8 space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-gray-300 text-lg">
                <span className="text-white font-bold text-xl">Directed by</span>
                <span className="text-cyan-400 font-semibold text-xl hover:text-cyan-300 transition-colors duration-300">
                  {currentMovie.director}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-gray-300 text-lg">
                <span className="text-white font-bold text-xl">Starring</span>
                <span className="text-gray-200 text-xl">{currentMovie.cast.join(" • ")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons - Larger and Enhanced */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white font-bold px-5 py-2.5 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 min-w-[120px] flex items-center justify-center gap-2" style={{ borderRadius: '9999px' }}>
                <svg className="w-4 h-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="relative z-10">Watch Trailer</span>
              </button>
              <button className="group bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-bold px-5 py-2.5 rounded-full text-base transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:scale-105 hover:shadow-md min-w-[120px] flex items-center justify-center gap-2" style={{ borderRadius: '9999px' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>More Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    

      {/* Side Navigation Arrows */}
      {/* Enhanced Side Navigation Arrows */}
      {/* Side Navigation Arrows - Medium Size, Always Visible */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-all duration-300 hover:scale-125"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-all duration-300 hover:scale-125"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Movie Counter */}
      {/* Enhanced Movie Counter */}
     
    </section>
  )
}

export default function Component() {
  return <HeroSlider />
}
