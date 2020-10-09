import React from 'react';
import Magic_Ball from "./Magic_Ball";


function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    return (
       <>
        <Magic_Ball/>
        <button onClick={props.onHandleFilteredActivities}>Pick Activity</button>
    <p>{props.chooseRandomActivity.activity}</p>
       
     </>
      
    )
}

export default Generator;