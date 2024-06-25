"use client";
import React, { useState, useRef, Suspense, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Tipagem do componente
interface StarBackgroundProps {
  [key: string]: any;
}

const StarBackground: React.FC<StarBackgroundProps> = React.memo((props) => {
  const ref = useRef<THREE.Group>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.5 })
  );

  const animate = useCallback((state: any, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 25;
    }
  }, []);

  useFrame(animate);

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#A357F7"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

// Adicionando displayName ao componente memoizado
StarBackground.displayName = "StarBackground";

const StarsCanvas: React.FC = () => (
  <div className="w-full h-auto fixed inset-0 z-[-10]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
