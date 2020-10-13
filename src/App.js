import React from "react";
import "./App.scss";
import shortid from "shortid";
import Home from "./Components/Home";
import { Switch, Route } from "react-router";
import Generator from "./Components/Generator";
import Splash from "./Components/Splash";
import Timer from "./Components/Timer";
import Nav from "./Components/Nav";
import Scoreboard from "./Components/ScoreBoard";

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
    chooseRandomActivity: [],
    ballIsActive: false,
  };




  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShowingSplashScreen: false });
    }, 5000);
  }

  handleCheckbox = (event) => {
    let name = event.target.name;
    let isChecked = event.target.checked;
    this.setState((state) => {
      let newCategories = [];
      if (isChecked) {
        newCategories = [...state.selectedCategories, name];
      } else {
        newCategories = state.selectedCategories.filter(
          (category) => category !== name
        );
      }
      return { selectedCategories: newCategories };
    });
  };

  
    

  handleFilteredActivities = () => {

    let newArray = []
    this.state.activities.filter(item => {

      if (this.state.selectedCategories.includes(item.category)) {
        newArray.push(item);
      }

    })
      let newActivityIndex = Math.floor(Math.random() * newArray.length)
      let chosenActivity = newArray[newActivityIndex]
      this.setState({ballIsActive: true}, ()=>setTimeout(()=> 
      this.setState({chooseRandomActivity: chosenActivity}), 3000))
    
  }


  render() {
    if (this.state.isShowingSplashScreen) {
      return <Splash />;
    }
    return (
      <>
      <Nav />
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
              chooseRandomActivity={this.state.chooseRandomActivity}
              selectedCategories={this.state.selectedCategories}
              ballIsActive={this.state.ballIsActive} />
              <Timer/>
          </Route>
          <Route>
            <Scoreboard/>
          </Route>
        </Switch>
      </>
    );
  }

}
export default App;
