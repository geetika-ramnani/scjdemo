import React from "react";
import { FaBullseye, FaRocket, FaHeart, FaUsers } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="bg-slate-900 text-gray-100">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto italic">
          We are the keepers of content — curators, connectors, and champions of
          stories that move the world.
        </p>
      </section>

      {/* ABOUT STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          SCJ Entertainments was born from a simple belief — that every great
          piece of content deserves the chance to travel the world. We stand as
          curators and champions of creativity, bringing stories to the people
          who will love them the most.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To be the bridge between creators and the world — where every
              piece of content finds its audience, and every audience finds its
              content.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-orange-400">
              Our Mission
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                🎯 Empower creators with platforms and tools to share globally.
              </li>
              <li>💡 Engage audiences with diverse, meaningful content.</li>
              <li>
                🚀 Elevate entertainment through innovation in distribution.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition">
            <FaHeart className="text-red-400 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Passion for Content</h4>
            <p className="text-gray-300">
              We live and breathe entertainment that matters.
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition">
            <FaUsers className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">
              Integrity in Partnerships
            </h4>
            <p className="text-gray-300">
              Honoring creators, audiences, and collaborators equally.
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition">
            <FaBullseye className="text-orange-400 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Global Perspective</h4>
            <p className="text-gray-300">
              Seeing beyond borders, languages, and trends.
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition">
            <FaRocket className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">
              Innovation in Distribution
            </h4>
            <p className="text-gray-300">
              Smarter, impactful ways to connect content with viewers.
            </p>
          </div>
        </div>
      </section>

      {/* MENTORS */}

      {/* MENTORS */}
      <section className="bg-slate-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Mentors</h2>
          <p className="text-xl text-yellow-400 mb-10 italic">
            Guided by experience, driven by excellence.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Behind SCJ Entertainments stands a group of seasoned mentors —
            industry leaders who have shaped the global entertainment landscape
            for decades. Their wisdom, vision, and industry insight help us
            navigate the complex world of content with confidence and clarity.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Our mentors are not just advisors; they are collaborators,
            visionaries, and guardians of our mission. They bring:
          </p>

          <ul className="text-left max-w-2xl mx-auto text-gray-300 space-y-3 mb-8">
            <li>
              🌍 <span className="font-semibold">Deep industry knowledge</span>{" "}
              – Years of experience in content production, distribution, and
              rights management.
            </li>
            <li>
              🤝 <span className="font-semibold">Global networks</span> – Strong
              relationships with platforms, broadcasters, and studios worldwide.
            </li>
            <li>
              🔮 <span className="font-semibold">Strategic foresight</span> – An
              ability to anticipate market trends and audience shifts.
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            With their guidance, we ensure that every decision we make is rooted
            in both creativity and commercial success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
