import { useTheme } from "next-themes";
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model(props) {
  const { scene } = useGLTF('/stylized+adult+3d+model.glb')
  return <primitive object={scene} {...props} />
}

function SafeEnvironment({ preset }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return null; // Don't render environment if it fails to load
  }
  
  return (
    <Environment 
      files="/neon_photostudio_1k.hdr"
      preset={preset} 
      onError={() => setError(true)}
    />
  );
}

export default function Illustration() {
  const { theme } = useTheme();

  const ambientLightColor = theme === 'dark' ? '#f43f5e' : '#1b1464';

  // More intense colors - light mode gets stronger color
  const primaryColor = theme === 'dark' ? '#f43f5e' : '#1b1464'; // Rose red for dark, deep blue for light
  const secondaryColor = theme === 'dark' ? '#fb7185' : '#312e81'; // Lighter rose for dark, lighter blue for light
  const accentColor = theme === 'dark' ? '#fecdd3' : '#6366f1'; // Very light rose for dark, indigo for light

  return (    
    <Canvas
      camera={{ 
        position: [5, 5, 5], 
        fov: 50 
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} color={ambientLightColor} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ambientLight intensity={theme === 'dark' ? 0.6 : 0.8} color={primaryColor} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={theme === 'dark' ? 0.8 : 1.0} 
          color={secondaryColor}
        />
        
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.5} 
          color={accentColor}
        />
        
        <pointLight 
          position={[40, 10, -2]} 
          intensity={0.3} 
          color={primaryColor}
        />
        
        {/* Safe environment with error handling */}
        <SafeEnvironment />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
        />
        
        <Model scale={6} position={[0, -3, 0]} />
      </Suspense>
    </Canvas>
  )
}
