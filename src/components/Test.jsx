import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`;

const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls />
                <mesh>
                    <boxGeometry args={[1,1,1]}/>
                </mesh>
            </Canvas>
        </Container>
    )
}

export default Test