import React from "react"
import "../App.scss";
import shortid from "shortid";
import styled from "styled-components";
import globalNav from "./Styles";
import { colors } from "./Styles";

const Headline = styled.h1`
    text-align: center;
    width: 90%;
    margin:  20px auto;
    color: ${colors.primary.dark};
`;

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
        selectedCategories:[]
    }
    handleCheckbox = event => {
        let name = event.target.name; //get the name of the category of the box that was checked
        let isChecked = event.target.checked; //see if we checked the box or unchecked it
        this.setState(state=>{ //set our state using our current state
          let newCategories = []
          if (isChecked){ // if we checked a checkbox, add the name of that category to the array
            newCategories = [...state.selectedCategories, name]
          } else {  // if we unchecked a checbox, filter that name out of the array
            newCategories = state.selectedCategories.filter(category=> category !== name)
          }
          return {selectedCategories: newCategories}
        })
      }

    render() {
        return(
           globalNav(<> 
            <Headline>What types of activities would you like Jake to do today?</Headline>

            <p>Creative Activities</p>
            <input type="checkbox" name="creative" 
            defaultChecked={this.state.selectedCategories.includes('creative')}
            onChange={this.handleCheckbox}/>
            <p>Physical Acitivities</p>
            <input type="checkbox" name="physical"
            defaultChecked={this.state.selectedCategories.includes('physical')}
            onChange={this.handleCheckbox}/>
            <p>Educational Acitivities</p>
            <input type="checkbox" name="educational"
            defaultChecked={this.state.selectedCategories.includes('educational')}
            onChange={this.handleCheckbox}/>
           </>)
        )
    }
}

export default Home;