const TalentPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Talent&nbsp;
                </span>
                <span className="text-white">Management</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Nurturing and managing exceptional talent across all entertainment verticals
              </p>
            </div>
  
            {/* Talent Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Actors & Performers",
                  description: "Professional actors for films, TV, and digital content",
                  icon: "🎭",
                  count: "25+ Artists",
                },
                {
                  title: "Musicians & Singers",
                  description: "Talented musicians across various genres",
                  icon: "🎤",
                  count: "15+ Artists",
                },
                {
                  title: "Directors & Filmmakers",
                  description: "Visionary directors and creative filmmakers",
                  icon: "🎬",
                  count: "10+ Directors",
                },
                {
                  title: "Writers & Screenwriters",
                  description: "Creative writers and screenplay specialists",
                  icon: "✍️",
                  count: "20+ Writers",
                },
                {
                  title: "Technical Crew",
                  description: "Skilled technicians and production specialists",
                  icon: "🔧",
                  count: "50+ Crew",
                },
                {
                  title: "Content Creators",
                  description: "Digital content creators and influencers",
                  icon: "📱",
                  count: "30+ Creators",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-sm bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full inline-block">
                    {category.count}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Services */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Management Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Career Development & Strategy",
                  "Contract Negotiation",
                  "Brand Building & Marketing",
                  "Project Matching & Casting",
                  "Training & Skill Development",
                  "Public Relations & Media",
                  "Financial Management",
                  "Legal Support & Representation",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TalentPage;
  