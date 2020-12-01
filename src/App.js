import React, {useMemo , Suspense} from 'react'
import Box from './components/Box'
import './styles.css'

import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'

import smokeImg from './img/smoke.png'
import starsImg from './img/stars.jpg'



function Stars({ count = 50 }) {
  
  const [ smoke123 , stars123 ] = useLoader(THREE.TextureLoader, [ smokeImg, starsImg ])
  
  const positions = useMemo(() => {
    let positions = []
    for (let i = 0; i < count; i++) {
      positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -40 : 40))//x
      positions.push(0)//y
      positions.push(Math.random()*500 - 500 )//z
    }
    return new Float32Array(positions)
  }, [count])
  
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={1} sizeAttenuation color="white" transparent opacity={0.8} />
    </points>
  )
}

const App =()=>{
  
  return(

    <Canvas>
      <Suspense fallback={null}>
        <Stars/>
      </Suspense>
      
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