import React from "react";

const OurPartners = () => {
  const partners = [
    {
      name: "AaoNxt",
      logo: "https://imagedelivery.net/dmcxpiIQ1lAgOmi_eg0IzQ/19696ac3-df00-466a-1140-b1c349af2100/public",
    },
    {
      name: "SunNxt",
      logo: "https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw",
    },
    {
      name: "Zee5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg",
    },
    {
      name: "Amazon MX Player",
      logo: "https://i.cdn.newsbytesapp.com/hn/images/l21620240918141552.jpeg",
    },
    {
      name: "RunTV",
      logo: "https://images.mid-day.com/images/images/2024/nov/ANI-29113_d.jpg",
    },
    {
      name: "Tata Play",
      logo: "https://yt3.googleusercontent.com/TKCrVr7fx4r2Y4atm3WEN82tUw3NtTAexkA5Hvzxk13YbRnQ6V1i9MABDNMIBC2kjXTT3WTyqw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "BookMyShow",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrsCzMh96720YCAxVaAMl2J15JBE8b.png",
    },
    {
      name: "Watcho",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SUwT3zzSViOiWx3OCZ73TE0UfawVqF.png",
    },
    {
      name: "Swift TV",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-93SXAZS9BlWasbcs4bYp0vXBJ9v9Th.png",
    },
    {
      name: "Sweet.tv",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QLMfCYlQU3RCz4ixsJnvw9rhknBpGb.png",
    },
    {
      name: "Inflight Dublin",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-60VEz5yp79AtmIy44opRui3jgwFQOV.png",
    },
    {
      name: "VDO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U5lWfvfkLb7kN5zRmyFSIxZlJ5Xk8J.png",
    },
    {
      name: "Chaupal",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kll7XOj59YPJIMiap8Apmx55YDWqDh.png",
    },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-t from-yellow-500/10 to-transparent animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/2 w-1 h-28 bg-gradient-to-t from-orange-500/10 to-transparent animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Our&nbsp;
            </span>
            <span className="text-white">Connections</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to create extraordinary
            entertainment experiences
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 group cursor-pointer"
                >
                  <div className="relative w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 flex items-center justify-center">
                    <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out"
                      />
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-orange-400/0 to-red-400/0 
                        group-hover:from-yellow-400/10 group-hover:via-orange-400/10 group-hover:to-red-400/10 
                        rounded-xl transition-all duration-500 ease-out
                        group-hover:shadow-[0_10px_25px_rgba(255,215,0,0.2)]"
                    />
                  </div>
                  <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-50" />
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
