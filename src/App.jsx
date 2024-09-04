import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import Experiens from "./screen/experiens";
import Footer from "./components/footer";
import Skill from "./screen/skill";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <section className="hero">
          <Hero />
        </section>
        <section className="ex">
          <Experiens />
        </section>
          <Skill />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
