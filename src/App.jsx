import { useState } from 'react'
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home';
import PerSonalProjEct from './Pages/PerSonalProjEct/PerSonalProjEct';
import Personal from './Pages/PerSonalProjEct/Personal/Personal';
import Skills from './Pages/Skills/Skills'

function App() {

  return (
    <>
     <NavBar />
     <Home />
     <PerSonalProjEct />
     <Personal />
     <Skills />
    </>
  )
}

export default App;
