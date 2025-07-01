import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Film Director",
    company: "Independent Films",
    testimonial:
      "Working with SCJ was like watching your dream come alive on screen. Their attention to detail and creative vision is absolutely unmatched in the industry.",
    rating: 5,
    avatar: "🎬",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Music Producer",
    company: "Melody Studios",
    testimonial:
      "SCJ's innovative approach to music production and their AI tools helped us create the perfect soundtrack. The technology is truly revolutionary!",
    rating: 5,
    avatar: "🎵",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Content Creator",
    company: "Digital Media Co.",
    testimonial:
      "From concept to final cut, SCJ delivered beyond expectations. Our project got 100K views in just 3 days! Their expertise is phenomenal.",
    rating: 5,
    avatar: "📱",
  },
]

const successStats = [
  { metric: "100K+", description: "Views in 3 days", icon: "👁️" },
  { metric: "50M+", description: "Total reach", icon: "🌟" },
  { metric: "25+", description: "Awards won", icon: "🏆" },
  { metric: "98%", description: "Client satisfaction", icon: "❤️" },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 transition-all duration-1000">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              What People
            </span>
            <span className="text-white"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our clients and collaborators about their experience working with SCJ
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000">
          {successStats.map((stat, index) => (
            <div
              key={stat.metric}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:bg-gray-800/70 hover:border-gray-600/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.metric}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto transition-all duration-1000">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 md:p-12 relative overflow-hidden hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-yellow-600/5" />
            <div className="absolute top-6 left-6 text-6xl text-white/10">"</div>

            <div className="relative z-10 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
                {testimonials[currentTestimonial].testimonial}
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-yellow-400 to-amber-500">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-yellow-400 text-sm font-medium">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
