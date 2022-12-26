import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import { ThemeToggler } from "../components/ThemeToggler";
import { useTheme } from "next-themes";
import { useEffect } from "react";
function HomePage() {
  return (
    <>
      <ThemeToggler />
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

export default HomePage;
