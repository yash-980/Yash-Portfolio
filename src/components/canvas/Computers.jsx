import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} position={[0, 0.5, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? [0.6, 0.5, 0.5] : [0.85, 0.85, 0.85]}   // 👈 narrower width on mobile
        position={isMobile ? [1.5, 0.6, -0.5] : [-1, -0.8, -1.5]} 
        rotation={[-0, -0.2, -0.2]}
      />


    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => { setIsMobile(event.matches); };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => { mediaQuery.removeEventListener("change", handleMediaQueryChange); };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // CAMERA ADJUSTMENT: Changed position from [20, 3, 5] to [20, 3, 5] 
      // with a lower FOV (Field of View) to zoom in on the model
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{
        preserveDrawingBuffer: true,
        toneMappingExposure: 1.5
      }}
      style={{ height: '100%', width: '100%' }} // Ensure canvas fills container
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
