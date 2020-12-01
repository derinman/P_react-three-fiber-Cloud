import React, {useState } from 'react'
import Box from './components/Box'
import './styles.css'
import { Canvas } from 'react-three-fiber'

const App =()=>{
  
  return(
    <div>
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 1.8, 0]}/>
    <Box position={[1.2, 1.8, 0]}/>
    <Box position={[-1.2, -1.8, 0]}/>
    <Box position={[1.2, -1.8, 0]}/>
    </Canvas>
    </div>
  )
}

export default App;