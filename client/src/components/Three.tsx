import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const SpaceSky = () => {
  const starsRef = useRef();

  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={5} saturation={0} fade />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
      <Stars radius={100} depth={50} count={1000} factor={3} saturation={0} fade />
      <Stars radius={100} depth={50} count={500} factor={2} saturation={0} fade />
      <Stars radius={100} depth={50} count={250} factor={1} saturation={0} fade />
      <Stars radius={100} depth={50} count={100} factor={0.5} saturation={0} fade />
      <Stars radius={100} depth={50} count={50} factor={0.25} saturation={0} fade />
    </Canvas>
  );
};

export default SpaceSky;
