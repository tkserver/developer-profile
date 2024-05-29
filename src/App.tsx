import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import HomePage from "./components/HomePage";
import TechnologiesPage from "./components/TechnologiesPage";
import ContactPage from "./components/ContactPage";
import SkillsPage from "./components/SkillsPage";
import LinksPage from "./components/LinksPage";
import NavbarComponent from "./components/common/Navbar";
import ProjectsPage from "./components/ProjectsPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router basename="developer">
      <div className="App flex flex-col min-h-screen pb-24">
        <NavbarComponent />
        <div className="flex-grow">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  introBackgroundColor="var(--secondary-color)"
                  profileBackgroundColor="var(--primary-color)"
                />
              )}
            />
            <Route
              path="/skills"
              component={SkillsPage}
            />
            <Route
              path="/contact"
              component={ContactPage}
            />
            <Route
              path="/technologies"
              component={TechnologiesPage}
            />
            <Route
              path="/links"
              component={LinksPage}
            />
            <Route
              path="/projects"
              component={ProjectsPage}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
