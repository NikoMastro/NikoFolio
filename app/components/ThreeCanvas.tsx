'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up scene, camera, and renderer
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,  // To make the background transparent
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.style.margin = '0';  // Remove margin from body to make it full screen

    // Load the model and texture
    const gltfLoader = new GLTFLoader();
    const textureLoader = new TextureLoader();

    // Load texture
    const texture = textureLoader.load('/textures/texture.png');

    // Load model
    gltfLoader.load('/models/model.glb', (gltf) => {
      const model = gltf.scene;

      // Apply texture to the model (assuming it has a mesh)
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.map = texture;
        }
      });

      scene.add(model);
    }, undefined, (error) => {
      console.error('An error happened:', error);
    });

    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light with a soft white color
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);



    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      // Optionally, add rotation or other animations here
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeCanvas;
