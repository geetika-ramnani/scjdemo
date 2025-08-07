import { useState, useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Anavarana",
    category: "Film",
    image: "/posters/anavarana.jpg",
    tags: ["Thriller"], 
    year: "2023",
    language: "Kannada, Malayalam",
    duration: "135 mins",
    rating: "8.2",
    status: "Released",
  },
  {
    id: 2,
    title: "Bir",
    category: "Film",
    image: "/posters/bir.png",
    tags: ["War", "Crime", "Thriller"],
    year: "N/A",
    language: "Hindi",
    duration: "90 mins",
    rating: "N/A",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Shri Balaji Photo Studio",
    category: "Feature Film",
    image: "/posters/bps.jpg",
    tags: ["Drama"],
    year: "2023",
    language: "Kannada, Malayalam",
    duration: "147 mins",
    rating: "7",
    status: "Released",
  },
  {
    id: 4,
    title: "Kaadu Male",
    category: "Film",
    image: "/posters/kaadumale.png",
    tags: ["Sci-Fi"],
    year: "2025",
    language: "Kannada",
    duration: "109 mins",
    rating: "8",
    status: "Released",
  },
  {
    id: 5,
    title: "Groped…! ",
    category: "Short Film",
    image: "/posters/groped.jpg",
    tags: ["Suspense", "Thriller"],
    year: "N/A",
    language: "Hindi",
    duration: "10 min 28 secs",
    rating: "N/A",
    status: "Released",
  },
  {
    id: 6,
    title: "4",
    category: "Film",
    image: "/posters/4.jpg",
    tags: ["Drama"],
    year: "N/A",
    language: "English, Malayalam, Tamil, Khasi",
    duration: "120 mins",
    rating: "N/A",
    status: "Coming Soon",
  },
]

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(true)
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
    if (rating === "N/A" || rating === "U/A" || rating === "U") {
      return "bg-gray-500"
    }
    
    const numRating = parseFloat(rating)
    
    if (numRating >= 7) {
      return "bg-green-500"
    } else if (numRating >= 5) {
      return "bg-yellow-500"
    } else if (numRating < 5) {
      return "bg-red-500"
    } else {
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
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Our&nbsp;
              </span>
              <span className="text-white">Projects</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our latest cinematic masterpieces that have captivated audiences worldwide
            </p>
          </div>

          {/* Projects Grid */}
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

                  {/* Main Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

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
                         <p className="text-purple-400 text-sm font-semibold mb-2">{project.category}</p>
                         <p className="text-xs font-bold tracking-widest bg-gradient-to-r from-purple-800 via-pink-800 to-red-800 bg-clip-text text-transparent">
                           {project.presenter}
                         </p>
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

                                         {/* Tags and Status */}
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
              🎬 Explore More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
  