import React from 'react';
import styled from "styled-components";
import { GlobalStyles } from "./Styles";
import Magic from "../assets/images/magicball.png";
import { Link } from 'react-router-dom';
import { TimerButton } from "./Styles";
import {SmallHeadline} from "./Styles";

const GeneratorWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
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
    @media (min-width: 768px) {
        margin: 20px auto;
        transform: scale(1.1);
      }
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
        <SmallHeadline style={{marginTop: "0"}}>{props.chooseRandomActivity.activity}</SmallHeadline>
        <Link to="/timer" style={{display: "flex", justifyContent: "center", textDecoration: "none"}}><TimerButton>Start This Activity</TimerButton></Link>
        </GeneratorWrapper>
        </>
      
    )
    }
   else {
       return (
        <>
        <GlobalStyles/>
        <SmallHeadline style={{marginTop: "30%"}}>Please choose at least one category</SmallHeadline>
        <Link to="/" style={{display: "flex", justifyContent: "center", textDecoration: "none"}}><TimerButton>Back</TimerButton></Link>
        </>
       )
       
   }
}


export default Generator;