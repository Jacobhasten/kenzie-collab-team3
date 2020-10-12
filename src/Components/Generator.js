import React from 'react';
import Magic_Ball from "./Magic_Ball";


function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    return (
       <>
        
        <button onClick={props.onHandleFilteredActivities}><Magic_Ball/></button>
    <p>{props.chooseRandomActivity.activity}</p>
       
     </>
      
    )
}

export default Generator;