

import { useState, useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Rover - The Beginning",
    tagline: "A journey beyond imagination",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Drama", "Adventure", "Sci-Fi"],
    year: "2024",
    language: "Hindi",
    duration: "2hr 15mins",
    rating: "U/A",
    status: "Released",
    description:
      "A thrilling journey through uncharted territories that challenges the boundaries of human exploration.",
    director: "Rajesh Kumar",
    producer: "Stellar Productions",
    cast: "Rajesh Khanna, Priyanka Chopra",
    presenter: "CINEMATIC VISION PRESENTS",
  },
  {
    id: 2,
    title: "Pinjare Wali",
    tagline: "Love knows no boundaries",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Romance", "Drama"],
    year: "2024",
    language: "Hindi",
    duration: "1hr 58mins",
    rating: "U",
    status: "Coming Soon",
    description: "A love story that transcends time and social barriers.",
    director: "Priya Sharma",
    producer: "Romantic Films Ltd",
    cast: "Shah Rukh Khan, Deepika Padukone",
    presenter: "LOVE STORIES PRESENTS",
  },
  {
    id: 3,
    title: "Last Date",
    tagline: "When time runs out",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Thriller", "Romance"],
    year: "2023",
    language: "Hindi",
    duration: "1hr 45mins",
    rating: "A",
    status: "Released",
    description: "Uncover the truth behind the conspiracy in this edge-of-your-seat thriller.",
    director: "Amit Verma",
    producer: "Thriller House",
    cast: "Akshay Kumar, Katrina Kaif",
    presenter: "MYSTERY FILMS PRESENTS",
  },
  {
    id: 4,
    title: "Home Sweet Office",
    tagline: "Work-life redefined",
    category: "Web Series",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Comedy", "Drama"],
    year: "2024",
    language: "Hindi",
    duration: "8 Episodes",
    rating: "U/A",
    status: "Streaming",
    description: "A workplace comedy that hits close to home in the post-pandemic world.",
    director: "Neha Gupta",
    producer: "Digital Content Co",
    cast: "Ayushmann Khurrana, Kriti Sanon",
    presenter: "STREAMING ORIGINALS PRESENTS",
  },
  {
    id: 5,
    title: "Panchlait",
    tagline: "Rural dreams, urban reality",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Drama", "Social"],
    year: "2023",
    language: "Hindi",
    duration: "2hr 05mins",
    rating: "U",
    status: "Released",
    description: "Rural dreams meet urban reality in this heartwarming social drama.",
    director: "Suresh Patel",
    producer: "Rural Cinema",
    cast: "Nawazuddin Siddiqui, Radhika Apte",
    presenter: "SOCIAL STORIES PRESENTS",
  },
  {
    id: 6,
    title: "Jolly LLB 2",
    tagline: "Justice with humor",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Comedy", "Legal"],
    year: "2024",
    language: "Hindi",
    duration: "2hr 20mins",
    rating: "U/A",
    status: "Coming Soon",
    description: "High-octane courtroom drama mixed with perfect comedic timing.",
    director: "Subhash Kapoor",
    producer: "Legal Laughs Productions",
    cast: "Akshay Kumar, Huma Qureshi",
    presenter: "COMEDY CENTRAL PRESENTS",
  },
]

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getRatingColor = (rating) => {
    switch (rating) {
      case "U":
        return "bg-green-500"
      case "U/A":
        return "bg-yellow-500"
      case "A":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Released":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Coming Soon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Streaming":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="text-white"> Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our latest cinematic masterpieces that have captivated audiences worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3 hover:scale-[1.02]">
                {/* Premium Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg">
                    PREMIUM
                  </div>
                </div>

                {/* Status Badge */}

                {/* Presenter Text */}
                <div className="absolute top-16 left-4 right-4 z-20">
                  <p className="text-xs text-gray-300 font-light tracking-widest opacity-80">{project.presenter}</p>
                </div>

                {/* Main Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  {/* Large Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-6xl md:text-7xl font-black text-white/90 tracking-wider transform group-hover:scale-105 transition-transform duration-500 text-center leading-none">
                      {project.title.split(" ")[0]}
                    </h1>
                  </div>

                  {/* Watch Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2">
                      <span className="text-2xl">▶</span>
                      Watch Now
                    </button>
                  </div>
                </div>

                {/* Detailed Info Card */}
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-t border-gray-700/50 p-6">
                  {/* Title and Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-purple-400 text-sm font-semibold">{project.category}</p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full ${getRatingColor(project.rating)} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    >
                      {project.rating}
                    </div>
                  </div>

                  {/* Duration and Language */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {project.year}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-lg font-medium text-gray-200 mb-3 italic">"{project.tagline}"</p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </div>
                  </div>

                  {/* Credits - Show on Hover */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${selectedProject === project.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="border-t border-gray-700/50 pt-4 space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        <div>
                          <span className="text-purple-400 font-semibold">Director:</span> {project.director}
                        </div>
                        <div>
                          <span className="text-purple-400 font-semibold">Producer:</span> {project.producer}
                        </div>
                        <div className="col-span-2">
                          <span className="text-purple-400 font-semibold">Cast:</span> {project.cast}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 text-lg">
            🎬 Explore All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
