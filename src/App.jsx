import { useState } from 'react'
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home';
import PerSonalProjEct from './Pages/PerSonalProjEct/PerSonalProjEct';
import Skills from './Pages/Skills/Skills'

function App() {

  return (
    <>
     <NavBar />
     <Home />
     <PerSonalProjEct />
     <Skills />
    </>
  )
}

export default App;
