// ... existing imports ...
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
// Admin and Non-Admin related routes
import IntroVideo from "./pages/IntroVideo";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CarrersPage";
import TeamPage from "./pages/TeamPage";
import TalentPage from "./pages/TalentPage";
import ProjectsPage from "./pages/ProjectsPage";
import AgreementModal from "./pages/multistepform/MultiStepForm";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/chatbot/ChatBot";
import DistributionPage from "./pages/distributionPage/DistributionPage";
import ForgotPassword from "./pages/ForgotPassword";
import OAuthCallback from "./pages/OAuthCallback";
import NotFound from "./pages/NotFound";
// Admin related imports
import Admin from "./pages/admin/Admin";
import CreateUser from "./pages/admin/CreateUser";
import ViewUsers from "./pages/admin/ViewUsers";

// Protected Routes import
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { RevenueProvider } from "./pages/distributionPage/RevenueContext";
import ScrollToTop from "./components/ScrollToTop";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function AppContent() {
  const [showLanding, setShowLanding] = useState(false);
  const location = useLocation();
  const hideLayoutComponents = [
    "/",
    "/signin",
    "/signup",
    "/forgotpassword",
    "/404",
  ].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/*        <Route
          path="/"
          element={
            !showLanding ? (
              <IntroVideo onVideoEnd={() => setShowLanding(true)} />
            ) : (
              <LandingPage />
            )
          }
        />
*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/agreement" element={<AgreementModal />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/distribution"
          element={
            <RevenueProvider>
              <DistributionPage />
            </RevenueProvider>
          }
        />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/oauth-callback" element={<OAuthCallback />} />
        <Route
          element={<ProtectedRoutes allowedRoles={["admin", "user"]} />}
        ></Route>

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/viewusers" element={<ViewUsers />} />
        </Route>
      </Routes>
      {!hideLayoutComponents && <Navbar />}
      {!hideLayoutComponents && <Footer />}
      {!hideLayoutComponents && <ChatBot />}
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
