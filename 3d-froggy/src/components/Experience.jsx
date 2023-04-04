import React from 'react';
import{ OrbitControls, useGLTF } from '@react-three/drei'
import { Frog } from './Frog';


const Experience = () => {
  return (
    <>
    <OrbitControls enableZoom={false} />
    <spotLight intensity={50}/>
    <Frog/>

    </>
  );
}

export default Experience;
