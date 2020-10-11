import React from 'react';
import Magic from "../assets/images/magicball.png";
import styled from "styled-components";

const MysticIcon = styled.img`
    width: 80%;
`;

export default function Magic_Ball() {
    return (
        <div className="magic-ball">
        <MysticIcon src ={Magic} alt="magic 8 ball character" />
         </div>
    )
}
