import React from 'react';
import Magic from "../assets/images/magicball.png";
import styled from "styled-components";

const MysticIconWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-content: center;
`;

const MysticIcon = styled.img`
    width: 80%;
    margin: auto;
`;

export default function Magic_Ball() {
    return (
        <MysticIconWrapper className="magic-ball">
        <MysticIcon src ={Magic} alt="magic 8 ball character" />
         </MysticIconWrapper>
    )
}
