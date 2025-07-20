import React, { useState } from 'react';
import { Film, Info, Settings, CreditCard, Eye, EyeOff } from "lucide-react";

const ContentSubmissionForm= () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    contentType: '',
    title: '',
    genre: '',
    language: '',
    duration: '',
    resolution: '',
    format: '',
    audioTracks: { original: false, hindi: false, english: false, marathi: false, kannada: false, malayalam: false, other: false },
    audioTracksOther: '',
    subtitles: { english: false, hindi: false, malayalam: false, other: false },
    trailerUrl: '',
    trailerPassword: '',
    screenerUrl: '',
    screenerPassword: '',
    rights: '',
    payment: '',
    platforms: {
      premium: false,
      regional: false,
      satellite: false,
      theatrical: false,
      inflight: false,
      all: false,
    },
    additionalNotes: '',
    termsAccepted: false,
    synopsis: '',
    releaseYear: '',
    keyCast: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showTrailerPassword, setShowTrailerPassword] = useState(false);
  const [showScreenerPassword, setShowScreenerPassword] = useState(false);

  const genres = [
    '', 'Drama', 'Comedy', 'Action', 'Thriller', 'Horror', 'Romance', 'Documentary', 'Sci-Fi', 'Fantasy', 'Mystery', 'Adventure'
  ];

  const stepTitles = [
    { title: 'Content Type', icon: '🎬' },
    { title: 'Basic Info', icon: '📝' },
    { title: 'Technical Specs', icon: '⚙️' },
    { title: 'Rights & Payment', icon: '💳' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'audioTracksOther') {
      setForm((prev) => ({ ...prev, audioTracksOther: value }));
    } else if (name.startsWith('subtitles.')) {
      setForm((prev) => ({
        ...prev,
        subtitles: { ...prev.subtitles, [name.split('.')[1]]: checked },
      }));
    } else if (name.startsWith('audioTracks.')) {
      setForm((prev) => ({
        ...prev,
        audioTracks: { ...prev.audioTracks, [name.split('.')[1]]: checked },
      }));
    } else if (name.startsWith('platforms.')) {
      setForm((prev) => ({
        ...prev,
        platforms: { ...prev.platforms, [name.split('.')[1]]: checked },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const renderStep1 = () => (
    <div>
      <h3 className="text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg font-sans mb-8 flex items-center gap-4">
        <Film className="inline-block text-yellow-400 mb-1" size={40} />
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Select Content Type</span>
      </h3>
      <p className="text-gray-300 mb-8 text-xl font-medium font-sans">
        Choose the category that best describes your content.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[
          { value: 'feature', title: 'Feature Film', desc: 'Full-length movies typically over 60 minutes in duration.' },
          { value: 'webseries', title: 'Web Series', desc: 'Multi-episode content designed for episodic viewing.' },
          { value: 'short', title: 'Short Film', desc: 'Brief films typically under 40 minutes in duration.' },
          { value: 'documentary', title: 'Documentary', desc: 'Non-fiction content exploring real events, people, or topics.' },
        ].map(option => (
          <label
            key={option.value}
            className={`flex flex-col items-start p-8 rounded-3xl border-2 cursor-pointer transition-all shadow-xl min-h-[140px] bg-[#181b29] gap-3 font-sans relative
              ${form.contentType === option.value ? 'border-yellow-400 bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-red-400/10 shadow-yellow-400/30 scale-105 ring-2 ring-yellow-400/40' : 'border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105'}`}
            style={{ boxShadow: form.contentType === option.value ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}
          >
            <div className="flex flex-row items-center gap-5 w-full">
              <input
                type="radio"
                name="contentType"
                value={option.value}
                checked={form.contentType === option.value}
                onChange={handleChange}
                className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200 mt-1"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                  {option.title}
                </span>
                <span className="text-gray-200 text-base font-medium font-sans block mt-1">
                  {option.desc}
                </span>
              </div>
            </div>
            {form.contentType === option.value && (
              <div className="absolute top-2 right-4 text-yellow-400 text-lg font-bold animate-bounce">✓</div>
            )}
          </label>
        ))}
      </div>
    </div>
  );

  const FIELD_CLASS = "w-full text-base rounded-lg border border-white/10 bg-[#23232b] text-white px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300";

  const renderStep2 = () => {
    const showLanguage = !!form.title;
    const showSynopsis = showLanguage && !!form.language;
    const showGenre = showSynopsis && !!form.synopsis;
    const showReleaseYear = showGenre && !!form.genre;
    const showKeyCast = showReleaseYear && !!form.releaseYear;

    return (
      <>
        <h3 className="text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg font-sans mb-8 flex items-center gap-4">
          <Info className="inline-block text-yellow-400 mb-1" size={40} />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Basic Information</span>
        </h3>
        <p className="text-gray-300 mb-8 text-xl font-medium font-sans text-center">
          Provide the essential details about your content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Content Title */}
          <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
            <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
              Content Title <span className="text-yellow-400">*</span>
            </span>
            <input name="title" value={form.title} onChange={handleChange} required className={FIELD_CLASS} placeholder="Enter title" />
          </div>
          {/* Language */}
          {showLanguage && (
            <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
              <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                Original Language <span className="text-yellow-400">*</span>
              </span>
              <select name="language" value={form.language} onChange={handleChange} required className={FIELD_CLASS}>
                <option value="">Select language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Marathi">Marathi</option>
                <option value="Bengali">Bengali</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Kannada">Kannada</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}
          {/* Synopsis */}
          {showSynopsis && (
            <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
              <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                Synopsis <span className="text-yellow-400">*</span>
              </span>
              <textarea name="synopsis" value={form.synopsis || ''} onChange={handleChange} required maxLength={500} className={FIELD_CLASS + " min-h-[80px] resize-none"} placeholder="Brief description of your content (max 500 characters)" />
              <div className="text-right text-xs text-gray-400 mt-1">{(form.synopsis || '').length}/500</div>
            </div>
          )}
          {/* Genre */}
          {showGenre && (
            <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
              <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                Primary Genre <span className="text-yellow-400">*</span>
              </span>
              <select name="genre" value={form.genre} onChange={handleChange} required className={FIELD_CLASS}>
                <option value="">Select genre</option>
                {genres.filter(g => g).map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          )}
          {/* Release Year */}
          {showReleaseYear && (
            <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
              <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                Release Year <span className="text-yellow-400">*</span>
              </span>
              <input name="releaseYear" value={form.releaseYear || ''} onChange={handleChange} required pattern="\\d{4}" maxLength={4} className={FIELD_CLASS} placeholder="YYYY" />
            </div>
          )}
          {/* Key Cast */}
          {showKeyCast && (
            <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
              <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm">
                Key Cast/Talent
              </span>
              <input name="keyCast" value={form.keyCast || ''} onChange={handleChange} className={FIELD_CLASS} placeholder="Main cast members, separated by commas" />
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-[700px] w-full bg-[#0d101d] font-sans">
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-4xl min-h-[700px] bg-[#0d101d] rounded-3xl shadow-2xl border border-yellow-400/30 px-6 sm:px-12 py-14 flex flex-col gap-14 transition-all duration-500 hover:shadow-yellow-400/20 hover:border-yellow-400/80 font-sans"
        style={{ boxShadow: '0 12px 48px 0 rgba(255, 193, 7, 0.10)' }}
      >
        {/* Stepper */}
        <div className="flex justify-between items-center mb-12 gap-4">
          {stepTitles.map((stepObj, idx) => (
            <div key={stepObj.title} className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-bold mb-2 transition-all duration-300 tracking-wide
                ${step === idx + 1 ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 border-yellow-400 text-black shadow-lg scale-110 ring-2 ring-yellow-400/60' : 'bg-gray-800 border-gray-700 text-yellow-400'}`}>{idx + 1}</div>
              <span className={`text-xs sm:text-sm font-semibold tracking-wide ${step === idx + 1 ? 'text-yellow-400' : 'text-gray-400'}`}>{stepObj.title}</span>
            </div>
          ))}
        </div>

        {/* Step Content with transition */}
        <div className="rounded-2xl bg-[#181b29] border border-yellow-400/20 shadow-xl px-8 py-10 mb-8 min-h-[340px] flex flex-col gap-12 backdrop-blur-xl transition-all duration-500 font-sans">
          <div className="flex flex-col gap-12">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && (
                <>
                  <h3 className="text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg font-sans mb-8 flex items-center gap-4">
                    <Settings className="inline-block text-yellow-400 mb-1" size={40} />
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Technical Specifications</span>
                  </h3>
                  <p className="text-gray-300 mb-10 text-lg font-medium font-sans">Provide technical details for your content. <span className='text-yellow-300'>All fields marked with * are required.</span></p>
                  {/* Duration & Resolution */}
                  <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
                    <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm flex items-center gap-2">
                      <Film className="text-yellow-400" size={22} />
                      Duration (minutes) <span className="text-yellow-400">*</span>
                    </span>
                    <input name="duration" value={form.duration} onChange={handleChange} required type="number" min="1" className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300" placeholder="Enter duration in minutes" />
                    <span className="text-xs text-gray-400 mt-2 block">Total runtime of your content in minutes.</span>
                    <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm flex items-center gap-2 mt-6">
                      <Settings className="text-yellow-400" size={22} />
                      Resolution <span className="text-yellow-400">*</span>
                    </span>
                    <select name="resolution" value={form.resolution} onChange={handleChange} required className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300">
                      <option value="">Select resolution</option>
                      <option value="4K (3840x2160)">4K (3840x2160)</option>
                      <option value="2K (2048x1080)">2K (2048x1080)</option>
                      <option value="Full HD (1920x1080)">Full HD (1920x1080)</option>
                      <option value="HD (1280x720)">HD (1280x720)</option>
                      <option value="SD (720x480)">SD (720x480)</option>
                    </select>
                    <span className="text-xs text-gray-400 mt-2 block">Select the highest available resolution.</span>
                  </div>

                  {/* Audio Tracks - only show if duration and resolution are filled */}
                  {form.duration && form.resolution && (
                    <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
                      <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm flex items-center gap-2">
                        <Info className="text-yellow-400" size={28} />
                        Available Audio Tracks <span className="text-yellow-400">*</span>
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-4">
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105 whitespace-nowrap col-span-2 sm:col-span-4">
                          <input type="checkbox" name="audioTracks.original" checked={form.audioTracks.original} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">Original Language</span>
                        </label>
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
                          <input type="checkbox" name="audioTracks.hindi" checked={form.audioTracks.hindi} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">Hindi</span>
                        </label>
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
                          <input type="checkbox" name="audioTracks.english" checked={form.audioTracks.english} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">English</span>
                        </label>
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
                          <input type="checkbox" name="audioTracks.other" checked={form.audioTracks.other} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">Other</span>
                        </label>
                      </div>
                      {form.audioTracks.other && (
                        <input
                          type="text"
                          name="audioTracksOther"
                          value={form.audioTracksOther}
                          onChange={handleChange}
                          className="w-full mt-4 text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300"
                          placeholder="Please specify other audio track(s)"
                        />
                      )}
                      <span className="text-xs text-gray-400 mt-4 block">Select all audio tracks available for your content.</span>
                    </div>
                  )}
                  {/* Subtitles - only show if at least one audio track is selected */}
                  {form.duration && form.resolution && (form.audioTracks.original || form.audioTracks.hindi || form.audioTracks.english || form.audioTracks.other) && (
                    <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-3 font-sans relative mb-8 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
                      <span className="font-extrabold text-2xl text-yellow-300 mb-1 font-sans tracking-wide drop-shadow-sm flex items-center gap-2">
                        <Info className="text-yellow-400" size={28} />
                        Available Subtitles <span className="text-yellow-400">*</span>
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-4">
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
                          <input type="checkbox" name="subtitles.english" checked={form.subtitles.english} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">English</span>
                        </label>
                        <label className="flex items-center gap-10 text-gray-100 text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
                          <input type="checkbox" name="subtitles.hindi" checked={form.subtitles.hindi} onChange={handleChange} className="w-7 h-7 accent-yellow-400 rounded-xl border-2 border-yellow-400/60 ring-2 ring-yellow-400/80 bg-[#181b29] shadow-lg focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="pl-2">Hindi</span>
                        </label>
                      </div>
                      <span className="text-xs text-gray-400 mt-4 block">Select all subtitle languages available for your content.</span>
                    </div>
                  )}
                  {/* Trailer & Screener Links - only show if at least one subtitle is selected */}
                  {form.duration && form.resolution && (form.audioTracks.original || form.audioTracks.hindi || form.audioTracks.english || form.audioTracks.other) && (form.subtitles.english || form.subtitles.hindi) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
                        <div>
                          <label className="block text-yellow-300 font-bold mb-3 text-lg tracking-wide flex items-center gap-2">
                            <Info className="text-yellow-400" size={22} />
                            Trailer URL
                          </label>
                          <input name="trailerUrl" value={form.trailerUrl} onChange={handleChange} type="url" className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300" placeholder="https://example.com/trailer" />
                          <span className="text-xs text-gray-400 mt-2 block">If your trailer is available online, provide the link here.</span>
                        </div>
                        <div>
                          <label className="block text-yellow-300 font-bold mb-3 text-lg tracking-wide flex items-center gap-2">
                            <Eye className="text-yellow-400" size={22} />
                            Trailer Password
                          </label>
                          <div className="relative">
                            <input 
                              name="trailerPassword" 
                              value={form.trailerPassword} 
                              onChange={handleChange} 
                              type={showTrailerPassword ? "text" : "password"} 
                              className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300" 
                              placeholder="Enter password if trailer is password protected" 
                            />
                            <button
                              type="button"
                              onClick={() => setShowTrailerPassword(!showTrailerPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                            >
                              {showTrailerPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                          <span className="text-xs text-gray-400 mt-2 block">If your trailer is password protected, enter the password here.</span>
                        </div>
                        <div>
                          <label className="block text-yellow-300 font-bold mb-3 text-lg tracking-wide flex items-center gap-2">
                            <Info className="text-yellow-400" size={22} />
                            Preview/Screener Link
                          </label>
                          <input name="screenerUrl" value={form.screenerUrl} onChange={handleChange} type="url" className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300" placeholder="https://example.com/screener" />
                          <span className="text-xs text-gray-400 mt-2 block">If you have a screener or preview link, provide it here.</span>
                        </div>
                        <div>
                          <label className="block text-yellow-300 font-bold mb-3 text-lg tracking-wide flex items-center gap-2">
                            <Eye className="text-yellow-400" size={22} />
                            Screener Password
                          </label>
                          <div className="relative">
                            <input 
                              name="screenerPassword" 
                              value={form.screenerPassword} 
                              onChange={handleChange} 
                              type={showScreenerPassword ? "text" : "password"} 
                              className="w-full text-base rounded-lg border border-yellow-400/20 bg-[#181b29] text-white px-6 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300" 
                              placeholder="Enter password if screener is password protected" 
                            />
                            <button
                              type="button"
                              onClick={() => setShowScreenerPassword(!showScreenerPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                            >
                              {showScreenerPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                          <span className="text-xs text-gray-400 mt-2 block">If your screener is password protected, enter the password here.</span>
                        </div>
                    </div>
                  )}
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg font-sans mb-8 flex items-center gap-4">
                    <CreditCard className="inline-block text-yellow-400 mb-1" size={40} />
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Rights & Payment Preferences</span>
                  </h3>
                  <p className="text-gray-300 mb-10 text-lg font-medium font-sans">Select your rights and payment preferences for distribution.</p>
                  {/* Rights Availability Section */}
                  <div className="mb-10 flex flex-col gap-8">
                    <span className="font-extrabold text-2xl text-yellow-300 mb-4 font-sans tracking-wide drop-shadow-sm">
                      Rights Availability <span className="text-yellow-400">*</span>
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.rights === 'exclusive' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                        style={{ boxShadow: form.rights === 'exclusive' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                        <div className="flex items-center gap-4 mb-2">
                          <input type="radio" name="rights" value="exclusive" checked={form.rights === 'exclusive'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="font-bold text-white text-lg">Exclusive Rights</span>
                        </div>
                        <span className="text-gray-300 text-base leading-relaxed">I'm offering exclusive distribution rights for maximum revenue potential</span>
                      </label>
                      <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.rights === 'nonexclusive' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                        style={{ boxShadow: form.rights === 'nonexclusive' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                        <div className="flex items-center gap-4 mb-2">
                          <input type="radio" name="rights" value="nonexclusive" checked={form.rights === 'nonexclusive'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                          <span className="font-bold text-white text-lg">Non-exclusive Rights</span>
                        </div>
                        <span className="text-gray-300 text-base leading-relaxed">I'm offering non-exclusive distribution rights across multiple platforms</span>
                      </label>
                    </div>
                  </div>
                  {/* Payment Model Section - progressive reveal */}
                  {form.rights && (
                    <div className="mb-10 flex flex-col gap-8">
                      <span className="font-extrabold text-2xl text-yellow-300 mb-4 font-sans tracking-wide drop-shadow-sm">
                        Preferred Payment Model <span className="text-yellow-400">*</span>
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.payment === 'revenue' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                          style={{ boxShadow: form.payment === 'revenue' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                          <div className="flex items-center gap-4 mb-2">
                            <input type="radio" name="payment" value="revenue" checked={form.payment === 'revenue'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                            <span className="font-bold text-white text-lg">Revenue Share</span>
                          </div>
                          <span className="text-gray-300 text-base leading-relaxed">Split revenue with platforms based on performance and viewership</span>
                        </label>
                        <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.payment === 'mg' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                          style={{ boxShadow: form.payment === 'mg' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                          <div className="flex items-center gap-4 mb-2">
                            <input type="radio" name="payment" value="mg" checked={form.payment === 'mg'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                            <span className="font-bold text-white text-lg">Minimum Guarantee</span>
                          </div>
                          <span className="text-gray-300 text-base leading-relaxed">Upfront payment plus potential revenue share based on performance</span>
                        </label>
                        <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.payment === 'flat' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                          style={{ boxShadow: form.payment === 'flat' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                          <div className="flex items-center gap-4 mb-2">
                            <input type="radio" name="payment" value="flat" checked={form.payment === 'flat'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                            <span className="font-bold text-white text-lg">Flat Fee</span>
                          </div>
                          <span className="text-gray-300 text-base leading-relaxed">One-time payment for distribution rights with no ongoing revenue share</span>
                        </label>
                        <label className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 ${form.payment === 'hybrid' ? 'border-yellow-400 ring-2 ring-yellow-400/40 scale-105 bg-gradient-to-br from-yellow-400/20 to-orange-400/10' : 'border-white/20 hover:border-yellow-400/60'}`}
                          style={{ boxShadow: form.payment === 'hybrid' ? '0 8px 32px 0 rgba(255, 193, 7, 0.10)' : undefined }}>
                          <div className="flex items-center gap-4 mb-2">
                            <input type="radio" name="payment" value="hybrid" checked={form.payment === 'hybrid'} onChange={handleChange} className="w-6 h-6 accent-yellow-400 rounded-full border-2 border-yellow-400/40 ring-2 ring-yellow-400/60 bg-[#181b29] shadow focus:ring-4 focus:ring-yellow-400/80 transition-all duration-200" />
                            <span className="font-bold text-white text-lg">Hybrid Model</span>
                          </div>
                          <span className="text-gray-300 text-base leading-relaxed">Customized payment structure tailored to your specific requirements</span>
                        </label>
                      </div>
                    </div>
                  )}
                  {/* Target Platforms Section - progressive reveal */}
                  {form.rights && form.payment && (
                    <div className="mb-10 flex flex-col gap-8">
                      <span className="font-extrabold text-2xl text-yellow-300 mb-4 font-sans tracking-wide drop-shadow-sm">
                        Target Platforms <span className="text-yellow-400">*</span>
                      </span>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.premium 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10'
                        }`}>
                          <input 
                            type="checkbox" 
                            name="platforms.premium" 
                            checked={form.platforms.premium} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" 
                          />
                          <span className="ml-2 text-white font-medium">Premium OTT</span>
                        </label>
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.regional 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10'
                        }`}>
                          <input 
                            type="checkbox" 
                            name="platforms.regional" 
                            checked={form.platforms.regional} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" 
                          />
                          <span className="ml-2 text-white font-medium">Regional OTT</span>
                        </label>
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.satellite 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10'
                        }`}>
                          <input 
                            type="checkbox" 
                            name="platforms.satellite" 
                            checked={form.platforms.satellite} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" 
                          />
                          <span className="ml-2 text-white font-medium">Satellite TV</span>
                        </label>
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.theatrical 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10' }`}>
                          <input 
                            type="checkbox" 
                            name="platforms.theatrical" 
                            checked={form.platforms.theatrical} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" />
                          <span className="ml-2 text-white font-medium">Theatrical</span>
                        </label>
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.inflight 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10'}`}>
                          <input 
                            type="checkbox" 
                            name="platforms.inflight" 
                            checked={form.platforms.inflight} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" />
                          <span className="ml-2 text-white font-medium">Inflight</span>
                        </label>
                        <label className={`flex items-center gap-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          form.platforms.all 
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 shadow-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-yellow-400/60 hover:bg-white/10'
                        }`}>
                          <input 
                            type="checkbox" 
                            name="platforms.all" 
                            checked={form.platforms.all} 
                            onChange={handleChange} 
                            className="w-5 h-5 accent-yellow-400" 
                          />
                          <span className="ml-2 text-white font-medium">All Platforms</span>
                        </label>
                      </div>
                    </div> 
                  )}
                  {/* Additional Notes and Terms - progressive reveal */}
                  {form.rights && form.payment && (Object.values(form.platforms).some(Boolean)) && (
                    <div className={`flex flex-col items-start p-8 rounded-3xl border-2 transition-all shadow-xl min-h-[100px] bg-[#181b29] gap-8 font-sans relative mb-10 border-yellow-400/20 hover:border-yellow-400/60 hover:bg-yellow-400/5 hover:scale-105`}>
                      <span className="font-extrabold text-2xl text-yellow-300 mb-4 font-sans tracking-wide drop-shadow-sm">
                        Additional Notes
                      </span>
                      <textarea 
                        name="additionalNotes" 
                        value={form.additionalNotes} 
                        onChange={handleChange} 
                        className="w-full text-base rounded-lg border border-white/10 bg-[#23232b] text-white px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 placeholder-gray-400 transition-all duration-300 min-h-[120px] resize-none" 
                        placeholder="Any additional information about your content, distribution preferences, or special requirements..." 
                      /> 
                      </div>
                    )}
                  </>
                  )}
                    </div> 
                    </div>
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button type="button" onClick={prevStep} disabled={step === 1} className="px-8 py-3 text-base rounded-xl bg-gradient-to-r from-gray-700 via-gray-800 to-black text-gray-200 font-semibold shadow hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 transition-all duration-300">Previous</button>
          {step < 4 ? (
            <button type="button" onClick={nextStep} className="px-8 py-3 text-base rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold shadow hover:opacity-90 border border-yellow-400 transition-all duration-300">Next</button>
          ) : (
            <button type="submit" className="px-8 py-3 text-base rounded-xl bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 text-black font-semibold shadow hover:opacity-90 border border-yellow-400 transition-all duration-300">Submit</button>
          )} 
          </div>
           </form>
            </div>
             );
            };
            export default ContentSubmissionForm;
