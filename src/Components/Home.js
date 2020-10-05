import React from "react"
import "../App.scss";
import shortid from "shortid";
import globalNav from '../Components/Styles.js';


class Home extends React.Component {
    state = {
        activities: [
            {
                id: shortid.generate(),
                activity: "30 minutes of Reading",
                category: "Educational Activity",
                reward: 20,
            },
            {
                id: shortid.generate(),
                activity: "30 minutes of Math",
                category: "Educational Activity",
                reward: 20,
            },
            {
                id: shortid.generate(),
                activity: "Do a puzzle",
                category: "Educational Activity",
                reward: 20,
            },
            {
                id: shortid.generate(),
                activity: "Do 15 Jumping Jacks",
                category: "physical",
                reward: 10,
            },
            {
                id: shortid.generate(),
                activity: "Stretch for 15 minutes",
                category: "physical",
                reward: 10,
            },
            {
                id: shortid.generate(),
                activity: "Spend 1 hour coloring",
                category: "creative",
                reward: 15,
            },
            {
                id: shortid.generate(),
                activity: "Play with Blocks for 1 hour",
                category: "creative",
                reward: 20,
            },
            {
                id: shortid.generate(),
                activity: "Play with Blocks",
                category: "creative",
                reward: 15,
            },
        ],
        selectedCategories:[

        ]
    }
    handleCheckbox = event =>{
        let name = event.target.name
        let isChecked = event.target.isChecked

        this.setState(state=>{
            if (isChecked){

            }
        })
    }

    render() {
        return(
            globalNav(
           <> 
            <h1>What types of activities would you like Jake to do today?</h1>

            <p>Creative Activities</p>
            <input type="checkbox" name="creative"/>
            <p>Physical Acitivities</p>
            <input type="checkbox" name="physical"/>
            <p>Educational Acitivities</p>
            <input type="checkbox" name="educational"/>
           </>
           )
        )
    }
}

export default Home;