const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Our&nbsp;
              </span>
              <span className="text-white">Projects</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Showcasing our latest and greatest entertainment productions
            </p>
          </div>

          {/* Intro Section */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-20 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Content that travels, impacts, and lasts.
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              At SCJ Entertainments, every project is more than a title in a
              catalogue — it’s a journey we take from discovery to global
              screens. We work with content that speaks to emotions, sparks
              conversations, and builds lasting connections with audiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "Award-winning films – Critically acclaimed content celebrated at international festivals.",
                "Popular TV dramas – High-engagement series with loyal fan followings.",
                "Binge-worthy web shows – Digital-first originals with global appeal.",
                "Impactful documentaries – Content that informs, inspires, and provokes thought.",
                "Short films – Bold ideas from emerging voices in entertainment.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-lg p-6 hover:bg-black/60 transition"
                >
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 italic mt-8">
              Every piece of content we work with is chosen for one reason — it
              deserves to be seen.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cinematic Dreams",
                category: "Feature Film",
                status: "In Production",
                image:
                  "/placeholder.svg?height=300&width=400&text=Cinematic+Dreams",
              },
              {
                title: "Rhythm of Life",
                category: "Music Album",
                status: "Released",
                image:
                  "/placeholder.svg?height=300&width=400&text=Rhythm+of+Life",
              },
              {
                title: "Digital Stories",
                category: "Web Series",
                status: "Post Production",
                image:
                  "/placeholder.svg?height=300&width=400&text=Digital+Stories",
              },
              {
                title: "Urban Beats",
                category: "Music Video",
                status: "Released",
                image: "/placeholder.svg?height=300&width=400&text=Urban+Beats",
              },
              {
                title: "Future Vision",
                category: "Documentary",
                status: "Pre Production",
                image:
                  "/placeholder.svg?height=300&width=400&text=Future+Vision",
              },
              {
                title: "Sound Waves",
                category: "Podcast Series",
                status: "Released",
                image: "/placeholder.svg?height=300&width=400&text=Sound+Waves",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

