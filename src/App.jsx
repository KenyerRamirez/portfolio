import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsPage from "./components/ProjectPage/ProjectsPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import FooterPage from "./components/FooterPage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";

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
                <ExperiencePage />
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
