import { useState, useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Rover - The Beginning",
    tagline: "A journey beyond imagination",
    category: "Film",
    image: "/posters/rover.png",
    tags: ["Drama", "Adventure", "Sci-Fi"],
    year: "2024",
    description: "A thrilling journey through uncharted territories",
  },
  {
    id: 2,
    title: "Pinjare Wali",
    tagline: "Love knows no boundaries",
    category: "Film",
    image: "/posters/pinjare-wali.png",
    tags: ["Romance", "Drama"],
    year: "2024",
    description: "A love story that transcends time",
  },
  {
    id: 3,
    title: "Last Date",
    tagline: "When time runs out",
    category: "Film",
    image: "/posters/last-date.png",
    tags: ["Thriller", "Romance"],
    year: "2023",
    description: "Uncover the truth behind the conspiracy",
  },
  {
    id: 4,
    title: "Home Sweet Office",
    tagline: "Work-life redefined",
    category: "Series",
    image: "/posters/home-sweet-office.png",
    tags: ["Comedy", "Drama"],
    year: "2024",
    description: "A workplace comedy that hits close to home",
  },
  {
    id: 5,
    title: "Panchlait",
    tagline: "Rural dreams, urban reality",
    category: "Film",
    image: "/posters/panchlait.png",
    tags: ["Drama", "Social"],
    year: "2023",
    description: "Rural dreams meet urban reality",
  },
  {
    id: 6,
    title: "Jolly LLB 2",
    tagline: "Justice with humor",
    category: "Film",
    image: "/posters/jolly-llb-2.png",
    tags: ["Comedy", "Legal"],
    year: "2024",
    description: "High-octane action and stunning visuals",
  },
]

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=300"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm font-semibold">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {project.year}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl">
                      🎬 Watch Now
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-pink-500/80 text-white text-xs font-medium rounded-full hover:bg-pink-500 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 font-medium">{project.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
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
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
