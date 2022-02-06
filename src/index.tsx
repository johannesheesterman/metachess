import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Game } from './game/Game';
import Model from './models/chess/Scene';


const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 50;
        return () => {
            controls.dispose();
        };
    },
    [camera, gl]);
    return null;
};


ReactDOM.render(
    <Canvas>
         <color attach="background" args={["black"]} />
        <PerspectiveCamera makeDefault position={[25,20,0]} />
        <CameraController />
        <Suspense fallback={null}>
            <Game />
        </Suspense>
        <ambientLight />
        <pointLight position={[20, 20, 10]} />
    </Canvas>
    , document.getElementById("root"));