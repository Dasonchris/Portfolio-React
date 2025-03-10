import { useState } from 'react'
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home';
import PerSonalProjEct from './Pages/PerSonalProjEct/PerSonalProjEct';
import Personal from './Pages/PerSonalProjEct/Personal/Personal';


function App() {

  return (
    <>
     <NavBar />
     <Home />
     <PerSonalProjEct />
     <Personal />
    </>
  )
}

export default App;
