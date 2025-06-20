// ... existing imports ...
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import IntroVideo from "./pages/IntroVideo";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [showLanding, setShowLanding] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Root route: controls intro video and landing page */}
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
      </Routes>
    </Router>
  );
}

export default App;
