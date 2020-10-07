import React from "react";
import "./App.scss";
import shortid from "shortid";
import Home from "./Components/Home"
import { Switch, Route } from "react-router";
import Generator from "./Components/Generator";
import Splash from "./Components/Splash";

class App extends React.Component {
  state = {
    isShowingSplashScreen: true,
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
        activity: "Practice Piano",
        category: "creative",
        reward: 15,
      },
    ],
    selectedCategories: [],
    chooseRandomActivity: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShowingSplashScreen: false })
    }, 4000)
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

  handleFilteredActivities = () => {
    // 1 get selectedCategories to a variable this.state.
    // 2 activities list array.filter
    // 3 return updated array that excludes activities that werent selected
    // 4 final array.math.random
    // update activities state to random selected activity
    let newArray = []
    this.state.activities.filter(item => {

      if (this.state.selectedCategories.includes(item.category)) {
        newArray.push(item)
      }
    })
    console.log(newArray)
    let newActivityIndex = Math.floor(Math.random() * newArray.length)
    let chosenActivity = newArray[newActivityIndex]

    this.setState({chooseRandomActivity: chosenActivity})
    console.log(chosenActivity)



  }


  render() {
    if (this.state.isShowingSplashScreen) {
      return <Splash />
    }
    return (
      <>


        <Switch>
          <Route exact path="/">
            <Home
              selectedCategories={this.state.selectedCategories}
              onHandleCheckbox={this.handleCheckbox}
            />
          </Route>
          <Route path="/generator">
            <Generator
              onHandleFilteredActivities={this.handleFilteredActivities}
              chooseRandomActivity={this.state.chooseRandomActivity} />
          </Route>
        </Switch>
      </>
    )
  }
}

export default App;
