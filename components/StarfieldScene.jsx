"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

// Generated once at module load, not inside render — keeps the component
// pure while still giving every session a fixed, non-repeating field.
function buildField(count) {
  const pos = new Float32Array(count * 3);
  const siz = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const radius = 6 + Math.random() * 9;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    pos[i * 3 + 2] = radius * Math.cos(phi) * 0.5 - 4;
    siz[i] = Math.random() * 1.6 + 0.3;
  }
  return [pos, siz];
}

const [FIELD_POSITIONS, FIELD_SIZES] = buildField(2600);

function Field() {
  const groupRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const positions = FIELD_POSITIONS;
  const sizes = FIELD_SIZES;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    target.current.x = state.pointer.x * 0.35;
    target.current.y = state.pointer.y * 0.2;
    groupRef.current.rotation.y += delta * 0.018;
    groupRef.current.rotation.x +=
      (target.current.y - groupRef.current.rotation.x) * 0.02;
    groupRef.current.rotation.z +=
      (target.current.x * 0.15 - groupRef.current.rotation.z) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#e9e6ff"
          transparent
          opacity={0.75}
          sizeAttenuation
          depthWrite={false}
          blending={2}
        />
      </points>
    </group>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    // Three.js camera objects are intentionally mutable — this is the
    // standard R3F pattern for driving a scene imperatively per frame.
    // eslint-disable-next-line react-hooks/immutability
    camera.position.x += (state.pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (state.pointer.y * 0.35 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, -4);
  });
  return null;
}

export default function StarfieldScene({ className = "" }) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Field />
        <Rig />
      </Canvas>
    </div>
  );
}
