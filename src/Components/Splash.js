// import React, { useEffect } from "react";
import React from "react";
import { Spring } from "react-spring/renderprops";
import logo from "../assets/Splash_Screen/Rejoyce_ Logo.png";
import blue_8ball_png from "../assets/8Ball_Loading_Icons/Blue_8ball.png";
import light_blue_8ball_png from "../assets/8Ball_Loading_Icons/DarkBlue_8ball_noshadow.png";
import "../App.scss";
import { withRouter } from "react-router-dom";

function Splash() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1, mrginTop: 3 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div className="background">
          <div style={props}>
            <img className="logo" src={logo} alt="logo-rejoyce" />
            <div className="loadingContainer">
              <img
                className="poolBall"
                src={blue_8ball_png}
                alt="blue pool ball"
              />
              <img
                className="poolBall"
                src={light_blue_8ball_png}
                alt="light blue pool ball"
              />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default withRouter(Splash);
