import React from 'react';
import {Canvas} from '@react-three/fiber'
import Experience from './Experience'

const MainPage = () => {
  return (
    <Canvas       
        camera={{
        fov: 64,
        position: [-70.3, 400.5, 800.3],
        }}>
        <Experience/>
    </Canvas>
  );
}

export default MainPage;
