import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import FooterPage from "./components/FooterPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <ProjectsPage />
                <SkillsPage />
                <ContactPage />
                <FooterPage />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
};

export default App;
