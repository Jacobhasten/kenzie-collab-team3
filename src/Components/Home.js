import React from 'react';
import "../App.scss";
import styled from "styled-components";
import { colors } from "./Styles";
import { GlobalStyles } from "./Styles";
import {Link} from "react-router-dom";
import Splash from './Splash';

const Headline = styled.h1`
        text-align: center;
        width: 90%;
        margin:  20px auto;
        color: ${colors.primary.dark};
        font-family:Risque;
    `;
const Toggle = styled.label`
    display: inline-block;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    position: relative;

    > input {
      display: none;
    }
  `;
const ToggleSlider = styled.span`
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 45px;
      transition: 0.4s;
      background: gray;
      border: 2px solid gray;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

      &:before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
      }
      `;
const ToggleCheckbox = styled.input`
  &:checked + ${ToggleSlider} {
    background-color: ${colors.secondary.dark};
    border: 2px solid ${colors.secondary.dark};
    &:before {
      transform: translateX(25px);
      background-color: white;
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

        {/* <Splash> */}
            <Headline>What types of activities would you like Jake to do today?</Headline>
            <CategoryList>
            <Category><p>Creative Activities</p>
            <Toggle>
            <ToggleCheckbox type='checkbox' name="creative"
            defaultChecked={props.selectedCategories.includes('creative')}
            onChange={props.onHandleCheckbox}
            />
            <ToggleSlider/>
              </Toggle>
            </Category>
            <Category><p>Physical Acitivities</p>
            <Toggle>
            <ToggleCheckbox type='checkbox' name="physical"
            defaultChecked={props.selectedCategories.includes('physical')}
            onChange={props.onHandleCheckbox}
            />
            <ToggleSlider/>
              </Toggle>
            </Category>
            <Category><p>Educational Acitivities</p>
              <Toggle>
            <ToggleCheckbox type='checkbox' name="educational"
            defaultChecked={props.selectedCategories.includes('educational')}
            onChange={props.onHandleCheckbox}
            />
            <ToggleSlider/>
              </Toggle>
            </Category>
            </CategoryList>
            <Link to="/generator">Generator</Link>
            {/* </Splash> */}
           </>
        );
      
}

export default Home;
