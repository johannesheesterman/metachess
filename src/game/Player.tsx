import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { GLTFResult } from "../types/GLTFResult";
import { ChessPiece, ChessPieceColor, ChessPieceType } from "./ChessPiece";


export const Player = (props) => {
    const group = useRef();

    return (
        <group {...props}>
            <ChessPiece type={ChessPieceType.Queen} color={ChessPieceColor.White} />
        </group>        
    );
};