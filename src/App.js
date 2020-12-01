import React from 'react'
import Box from './components/Box'
import './styles.css'
import { Canvas } from 'react-three-fiber'

const App =()=>{
  
  return(

    <Canvas>
    
      <ambientLight 
        color={'#555555'} 
        intensity={1}
      />
      <directionalLight 
        color={'#ff8c19'} 
        intensity={1}
        position={[0, 0, 1]} 
      />
    
      <pointLight 
        color={'#cc6600'}  
        intensity={50}
        distance={450}
        decay={1.7}
        position={[200, 300, 100]} 
      />
      <pointLight 
        color={'#d8547e'}  
        intensity={50}
        distance={450}
        decay={1.7}
        position={[100, 300, 100]} 
      />
      <pointLight 
        color={'#3677ac'}  
        intensity={50}
        distance={450}
        decay={1.7}
        position={[300, 300, 200]} 
      />

      {/*color,near,far*/}
      <fog attach="fog" args={['#03544e', 5, -5]}  />
      
      <Box position={[-1.2, 1.8, 0]}/>
      <Box position={[1.2, 1.8, 0]}/>
      <Box position={[-1.2, -1.8, 0]}/>
      <Box position={[1.2, -1.8, 0]}/>


    </Canvas>

  )
}

export default App;