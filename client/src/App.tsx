import React, {useState, useEffect, useRef, sceneRef} from 'react'
import * as THREE from 'three';
import SpaceSky, {
  Scene
} from "./components/Three.tsx";

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

export function App() {
  return (
    <>
    <a className="wide">BADR BENCH</a>
    <SpaceSky/>
    </>
  );
}

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


