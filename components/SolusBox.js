import React, { Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/solus.glb");

  return <primitive object={gltf.scene} position={[0, 0, -3]}/>;
};

export const SolusBox = () => {

  return (
    <div style={{width: "100%", height: "400px"}}>
      <Canvas>
        <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset="apartment" />
        </Suspense>
      </Canvas>
    </div>
  );
};
