import React from 'react';
import "../App.scss";
import styled from "styled-components";
import { colors } from "./Styles";
import Nav from "./Nav.js";
import {Link} from "react-router-dom";
import Splash from './Splash';

const Headline = styled.h1`
        text-align: center;
        width: 90%;
        margin:  20px auto;
        color: ${colors.primary.dark};
    `;
const ToggleWrapper = styled.div`
&:checked,:label,:span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
const ToggleCheckbox = styled.input`
&:checkbox {
height: 0;
width: 0;
visibility: hidden;
}
`;

const Toggle = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 25px;
    background: ${colors.secondary.dark};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
  `;

const ToggleButton = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    &:active {
    width: 45px;
    }
  `;

function Home(props) {
        
    
        return(
        <> 

        <Nav />


        <Splash>
            <Headline>What types of activities would you like Jake to do today?</Headline>
            <ToggleWrapper>
            <p>Creative Activities</p>
            <ToggleCheckbox type="checkbox" name="creative" 
            defaultChecked={props.selectedCategories.includes('creative')}
            onChange={props.onHandleCheckbox}/>
            <Toggle><ToggleButton/></Toggle>
            <p>Physical Acitivities</p>
            <ToggleCheckbox type="checkbox" name="physical"
            defaultChecked={props.selectedCategories.includes('physical')}
            onChange={props.onHandleCheckbox}/>
            <Toggle><ToggleButton/></Toggle>
            <p>Educational Acitivities</p>
            <ToggleCheckbox type="checkbox" name="educational"
            defaultChecked={props.selectedCategories.includes('educational')}
            onChange={props.onHandleCheckbox} />
            <Toggle><ToggleButton/></Toggle>
            </ToggleWrapper>
            <Link to="/generator">Generator</Link>

            </Splash>
           </>
        )

}

export default Home;
