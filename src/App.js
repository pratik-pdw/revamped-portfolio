import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import './sass/main.scss'
function App() {
  return (
    <>
      <Header />
      <main>
        <TechStack />
        <Projects />
      </main>
    </>
  )
}

export default App
