import React from "react"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-1 h-32 bg-gradient-to-t from-cyan-500/20 to-transparent animate-pulse" />
        <div
          className="absolute bottom-0 right-1/3 w-1 h-24 bg-gradient-to-t from-purple-500/20 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-1 h-28 bg-gradient-to-t from-orange-500/20 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="../public/scj-logo-new.png"
                alt="SCJ Entertainment"
                className="h-16 w-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300"
              />
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We blend cinema, music, and cutting-edge technology to create meaningful, soul-stirring entertainment that
              resonates with audiences worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "projects", label: "Projects" },
                { id: "careers", label: "Careers" },
                { id: "contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-1">Email</div>
                <div className="text-white">info@scjentertainment.com</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Phone</div>
                <div className="text-white">+91 98765 43210</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Address</div>
                <div className="text-white">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 SCJ Entertainment. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
