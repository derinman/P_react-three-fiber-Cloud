import React, {useRef, useMemo, Suspense} from 'react'
import Box from './components/Box'
import './styles.css'

import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'

import smokeImg from './img/smoke.png'

//單一 fog
function Smoke({position, rotation, speed}) {
  
  const smokeRef = useRef(null)
  const [ smokeTexture ] = useLoader(THREE.TextureLoader, [ smokeImg ])
  
  useFrame(() => (smokeRef.current.rotation.z += speed))
  console.log(smokeRef)

  return (
    <mesh 
      ref={smokeRef}
      position={position} 
      rotation={rotation}
    >
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshLambertMaterial attach="material" map={smokeTexture} transparent opacity={0.3} />
    </mesh>
  )
}

function Smokes({count}){
  
  const smokes = useMemo(
    () =>
      new Array(count).fill().map(()=>{
        return({
          position: [Math.random() * 50 - 25, Math.random() * 30 - 15, Math.random()*50 - 50 ],
          rotation: [0, 0, Math.random()*2*Math.PI ],
          speed: Math.random()*0.003
        })
      }),[count])
  
  //console.log(smokes)
  return smokes.map((props,i)=><Smoke key={i} {...props}/>)
}

const App =()=>{
  
  return(

    <Canvas>
            
      <Suspense fallback={null}>{/*due to useLoader*/}
        <Smokes count={35}/>
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