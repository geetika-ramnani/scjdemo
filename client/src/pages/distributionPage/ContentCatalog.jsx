import React, { useState } from 'react';

const ContentCatalog = () => {
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');

  const contentCatalog = [
    {
      title: "The Investigator",
      poster: "/posters/the_investigator.png",
      language: "Hindi",
      genre: "Thriller",
      category: "Film",
      description: "Inspector risks all to uncover truth behind a staged suicide.",
    },
    {
      title: "Premalo",
      poster: "/posters/Premalo.jpg",
      language: "Telugu",
      genre: "Romance",
      category: "Film",
      description: "A tragic love story shattered by violence, injustice, and redemption.",
    },
    {
      title: "Gauriya Live",
      poster: "/posters/Raz.png",
      language: "Hindi",
      genre: "Fiction",
      category: "Film",
      description: "A family's crisis exploited for politics, silencing Gauraiya's true voice.",
    },
    {
      title: "The Waiting",
      poster: "/posters/the_waiting.jpg",
      language: "Hindi",
      genre: "Drama",
      category: "Short Film",
      description: "A broken couple finds love through a timeless Valentine's tale.",
    },
    {
      title: "Montage",
      poster: "/posters/Montage.png",
      language: "Hindi",
      genre: "Slice of Life",
      category: "Film",
      description: "A nostalgic journey of friendship, memories, emotions, and quiet revelations.",
    },
    {
      title: "Barat",
      poster: "/posters/Barat.jpg",
      language: "Hindi",
      genre: "Fantasy",
      category: "Short Film",
      description: "A miser's greed leads him to a cosmic reckoning.",
    },
    {
      title: "Koon",
      poster: "/posters/Koon.jpg",
      language: "Malyalam",
      genre: "Thriller",
      category: "Film",
      description: "A woman's fake love spirals into a deadly psychological trap.",
    },
    {
      title: "Bhootkaal-2",
      poster: "/posters/Bhootkaal2.jpg",
      language: "Hindi",
      genre: "Horror",
      category: "Short Film",
      description: "Haunted past returns as friends uncover a shocking paranormal truth.",
    },
    {
      title: "ZIPCODE 47",
      poster: "/posters/Zipcode.jpeg",
      language: "Hindi",
      genre: "Sci-fi",
      category: "Short Film",
      description: "Cama survivor seeks love in a locked-down city.",
    },
  ];

  const filteredCatalog = contentCatalog.filter(item =>
    (!language || item.language === language) &&
    (!genre || item.genre === genre) &&
    (!category || item.category === category)
  );

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="font-bold mb-6" style={{ fontSize: '3rem' }}>
          <span className="text-white">Content&nbsp;</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Catalog
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
          Browse and filter our content catalog by language, genre, and category.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto mb-12">
        {/* Language Filter */}
         <div className="w-full md:w-1/3">
                <label className="block text-gray-300 mb-2 text-left" htmlFor="language-select">Language</label>
                <select
                  id="language-select"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold shadow-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 placeholder:text-gray-400"
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                >
                  <option className="bg-gray-900 text-white" value="">Select Language</option>
                  <option className="bg-gray-900 text-white" value="Hindi">Hindi</option>
                  <option className="bg-gray-900 text-white" value="English">English</option>
                  <option className="bg-gray-900 text-white" value="Punjabi">Punjabi</option>
                  <option className="bg-gray-900 text-white" value="Marathi">Marathi</option>
                  <option className="bg-gray-900 text-white" value="Malyalam">Malyalam</option>
                  <option className="bg-gray-900 text-white" value="Tamil">Tamil</option>
                  <option className="bg-gray-900 text-white" value="Telugu">Telugu</option>
                  <option className="bg-gray-900 text-white" value="Other">Other</option>
                </select>
              </div>

        {/* Genre Filter */}
        <div className="w-full md:w-1/3">
                <label className="block text-gray-300 mb-2 text-left" htmlFor="genre-select">Genre</label>
                <select
                  id="genre-select"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold shadow-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 placeholder:text-gray-400"
                  value={genre}
                  onChange={e => setGenre(e.target.value)}
                >
                  <option className="bg-gray-900 text-white" value="">Select Genre</option>
                  <option className="bg-gray-900 text-white" value="Drama">Drama</option>
                  <option className="bg-gray-900 text-white" value="Comedy">Comedy</option>
                  <option className="bg-gray-900 text-white" value="Thriller">Thriller</option>
                  <option className="bg-gray-900 text-white" value="Romance">Romance</option>
                  <option className="bg-gray-900 text-white" value="Fantasy">Fantasy</option>
                  <option className="bg-gray-900 text-white" value="Documentary">Documentary</option>
                  <option className="bg-gray-900 text-white" value="Horror">Horror</option>
                  <option className="bg-gray-900 text-white" value="Sci-Fi">Sci-Fi</option>
                  <option className="bg-gray-900 text-white" value="Fiction">Fiction</option>
                  <option className="bg-gray-900 text-white" value="Slice of Life">Slice of Life</option>
                </select>
              </div>

        {/* Category Filter */}
        <div className="w-full md:w-1/3">
                <label className="block text-gray-300 mb-2 text-left" htmlFor="category-select">Category</label>
                <select
                  id="category-select"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold shadow-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 placeholder:text-gray-400"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option className="bg-gray-900 text-white" value="">Select Category</option>
                  <option className="bg-gray-900 text-white" value="Film">Film</option>
                  <option className="bg-gray-900 text-white" value="Short Film">Short Film</option>
                  <option className="bg-gray-900 text-white" value="Web Series">Web Series</option>
                  <option className="bg-gray-900 text-white" value="TV Show">TV Show</option>
                  <option className="bg-gray-900 text-white" value="Documentary">Documentary</option>
                  <option className="bg-gray-900 text-white" value="Music Video">Music Video</option>
                  <option className="bg-gray-900 text-white" value="Other">Other</option>
                </select>
              </div>
      </div>

      {/* Catalog Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-visible">
          {filteredCatalog.length > 0 ? (
            filteredCatalog.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-visible shadow-xl flex flex-col transition-all duration-300"
                style={{ minHeight: '420px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', position: 'relative', zIndex: 1 }}
              >
                <div className="relative w-full h-64 rounded-t-2xl overflow-visible flex items-center justify-center bg-black">
                  {/* Upcoming button for selected titles */}
                  {["The Investigator", "The Waiting", "Montage", "Bhootkaal-2", "ZIPCODE 47"].includes(item.title) && (
                    <div className="absolute top-3 right-3 z-40">
                      <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold px-4 py-1 rounded-full shadow-lg text-xs uppercase tracking-wider animate-pulse">
                        Upcoming
                      </span>
                    </div>
                  )}
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-150 group-hover:shadow-2xl"
                    style={{
                      borderRadius: 'inherit',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 30,
                      pointerEvents: 'none',
                      background: 'black',
                    }}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-white mb-2 flex items-center drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 rounded text-xs font-semibold shadow-sm">{item.language}</span>
                    <span className="px-2 py-1 bg-orange-500/30 text-orange-200 rounded text-xs font-semibold shadow-sm">{item.genre}</span>
                    <span className="px-2 py-1 bg-red-500/30 text-red-200 rounded text-xs font-semibold shadow-sm">{item.category}</span>
                  </div>
                  <p className="text-gray-200 text-base flex-1 mt-2 drop-shadow-sm">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-12">
              No content found for the selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCatalog;
