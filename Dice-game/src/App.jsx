
import styled from 'styled-components'
import './App.css'
import StartGame from './components/StartGame';
import { useState } from 'react';



function App() {
  const [isGameStarted,setIsGameStarted]=useState(false)
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App
