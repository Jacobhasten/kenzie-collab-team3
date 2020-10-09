import React from 'react';
import "../App.scss";
import styled from "styled-components";
import { colors } from "./Styles";
import { GlobalStyles } from "./Styles";
import Nav from "./Nav.js";
import {Link} from "react-router-dom";
import Splash from './Splash';

const Headline = styled.h1`
        text-align: center;
        width: 90%;
        margin:  20px auto;
        color: ${colors.primary.dark};
    `;


const ToggleContainer = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 25px;
    > input {
      display: none;
    }
  `;

const ToggleButton = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    &:before {
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${colors.secondary.dark};
      border-radius: 100px;
      transition: background-color .2s;
    }
  `;

  const ToggleCheckbox = styled.input`
&:checked + ${ToggleButton} {
    background-color: ${colors.secondary.dark};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;
const CategoryList = styled.ul`
margin: 40px auto;
list-style: none;
padding: 0;
width: 80%;
`;

const Category = styled.li`
display: flex;
margin: 20px 0;
flex-flow: row;
justify-content: space-between;
`;
  

function Home(props) {
        
    
        return(
        <> 
        <GlobalStyles />
        <Nav />


        {/* <Splash> */}
            <Headline>What types of activities would you like Jake to do today?</Headline>
            <CategoryList>
            <Category><p>Creative Activities</p>
            <ToggleContainer>
            <ToggleCheckbox type="checkbox" name="creative" 
            defaultChecked={props.selectedCategories.includes('creative')}
            onChange={props.onHandleCheckbox}/>
            <ToggleButton/>
            </ToggleContainer>
            </Category>
            <Category><p>Physical Acitivities</p>
            <ToggleContainer>
            <ToggleCheckbox type="checkbox" name="physical"
            defaultChecked={props.selectedCategories.includes('physical')}
            onChange={props.onHandleCheckbox}/>
            <ToggleButton/>
            </ToggleContainer>
            </Category>
            <Category><p>Educational Acitivities</p>
            <ToggleContainer>
            <ToggleCheckbox type="checkbox" name="educational"
            defaultChecked={props.selectedCategories.includes('educational')}
            onChange={props.onHandleCheckbox} />
            <ToggleButton/>
            </ToggleContainer>
            </Category>
            </CategoryList>
            <Link to="/generator">Generator</Link>

            {/* </Splash> */}
           </>
        )

}

export default Home;
