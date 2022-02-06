import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../types/GLTFResult";

export enum ChessPieceType {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King
}

export const ChessPiece = (props) => {
    if (!props.type) { 
        console.error('Chess piece type not specified.');
        return;
    }

    const { nodes } = useGLTF('models/chess/scene.gltf') as GLTFResult;

    return (
        <group {...props}>
            {(() => {
                switch(props.type){
                    case ChessPieceType.Pawn:
                        return <mesh geometry={nodes.Pawn_LOD0003_0.geometry} material={nodes.Pawn_LOD0003_0.material} />;
                    case ChessPieceType.Rook:
                        return <mesh geometry={nodes.Rook_LOD0001_0.geometry} material={nodes.Rook_LOD0001_0.material} />;
                    case ChessPieceType.Knight:
                        return <mesh geometry={nodes.Knight_LOD0002_0.geometry} material={nodes.Knight_LOD0002_0.material} rotation={[0, 0, Math.PI / 2]} />           
                    case ChessPieceType.Bishop:
                        return <mesh geometry={nodes.Bishop_LOD0002_0.geometry} material={nodes.Bishop_LOD0002_0.material} rotation={[0, 0, -Math.PI / 2]} />
                    case ChessPieceType.Queen:
                        return <mesh geometry={nodes.Queen_LOD0001_0.geometry} material={nodes.Queen_LOD0001_0.material} />;
                    case ChessPieceType.King:
                        return <mesh geometry={nodes.King_LOD0000_0.geometry} material={nodes.King_LOD0000_0.material} />;
                }
            })()}
        </group>        
    );
};