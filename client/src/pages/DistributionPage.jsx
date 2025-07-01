const DistributionPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Distribution&nbsp;
                </span>
                <span className="text-white">Portfolio</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Strategic distribution partnerships and content licensing across multiple platforms
              </p>
            </div>
  
            {/* Distribution Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "50+", label: "Content Titles" },
                { number: "25+", label: "Platform Partners" },
                { number: "15+", label: "Countries" },
                { number: "100M+", label: "Total Views" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
  
            {/* Distribution Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Streaming Platforms",
                  description: "Netflix, Amazon Prime, Disney+, Apple TV+",
                  icon: "📺",
                },
                {
                  title: "Theatrical Release",
                  description: "Cinema chains and independent theaters worldwide",
                  icon: "🎭",
                },
                {
                  title: "Digital Platforms",
                  description: "YouTube, Vimeo, social media channels",
                  icon: "💻",
                },
                {
                  title: "Music Distribution",
                  description: "Spotify, Apple Music, YouTube Music, SoundCloud",
                  icon: "🎧",
                },
                {
                  title: "International Sales",
                  description: "Global licensing and territory-based distribution",
                  icon: "🌍",
                },
                {
                  title: "Educational Content",
                  description: "Schools, universities, and educational platforms",
                  icon: "📚",
                },
              ].map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DistributionPage;
  