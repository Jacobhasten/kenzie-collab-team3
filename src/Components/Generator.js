import React from 'react';
import Magic_Ball from "./Magic_Ball";
import { GlobalStyles } from "./Styles";
import { colors } from "./Styles";
import Nav from "./Nav";


function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    return (
       <>
       <GlobalStyles />
       <Nav />
        <Magic_Ball/>
        <button onClick={props.onHandleFilteredActivities}>Pick Activity</button>
    <p>{props.chooseRandomActivity.activity}</p>
       
     </>
      
    )
}

export default Generator;