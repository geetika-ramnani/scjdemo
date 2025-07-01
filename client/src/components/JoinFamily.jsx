"use client"

import { useState } from "react"

const JoinFamily = () => {
  const opportunities = [
    {
      id: 1,
      title: "Creative Roles",
      description: "Directors, Writers, Cinematographers",
      icon: "🎬",
      status: "Always Open",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Tech Positions",
      description: "AI Engineers, VFX Artists, Developers",
      icon: "💻",
      status: "High Demand",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Internships",
      description: "Learn from industry professionals",
      icon: "🎓",
      status: "3-6 Months",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="join-us"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-white">Let's Create</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Magic Together
          </span>
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          We're always looking for passionate{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
            storytellers
          </span>
          , innovative{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
            techies
          </span>
          , and creative{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
            dreamers
          </span>{" "}
          to join our family.
        </p>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className={`relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 group hover:scale-105 transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{opportunity.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{opportunity.description}</p>
                <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold">
                  {opportunity.status}
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl scale-110 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">🎓 Apply for Internship</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          <button className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">🤝 Collaborate</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <div className="text-gray-400 text-sm mb-1">Email</div>
              <div className="text-white font-semibold">careers@scjentertainment.com</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Phone</div>
              <div className="text-white font-semibold">+91 98765 43210</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Location</div>
              <div className="text-white font-semibold">Mumbai, Maharashtra</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Response Time</div>
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                Within 48 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinFamily
