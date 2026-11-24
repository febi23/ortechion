import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, RoundedBox, Torus } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const ref = useRef();
  useFrame((state, dt) => {
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x += dt * 0.1;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.25, 32]} />
      <MeshDistortMaterial
        color="#6d4aff"
        emissive="#2a1680"
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.6}
        distort={0.38}
        speed={2}
      />
    </mesh>
  );
}

function Rings() {
  const group = useRef();
  useFrame((state, dt) => {
    group.current.children.forEach((ring, i) => {
      ring.rotation.z += dt * (0.2 + i * 0.12) * (i % 2 ? -1 : 1);
    });
  });
  const rings = [
    { r: 2.0, rot: [Math.PI / 2.4, 0, 0], color: '#22d3ee' },
    { r: 2.45, rot: [Math.PI / 1.7, Math.PI / 5, 0], color: '#a78bfa' },
    { r: 2.9, rot: [Math.PI / 2.1, -Math.PI / 4, 0], color: '#f472b6' },
  ];
  return (
    <group ref={group}>
      {rings.map((ring, i) => (
        <Torus key={i} args={[ring.r, 0.012, 16, 160]} rotation={ring.rot}>
          <meshBasicMaterial color={ring.color} transparent opacity={0.65} />
        </Torus>
      ))}
    </group>
  );
}

/* Small glassy "module" cubes orbiting the core — each represents an ERP app */
function ModuleNodes() {
  const group = useRef();
  const nodes = useMemo(() => {
    const colors = ['#22d3ee', '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#60a5fa', '#fb7185', '#c084fc'];
    return colors.map((c, i) => {
      const angle = (i / colors.length) * Math.PI * 2;
      const radius = 2.6 + (i % 3) * 0.35;
      return {
        color: c,
        pos: [Math.cos(angle) * radius, Math.sin(angle * 2) * 0.9, Math.sin(angle) * radius],
        size: 0.22 + (i % 3) * 0.06,
      };
    });
  }, []);

  useFrame((state, dt) => {
    group.current.rotation.y += dt * 0.18;
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <Float key={i} speed={2 + i * 0.2} rotationIntensity={2} floatIntensity={1.2}>
          <RoundedBox args={[n.size, n.size, n.size]} radius={0.05} position={n.pos}>
            <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={0.55} metalness={0.4} roughness={0.2} />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
}

/* Gently tilts the whole scene toward the pointer */
function Rig({ children }) {
  const ref = useRef();
  const target = useMemo(() => new THREE.Vector2(), []);
  useFrame((state) => {
    target.set(state.pointer.x, state.pointer.y);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, target.x * 0.35, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -target.y * 0.25, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={50} color="#f472b6" />
      <pointLight position={[0, 4, -4]} intensity={40} color="#a78bfa" />
      <Rig>
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <Core />
        </Float>
        <Rings />
        <ModuleNodes />
      </Rig>
      <Sparkles count={120} scale={[10, 8, 6]} size={2.2} speed={0.4} color="#a5b4fc" />
    </Canvas>
  );
}
