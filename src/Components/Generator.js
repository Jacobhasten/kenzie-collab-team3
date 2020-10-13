import React from 'react';
import Magic_Ball from "./Magic_Ball";
import styled from "styled-components";
import { GlobalStyles } from "./Styles";
import { colors } from "./Styles";
import Magic from "../assets/images/magicball.png";
import Nav from "./Nav";
import { Link } from 'react-router-dom';

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

function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    if (props.selectedCategories.length > 0) {return (
       <>

       <GlobalStyles />
       <GeneratorWrapper>
         <MysticIconWrapper 
         onClick={props.onHandleFilteredActivities}
         className={props.ballIsActive ? "magic-ball-active" : "magic-ball"}>
        <MysticIcon src ={Magic} alt="magic 8 ball character" />
         </MysticIconWrapper>
    <p>{props.chooseRandomActivity.activity}</p>
        <LargeButton>Start Game</LargeButton>
        
        </GeneratorWrapper>
        </>
      
    )
    }
   else {
       return (
        <>
        <p>Please choose at least one catergory</p>
        <Link to="/">here</Link>
        </>
       )
       
   }
}


export default Generator;