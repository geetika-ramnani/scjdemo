const ServicesPage = () => {
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
                <span className="text-white">Services</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive entertainment solutions from concept to distribution
              </p>
            </div>
  
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Film Production",
                  description: "End-to-end film production services from script to screen",
                  icon: "🎬",
                },
                {
                  title: "Music Production",
                  description: "Professional music recording, mixing, and mastering services",
                  icon: "🎵",
                },
                {
                  title: "Content Creation",
                  description: "Digital content creation for various platforms and audiences",
                  icon: "📱",
                },
                {
                  title: "Post Production",
                  description: "Advanced editing, VFX, and color grading services",
                  icon: "🎞️",
                },
                {
                  title: "Marketing & PR",
                  description: "Strategic marketing and public relations for entertainment projects",
                  icon: "📢",
                },
                {
                  title: "Distribution",
                  description: "Multi-platform distribution and licensing solutions",
                  icon: "🌐",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;
  