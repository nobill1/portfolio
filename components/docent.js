import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const MODEL = "/stylized+adult+3d+model.glb";

// Eases the model's yaw toward state.yaw, which the page writes from scroll.
function Model({ state }) {
  const { scene } = useGLTF(MODEL);
  const ref = useRef();
  useFrame((_, dt) => {
    const g = ref.current;
    if (!g) return;
    const k = state.reduced ? 1 : 1 - Math.pow(0.002, dt);
    g.rotation.y += (state.yaw - g.rotation.y) * k;
  });
  return (
    <group ref={ref}>
      {/* The model's front faces +X in the file; a quarter turn faces the camera at yaw 0. */}
      <primitive object={scene} scale={6} position={[0, -3.6, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
}

export default function Docent({ state, dark }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 13], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        {/* Rim and fill follow the page accent: teal on navy, rose on near-black. */}
        <ambientLight intensity={0.5} color={dark ? "#d2b8bc" : "#b3b0d6"} />
        <directionalLight position={[4, 6, 5]} intensity={1.1} color="#f3f0e8" />
        <directionalLight position={[-6, 3, -4]} intensity={1.4} color={dark ? "#f43f5e" : "#71c4bd"} />
        <Environment files="/neon_photostudio_1k.hdr" />
        <Model state={state} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL);
