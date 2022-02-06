import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFResult } from '../types/GLTFResult';
import { Player } from './Player';
import { ChessPiece, ChessPieceColor, ChessPieceType } from './ChessPiece';


type ChessPiece = {
    type: ChessPieceType;
    color: ChessPieceColor;
    position: [number, number, number];
}

const chessPieces: ChessPiece[] = [
    // White
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [9.83, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [7.06, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [4.25, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [1.48, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [-1.38, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [-4.19, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position: [-7, 7.05, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.White, position:[-9.64, 7.05, 0] },
    { type: ChessPieceType.Rook, color: ChessPieceColor.White, position: [-9.76, 9.74, 0] },
    { type: ChessPieceType.Rook, color: ChessPieceColor.White, position: [9.69, 9.74, 0] },
    { type: ChessPieceType.Knight, color: ChessPieceColor.White, position: [6.97, 9.7, 0] },
    { type: ChessPieceType.Knight, color: ChessPieceColor.White, position: [-6.98, 9.7, 0] },
    { type: ChessPieceType.Bishop, color: ChessPieceColor.White, position: [-4.22, 9.77, 0] },
    { type: ChessPieceType.Bishop, color: ChessPieceColor.White, position: [4.14, 9.77, 0] },
    { type: ChessPieceType.King, color: ChessPieceColor.White, position: [1.51, 9.77, 0] },
    { type: ChessPieceType.Queen, color: ChessPieceColor.White, position: [-1.32, 9.7, 0] },  
    
    // Black
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [9.7, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [7.06, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [4.24, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [1.43, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [-1.42, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [-4.19, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [-7, -7.03, 0] },
    { type: ChessPieceType.Pawn, color: ChessPieceColor.Black, position: [-9.77, -7.03, 0] },
    { type: ChessPieceType.Rook, color: ChessPieceColor.Black, position: [-9.63, -9.73, 0] },
    { type: ChessPieceType.Rook, color: ChessPieceColor.Black, position: [9.82, -9.73, 0]},
    { type: ChessPieceType.Knight, color: ChessPieceColor.Black, position:[-6.92, -9.68, 0] },
    { type: ChessPieceType.Knight, color: ChessPieceColor.Black, position: [7.03, -9.68, 0] },
    { type: ChessPieceType.Bishop, color: ChessPieceColor.Black, position: [4.27, -9.75, 0] },
    { type: ChessPieceType.Bishop, color: ChessPieceColor.Black, position: [-4.09, -9.75, 0] },
    { type: ChessPieceType.King, color: ChessPieceColor.Black, position: [-1.46, -9.75, 0] },
    { type: ChessPieceType.Queen, color: ChessPieceColor.Black, position: [1.37, -9.68, 0] },
];




export const Game = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF('models/chess/scene.gltf') as GLTFResult;   
    
    function pieceClicked(){
        console.log('piece clicked!');
    }

    const fillBoard = () => {
        return chessPieces.map(p => (
            <ChessPiece key={p.position} type={p.type} color={p.color} position={p.position} onClick={pieceClicked} />
        ));
    };

    function playerClicked(){
        console.log('player clicked!');
    }

    return (
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.ChessBoard_LO_0.geometry} material={materials.ChessBoard} />
            <Player position={[0, 0, 0]} onClick={playerClicked}></Player>

            {fillBoard()}
        </group>        
    );
};

useGLTF.preload('models/chess/scene.gltf')