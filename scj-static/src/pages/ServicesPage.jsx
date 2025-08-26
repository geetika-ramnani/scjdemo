import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [currentsection, setcurrentsection] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      title: "Content Acquisition",
      description:
        "we travel across genres, languages, and borders, handpicking content that sparks emotion and captures imagination. whether it’s an indie gem or a blockbuster hit, if it has the power to connect, we’ll bring it onboard.",
      image: "/posters/marketing.jpg",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Digital Distribution",
      description:
        "from the smallest screen in a pocket to the largest in a cinema hall, we deliver content to where the audience is — partnering with ott platforms, fast channels, and broadcasters to ensure your content is never out of reach.",
      image: "/posters/distribution.jpg",
      gradient: "from-green-500 to-teal-500",
      link: "/distribution",
    },
    {
      title: "Licensing and Rights Management",
      description:
        "Every piece of content deserves protection and respect. We navigate the complex world of AVOD, TVOD, SVOD, and FAST models, making sure creators retain value while audiences get access.",
      image: "/posters/distribution.jpg",
      gradient: "from-orange-500 to-red-500",
      link: "/distribution",
    },
    {
      title: "Monetization Strategies",
      description:
        "Great content should not just be seen — it should reward its creators. We design multi-platform revenue plans so content lives longer, earns better, and reaches farther.",
      image: "/posters/distribution.jpg",
      gradient: "from-green-500 to-teal-500",
      link: "/distribution",
    },
    {
      title: "Strategic Partnerships",
      description:
        "We believe content grows stronger when shared. Our collaborations with production houses, distributors, and streaming networks create bridges between creators and the global stage.",
      image: "/posters/distribution.jpg",
      gradient: "from-orange-500 to-red-500",
      link: "/distribution",
    },
  ];

  useEffect(() => {
    const handlescroll = () => {
      const scrollposition = window.scrollY;
      const windowheight = window.innerHeight;

      const sectionindex = Math.round(scrollposition / windowheight);
      setcurrentsection(sectionindex);
    };

    window.addEventListener("scroll", handlescroll, { passive: true });
    handlescroll();

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <div className="bg-black">
      {/* hero section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-5xl md:text-7xl text-transparent">
              Our&nbsp;
            </span>
            <span className="text-white text-5xl md:text-7xl">Services</span>
          </h1>

          {/* main description */}
          <p className="text-gray-200 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
            from vision to viewers — we make it happen.
          </p>

          {/* supporting lines */}
          <div className="space-y-2 max-w-3xl mx-auto">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              every piece of content has a soul. our job is to ensure it finds
              the audience it was born for. at scj entertainments, we go beyond
              transactions — we build journeys for content.
            </p>
          </div>
        </div>
      </section>

      {/* services sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className="min-h-[80vh] py-16 flex items-center relative overflow-hidden"
        >
          {/* background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12 items-center">
            <div
              className={`transform transition-all duration-700 ease-out ${
                currentsection === index + 1
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-6 opacity-80"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                {service.subtitle && (
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}
                  >
                    {service.subtitle}
                  </h3>
                )}
                <p className="text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
              </div>

              {/* learn more button */}
              <button
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  currentsection === index + 1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-80"
                }`}
                style={{ transitionDelay: "300ms" }}
                onClick={() => {
                  if (service.link) {
                    navigate(service.link);
                  }
                }}
              >
                <span className="relative z-10">learn more</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* right side - image with effects */}
            <div
              className={`relative transform transition-all duration-700 ease-out ${
                currentsection === index + 1
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-4 opacity-80 scale-95"
              }`}
            >
              <div className="relative group">
                {/* enhanced animated border */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse`}
                ></div>

                {/* image container */}
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-110"
                  />

                  {/* enhanced overlay effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>

                  {/* enhanced floating elements */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} animate-ping shadow-lg`}
                    ></div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} opacity-70 animate-pulse shadow-lg`}
                    ></div>
                  </div>
                  <div className="absolute top-1/2 right-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} opacity-80 animate-bounce shadow-md`}
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* enhanced service number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-black to-gray-800 border-2 border-white/30 flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* fixed section indicator - right side */}
          <div className="hidden md:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col space-y-3">
              {services.map((serviceitem, dotindex) => (
                <div
                  key={dotindex}
                  className={`w-2.5 h-10 md:w-3 md:h-12 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 ${
                    currentsection === dotindex + 1
                      ? `bg-gradient-to-b ${serviceitem.gradient} shadow-lg opacity-100`
                      : "bg-white/30 hover:bg-white/50 opacity-60"
                  }`}
                  onClick={() => {
                    window.scrollTo({
                      top: (dotindex + 1) * window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;
