import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HardSkill from "./components/Skill/HardSkill";
import ProjectSection from "./components/Projects/ProjectSection";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <Hero/>
        <HardSkill/>
        <ProjectSection/>
        <ContactMe/>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
