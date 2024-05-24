import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Header from "./components/layout/HeaderComponent";
import Footer from "./components/layout/Footer";

// Pages
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/AboutScreen";
import Portfolio from "./pages/PortfolioScreen";
import Contact from "./pages/ContactScreen";
import Blog from "./pages/BlogScreen";

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-googleBg">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
