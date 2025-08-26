import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop",
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
    poster:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop",
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
    poster:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop",
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
    poster:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop",
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
    poster:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    tagline: "When worlds collide, only one can stand between chaos and order.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev === movieData.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? movieData.length - 1 : prev - 1));

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current, paused]);

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {movieData.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover brightness-[0.5]"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-start px-10 lg:px-20 backdrop-blur-sm bg-black/20">
            <div className="max-w-2xl">
              <p className="text-yellow-400 uppercase tracking-widest mb-2">
                {movie.genre} • {movie.year}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {movie.title}
              </h1>
              <p className="italic text-orange-300 text-lg mb-6">
                “{movie.tagline}”
              </p>
              <p className="text-gray-300 mb-4">{movie.description}</p>
              <div className="text-sm text-gray-400 mb-2">
                <strong>Director:</strong> {movie.director}
              </div>
              <div className="text-sm text-gray-400 mb-6">
                <strong>Cast:</strong> {movie.cast.join(", ")}
              </div>
              <div className="flex gap-4 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  ⏱ {movie.duration}
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  ⭐ {movie.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/60 hover:bg-yellow-500/70 transition-colors p-2 rounded-full shadow-lg"
      >
        <FiChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/60 hover:bg-yellow-500/70 transition-colors p-2 rounded-full shadow-lg"
      >
        <FiChevronRight className="text-white w-6 h-6" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {movieData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
