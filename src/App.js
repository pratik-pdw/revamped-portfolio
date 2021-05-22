import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import "./sass/main.scss";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
