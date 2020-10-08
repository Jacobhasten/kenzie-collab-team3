import React from 'react';


function Generator(props) {
    
    // callback function of pickactivity here and then pass in selected categories from state
    
    return (
        <>
        <button onClick={props.onHandleFilteredActivities}>Pick Activity</button>
    <p>{props.chooseRandomActivity.activity}</p>
        </>
      
       
    )
}

export default Generator;