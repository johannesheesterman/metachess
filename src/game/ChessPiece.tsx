import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../types/GLTFResult";

export enum ChessPieceType {
    _,
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King
}

export enum ChessPieceColor {
    _,
    White,
    Black
}

export const ChessPiece = (props) => {
    if (!props.type) { 
        console.error('Chess piece type not specified.');
        return;
    }

    if (!props.color) {
        console.error('Chess piece color not specified.');
        return;
    }

    const { nodes } = useGLTF('models/chess/scene.gltf') as GLTFResult;

    const rotation = props.color === ChessPieceColor.White ? [0, 0, 0] : [0, 0, -Math.PI];

    return (
        <group {...props} rotation={rotation}>
            {(() => {
                switch(props.type){                    
                    case ChessPieceType.Rook:
                        return <mesh 
                            geometry={nodes.Rook_LOD0001_0.geometry} 
                            material={props.color == ChessPieceColor.White 
                                ? nodes.Rook_LOD0001_0.material
                                : nodes.Rook_LOD0004_0.material} 
                            />;
                    case ChessPieceType.Knight:
                        return <mesh 
                            geometry={nodes.Knight_LOD0001_0.geometry} 
                            rotation={[0, 0, Math.PI / 2]}
                            material={props.color == ChessPieceColor.White 
                                ? nodes.Knight_LOD0001_0.material
                                : nodes.Knight_LOD0004_0.material }
                             />           
                    case ChessPieceType.Bishop:
                        return <mesh 
                            geometry={nodes.Bishop_LOD0001_0.geometry}
                            rotation={[0, 0, -Math.PI / 2]}
                            material={props.color == ChessPieceColor.White 
                                ? nodes.Bishop_LOD0001_0.material
                                : nodes.Bishop_LOD0004_0.material } 
                            />
                    case ChessPieceType.Queen:
                        return <mesh 
                            geometry={nodes.Queen_LOD0001_0.geometry} 
                            material={props.color == ChessPieceColor.White 
                                ? nodes.Queen_LOD0001_0.material
                                : nodes.Queen_LOD0002_0.material } 
                            />;
                    case ChessPieceType.King:
                        return <mesh 
                            geometry={nodes.King_LOD0000_0.geometry} 
                            material={props.color == ChessPieceColor.White 
                                ? nodes.King_LOD0000_0.material
                                : nodes.King_LOD0002_0.material} 
                            />;
                    default:                    
                        return <mesh 
                            geometry={nodes.Pawn_LOD0001_0.geometry}
                            material={props.color == ChessPieceColor.White 
                                ? nodes.Pawn_LOD0001_0.material
                                : nodes.Pawn_LOD0017_0.material} 
                            />;
                }
            })()}
        </group>        
    );
};