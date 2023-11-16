import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skill/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <BrowserRouter>
          <Header/>
          <Hero/>
          <Skills/>
          <Projects/>
          <ContactMe/>
          <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
