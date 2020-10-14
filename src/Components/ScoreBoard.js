import React from "react";

function ScoreBoard() {
  return (
    <div>
      <h1>Rewards Scoreboard</h1>
      <ul>
        <li>
          Jake..........350
          <img
            src="./src/assets/images/IconRewards_png.png"
            alt="stars"
            width="20"
            height="20"
          />
        </li>
        <li>
          Peppa...........200
          <img
            src="./src/assets/images/IconRewards_png.png"
            alt="stars"
            width="20"
            height="20"
          />
        </li>
        <li>
          Blue...........150
          <img
            src="./src/assets/images/IconRewards_png.png"
            alt="stars"
            width="20"
            height="20"
          />
        </li>
        <li>
          Mickey............50
          <img
            src="./src/assets/images/IconRewards_png.png"
            alt="stars"
            width="20"
            height="20"
          />
        </li>
      </ul>
    </div>
  );
}
export default ScoreBoard;