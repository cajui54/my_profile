import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import GridSkill from "./components/GridSkills";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Hero />
        <GridSkill />
        <Projects />
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
