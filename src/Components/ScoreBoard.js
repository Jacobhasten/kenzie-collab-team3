import React from "react";
import { GlobalStyles } from "./Styles";
import { colors } from "./Styles";
import { Headline } from "./Styles";
import {List} from "./Styles";
import {ListItem} from "./Styles";
import Rewards_Icon from "../assets/Footer_Icons/Icon_Rewards.png";

function ScoreBoard(props) {
  return (
    <div>
      <GlobalStyles />
      <Headline>Rewards Scoreboard</Headline>
      <List>
        <ListItem>
          Jake............350
          <img
            src={Rewards_Icon}
            alt="stars"
            style={{height: "50px", width: "50px", margin: "0 10px"}}
          />
        </ListItem>
        <ListItem>
          Peppa...........200
          <img
            src={Rewards_Icon}
            alt="stars"
            style={{height: "50px", width: "50px", margin: "0 10px"}}
          />
        </ListItem>
        <ListItem>
          Blue..............150
          <img
            src={Rewards_Icon}
            alt="stars"
            style={{height: "50px", width: "50px", margin: "0 10px"}}
          />
        </ListItem>
        <ListItem>
          Mickey............50
          <img
            src={Rewards_Icon}
            alt="stars"
            style={{height: "50px", width: "50px", margin: "0 10px"}}
          />
        </ListItem>
      </List>
    </div>
  );
}
export default ScoreBoard;