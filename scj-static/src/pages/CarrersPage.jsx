import React from "react";

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Film Director",
      department: "Production",
      type: "Full-time",
      location: "Mumbai, India",
      description:
        "Lead creative vision for feature films and digital content projects.",
    },
    {
      title: "Music Producer",
      department: "Audio",
      type: "Contract",
      location: "Remote",
      description: "Produce and oversee music projects across various genres.",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Mumbai, India",
      description:
        "Develop and execute marketing strategies for entertainment content.",
    },
    {
      title: "Video Editor",
      department: "Post-Production",
      type: "Full-time",
      location: "Mumbai, India",
      description: "Edit and enhance video content for various platforms.",
    },
    {
      title: "Talent Coordinator",
      department: "Talent Management",
      type: "Full-time",
      location: "Mumbai, India",
      description:
        "Coordinate talent schedules and manage artist relationships.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Internships Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              <span className="text-white">Internships at </span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                SCJ Entertainments
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed mb-10">
              Your first step into the world of content. At SCJ Entertainments,
              we believe fresh perspectives bring fresh energy. Our internship
              program is designed to give aspiring professionals a hands-on
              introduction to the fast-paced world of global content acquisition
              and distribution.
            </p>

            {/* Why intern with us */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Real industry exposure",
                  desc: "Work directly on live projects and actual content deals.",
                },
                {
                  title: "Mentorship",
                  desc: "Learn from experienced professionals who’ve shaped entertainment markets worldwide.",
                },
                {
                  title: "Skill development",
                  desc: "Gain insights into content acquisition, licensing, marketing, and distribution.",
                },
                {
                  title: "Networking",
                  desc: "Build connections with creators, platforms, and industry experts.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
                >
                  <span className="text-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    {item.title}
                  </span>

                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Departments */}
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Departments open for internships
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Content acquisition and programming",
                "Digital marketing and promotions",
                "Licensing and rights management",
                "Partnership development and operations",
              ].map((dept, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full"
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>

          {/* Careers Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Join&nbsp;
              </span>
              <span className="text-white">Our Team</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Be part of creating extraordinary entertainment experiences
            </p>
          </div>

          {/* Open Positions */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
