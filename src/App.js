import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Components
import HeaderComponent from "./components/layout/HeaderComponent";
import FooterComponent from "./components/layout/FooterComponent";
import NotFoundComponent from "./components/common/NotFoundComponent";
import ScrollToTopComponent from "./components/common/ScrollToTopComponent";

// Pages
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/AboutScreen";
import Portfolio from "./pages/PortfolioScreen";
import Contact from "./pages/ContactScreen";
import Blog from "./pages/BlogScreen";
import SinglePostComponent from "./pages/SinglePostComponent";

const AppContent = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="flex flex-col min-h-screen bg-googleBg">
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <div>
          {location.pathname !== "/" && <HeaderComponent />}
          <main className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<SinglePostComponent />} />

              <Route
                path="*"
                element={
                  <div className="h-screen flex items-center justify-center">
                    <NotFoundComponent />
                  </div>
                }
              />
            </Routes>
          </main>
          {location.pathname !== "/" && <FooterComponent />}

          <ScrollToTopComponent />

          <SpeedInsights />
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
