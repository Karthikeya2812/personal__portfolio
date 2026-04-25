import { useRef, useMemo, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll } from 'framer-motion'
import * as THREE from 'three'
import { Sphere, Text, Stars, Torus, useTexture, useCursor } from '@react-three/drei'

// Constants
const JOURNEY_LENGTH = 2000;


// Procedural Texture Generator
const createPlanetTexture = (type) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (type === 'mars') {
    ctx.fillStyle = '#ff4400'; // Much brighter red/orange
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2000; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 12, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(150, 30, 0, 0.6)' : 'rgba(255, 100, 20, 0.5)';
      ctx.fill();
    }
  } else if (type === 'jupiter') {
    for (let i = 0; i < 512; i++) {
      const wave = Math.sin(i * 0.03) + Math.sin(i * 0.1);
      ctx.fillStyle = wave > 0.5 ? '#ffb366' : '#ffd9b3'; // Brighter gas bands
      if (Math.random() > 0.98) ctx.fillStyle = '#cc7a00';
      ctx.fillRect(0, i, 512, 2);
    }
    // Great red spot
    ctx.beginPath();
    ctx.ellipse(256, 300, 40, 20, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3300';
    ctx.fill();
  } else if (type === 'earth') {
    ctx.fillStyle = '#1a8cff'; // Brighter ocean
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 60 + 20, 0, Math.PI * 2);
      ctx.fillStyle = '#33cc33'; // Brighter green continents
      ctx.fill();
    }
    // Clouds
    for (let i = 0; i < 1000; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fill();
    }
  } else if (type === 'neptune') {
    ctx.fillStyle = '#3399ff'; // Brighter ice giant blue
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 512; i++) {
      ctx.fillStyle = Math.sin(i * 0.05) > 0.8 ? 'rgba(255,255,255,0.3)' : 'transparent';
      ctx.fillRect(0, i, 512, 4);
    }
  } else if (type === 'sun') {
    ctx.fillStyle = '#ffaa00'; // Bright sun base
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 3000; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 20, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 0, 0.8)' : 'rgba(255, 50, 0, 0.6)';
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
}

