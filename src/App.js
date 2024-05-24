import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import Header from "./components/layout/HeaderComponent";
import Footer from "./components/layout/FooterComponent";

// Pages
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/AboutScreen";
import Portfolio from "./pages/PortfolioScreen";
import Contact from "./pages/ContactScreen";
import Blog from "./pages/BlogScreen";

const AppContent = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="flex flex-col min-h-screen bg-googleBg">
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <div>
          {location.pathname !== "/" && <Header />}
          <main className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          {location.pathname !== "/" && <Footer />}
        </div>
      </CSSTransition>
    </TransitionGroup>
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
