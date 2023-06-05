
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from 'three';

interface Cube {
	position?: THREE.Vector3 | [number, number, number],
	rotation: number,
	reverse: boolean,
    range: number,
	scale: number,
    color: string,
    speed: number,
}

export default function Cube(props: { config: Cube, onClick?: () => void }) {
    const config = props.config
    const ref = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += config.rotation || 0.0025
        
        if(config.reverse) {
            if(ref.current.position.y < -config.range) 
                ref.current.position.y = config.range
            
            ref.current.position.y -= 0.01 * config.speed
        }

        if(!config.reverse) {
            if(ref.current.position.y > config.range) 
                ref.current.position.y = -config.range

            ref.current.position.y += 0.01 * config.speed
        }
    })

    return (
        <mesh
            ref={ref}
            position={config.position || [0, 0, 0]}
            onClick={props.onClick}
        >
            <boxGeometry args={[config.scale, config.scale, config.scale]}/>
            <meshBasicMaterial color={config.color}/>
            <Edges threshold={15} scale={1.25} color={config.color}/>
        </mesh>
    )
}