const ProjectPlanet = ({ radius, orbitRadius, speed, type, name, angleOffset, positionY }) => {
  const groupRef = useRef()
  const textRef = useRef()
  const planetRef = useRef()
  const texture = useMemo(() => createPlanetTexture(type), [type])

  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * (hovered ? 0.2 : 1)
    }
    if (textRef.current) {
      // Text always faces the camera
      textRef.current.lookAt(state.camera.position)
    }
    if (planetRef.current) {
      const targetScale = hovered ? 1.2 : 1
      planetRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <group position={[0, positionY, 0]}>
      {/* Visible Orbit Ring */}
      <Torus args={[orbitRadius, 0.15, 64, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={hovered ? 0.6 : 0.2} />
      </Torus>

      <group ref={groupRef}>
        <group rotation={[0, angleOffset, 0]}>
          <group 
            position={[orbitRadius, 0, 0]}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
            onPointerOut={(e) => setHovered(false)}
          >
            <Sphere ref={planetRef} args={[radius, 64, 64]}>
              <meshStandardMaterial map={texture} roughness={0.4} metalness={0.2} />
            </Sphere>
            
            {/* Saturn Ring for Jupiter/Saturn equivalent */}
            {type === "jupiter" && (
              <Torus args={[radius + 5, 0.6, 64, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
                <meshStandardMaterial color="#ffcc80" transparent opacity={0.8} />
              </Torus>
            )}

            <Text 
              ref={textRef}
              position={[0, radius + 5, 0]} 
              fontSize={4} 
              color="#ffffff" 
              outlineWidth={0.3} 
              outlineColor="#000000"
            >
              {name}
            </Text>
          </group>
        </group>
      </group>
    </group>
  )
}

const SolarSystem = () => {
  const sunTexture = useMemo(() => createPlanetTexture('sun'), [])

  return (
    <group position={[0, -20, -1050]} rotation={[0.3, 0, 0.05]}>
      {/* Point light exactly at the Sun to light up the orbiting planets */}
      <pointLight intensity={100} distance={1000} color="#fff1e0" />

      {/* Central Sun - Using Basic Material so it glows brightly regardless of lighting */}
      <Sphere args={[20, 64, 64]}>
        <meshBasicMaterial map={sunTexture} />
      </Sphere>

      {/* Title Text */}
      <Text position={[0, 30, 0]} fontSize={5} color="#FAFF00" outlineWidth={0.2} outlineColor="#000000" rotation={[-0.3, 0, -0.05]}>
        CORE SKILLS
      </Text>

      {/* Orbiting Projects */}
      <ProjectPlanet radius={3} orbitRadius={45} speed={0.004} type="mars" name="AI Traffic Control" angleOffset={0} positionY={0} />
      <ProjectPlanet radius={5} orbitRadius={75} speed={0.003} type="jupiter" name="Smart Edu Platform" angleOffset={Math.PI / 2} positionY={0} />
      <ProjectPlanet radius={4} orbitRadius={105} speed={0.005} type="earth" name="Crop Disease AI" angleOffset={Math.PI} positionY={0} />
      <ProjectPlanet radius={7} orbitRadius={140} speed={0.002} type="neptune" name="Disaster Management" angleOffset={Math.PI * 1.5} positionY={0} />
    </group>
  )
}

const EarthSurface = ({ scrollProgress }) => {
  const earthRef = useRef()
  // Use a highly reliable external CDN for the Blue Marble texture to avoid Vite caching issues
  const earthTexture = useTexture('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  
  // Camera stops at Z = -2000.
  // Earth is placed at Z = -2105 with Radius = 100.
  // This means the surface is exactly 5 units away from the camera at the very end of the scroll.
  const earthZ = -2105
  const radius = 100

  useFrame(() => {
    const p = scrollProgress.get()
    
    if (earthRef.current) {
      // Gentle spin
      earthRef.current.rotation.y += 0.001
      earthRef.current.rotation.x = 0.2 // Tilt
    }
  })

  return (
    <group position={[0, -30, earthZ]}>
      {/* Add a light source specifically for this massive earth so it's beautifully lit */}
      <pointLight position={[50, 50, 150]} intensity={1.5} color="#ffffff" />
      
      <Sphere ref={earthRef} args={[radius, 128, 128]}>
        <meshStandardMaterial 
          map={earthTexture}
          roughness={0.6}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosphere Glow */}
      <Sphere args={[radius + 2, 64, 64]}>
        <meshBasicMaterial color="#1a8cff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>
    </group>
  )
}

const SceneControl = ({ scrollProgress }) => {
  useFrame((state) => {
    // Camera moves forward continuously from 0 to -2000
    const p = scrollProgress.get()
    const targetZ = -p * JOURNEY_LENGTH

    // Mouse parallax effect
    const parallaxX = state.pointer.x * 10
    const parallaxY = state.pointer.y * 10

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, parallaxX, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, parallaxY, 0.05)
    state.camera.position.z = targetZ
  })

  return (
    <>
      <ambientLight intensity={1.5} /> {/* Increased ambient light for much brighter planets */}
      <directionalLight position={[100, 200, 100]} intensity={2.5} />
      <directionalLight position={[-100, -200, -100]} intensity={1} color="#00ffff" />
      
      {/* Settling Galaxy (Background Stars visible entirely) */}
      <Stars radius={300} depth={150} count={10000} factor={6} saturation={0} fade speed={1.5} />
      
      <SolarSystem />
      
      {/* Only suspend the Earth surface so the rest of the galaxy renders instantly! */}
      <Suspense fallback={null}>
        <EarthSurface scrollProgress={scrollProgress} />
      </Suspense>
    </>
  )
}

export default function CosmicBackground() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed inset-0 w-full h-full bg-dark-950 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 4000 }}>
        <SceneControl scrollProgress={scrollYProgress} />
      </Canvas>
      <div className="absolute inset-0 bg-dark-950/40 mix-blend-multiply pointer-events-none" />
    </div>
  )
}
