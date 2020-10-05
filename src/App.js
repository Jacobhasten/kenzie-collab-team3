import React from "react";
import "./App.scss";
import shortid from "shortid";
import Home from "./Components/Home"
import { Switch, Route } from "react-router";
import Generator from "./Components/Generator";

class App extends React.Component {
  state = {
    activities: [
      {
        id: shortid.generate(),
        activity: "30 minutes of Reading",
        category: "educational",
        reward: 20,
      },
      {
        id: shortid.generate(),
        activity: "30 minutes of Math",
        category: "educational",
        reward: 20,
      },
      {
        id: shortid.generate(),
        activity: "Do a puzzle",
        category: "educational",
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
    selectedCategories: [],
    unfilteredAcitivies: [],
  }
  handleCheckbox = event => {
    let name = event.target.name;
    let isChecked = event.target.checked;
    this.setState(state => {
      let newCategories = []
      if (isChecked) {
        newCategories = [...state.selectedCategories, name]
      } else {
        newCategories = state.selectedCategories.filter(category => category !== name)
      }
      return { selectedCategories: newCategories }
    })
  }
  render() {
    return (
      <>
        <Switch>
          
          <Route exact path="/">
            <Home
              selectedCategories={this.state.selectedCategories}
              onHandleCheckbox={this.handleCheckbox} />
          </Route>
          <Route path="/generator">
            <Generator/>
          </Route>
        </Switch>
      </>
    )
  }
}

export default App;
