import React from "react"
import "../App.scss";
import shortid from "shortid";
import {Link} from "react-router-dom";

function Home(props) {
        
    
        return(
           <> 
            <h1>What types of activities would you like Jake to do today?</h1>

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
           </>
        )

}

export default Home;