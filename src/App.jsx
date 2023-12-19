import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Team  from "./components/Team/Team.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css"


export default function App() {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  )
}
