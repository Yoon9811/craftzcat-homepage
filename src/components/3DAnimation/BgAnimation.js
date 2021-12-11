import React, { useState, useMemo } from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import { VideoTexture } from 'three';


  const Scene = () => {
    const materials = useLoader(MTLLoader, "cat.mtl");
    const obj = useLoader(OBJLoader, "cat.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    
    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
  };

  const BgAnimation = () => {
    return (
      <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
    
     
    )
}

export default BgAnimation;
