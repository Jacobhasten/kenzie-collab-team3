import React from "react"
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

function Home(props) {
        
    
        return(
        <> 
        <Splash>
            <Headline>What types of activities would you like Jake to do today?</Headline>
            
            <p>Creative Activities</p>
            <input type="checkbox" name="creative" 
            defaultChecked={props.selectedCategories.includes('creative')}
            onChange={props.onHandleCheckbox}/>
            <p>Physical Acitivities</p>
            <input type="checkbox" name="physical"
            defaultChecked={props.selectedCategories.includes('physical')}
            onChange={props.onHandleCheckbox}/>
            <p>Educational Acitivities</p>
            <input type="checkbox" name="educational"
            defaultChecked={props.selectedCategories.includes('educational')}
            onChange={props.onHandleCheckbox}/>
            <Link to="/generator">Generator</Link>
            </Splash>
           </>
        )

}

export default Home;