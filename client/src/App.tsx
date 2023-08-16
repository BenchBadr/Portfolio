import React, {useState, useEffect, useRef, sceneRef} from 'react'
import * as THREE from 'three';

export const App = () => {
    return (
      <>
        <h1>Three.js Scene</h1>
        <Scene />
      </>
    );
}

export const Scene = () => {
  const sceneRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Attach the renderer's DOM element to the sceneRef
  useEffect(() => {
    sceneRef.current.appendChild(renderer.domElement);
    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const geometry = new THREE.BoxGeometry(3, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // Animation function
  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  // Resize handler function
  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
  };

  // Attach the resize event listener and handle initial resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={sceneRef} />;
};




export const Ai = () => {
  const [data, setData] = useState({ output: '' });

  useEffect(() => {
    fetch("/api/gpt3-5-turbo/", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: "Hello, who are you ?" }) 
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }, []);
  console.log(data)
  return (
    <div>
      {data.output.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <p>{data.output}</p>
      )}
    </div>
  );
};


