// ... existing imports ...
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import IntroVideo from "./pages/IntroVideo";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ServicesPage from "./pages/ServicesPage";
import DistributionPage from "./pages/DistributionPage";
import CareersPage from "./pages/CarrersPage";
import TalentPage from "./pages/TalentPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";

function AppContent() {
  const [showLanding, setShowLanding] = useState(false);
  const location = useLocation();
  const hideNavAndFooter = ["/", "/signin", "/signup", "/forgotpassword"].includes(
    location.pathname
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !showLanding ? (
              <IntroVideo onVideoEnd={() => setShowLanding(true)} />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/distribution" element={<DistributionPage />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      {!hideNavAndFooter && <Navbar />}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
