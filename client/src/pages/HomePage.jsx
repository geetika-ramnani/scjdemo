import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProjects from "../components/FeaturedProjects";
import StudioVision from "../components/StudioVision";
import Testimonials from "../components/Testimonials";
import JoinFamily from "../components/JoinFamily";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersSection from "../components/OurPartners";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <StudioVision />
      <Testimonials />
      <PartnersSection />
      <JoinFamily />
    </div>
  );
}
