import React from 'react';
import Magic_Ball from "./Magic_Ball";
import styled from "styled-components";
import { GlobalStyles } from "./Styles";
import { colors } from "./Styles";
import Nav from "./Nav";

const GeneratorWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
`;

const LargeButton = styled.button`
    color: black;
    background-color: ${colors.secondary.dark};
    border: none;
    border-radius: 15px;
    font-family: 'Grandstander', cursive;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    -moz-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    margin: auto;
    height: 70px;
`;

function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    return (
       <>
       <GlobalStyles />
       <Nav />
       <GeneratorWrapper>
        <Magic_Ball/>
        <LargeButton onClick={props.onHandleFilteredActivities}>Start Game</LargeButton>
        <p>{props.chooseRandomActivity.activity}</p>
        </GeneratorWrapper>
        </>
      
    )
}

export default Generator;