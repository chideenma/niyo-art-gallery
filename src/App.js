import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { ArtDetailsPage } from "./pages/ArtDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/arts/:id" element={<ArtDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
