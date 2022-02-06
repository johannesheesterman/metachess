import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFResult } from '../types/GLTFResult';
import { Player } from './Player';

export const Game = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF('models/chess/scene.gltf') as GLTFResult;
    return (
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.ChessBoard_LO_0.geometry} material={materials.ChessBoard} />
            <Player position={[0, 0, 0]}></Player>
        </group>        
    );
};

useGLTF.preload('models/chess/scene.gltf')