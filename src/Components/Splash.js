import React, { useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import logo from "../assets/Splash_Screen/Rejoyce_ Logo.png";
import "../App.scss";
import { withRouter } from "react-router-dom";

function Splash() {

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1, mrginTop: 3 }} config={{ delay: 1000, duration: 1000 }}>
      {(props) => (
        <div className="background">
          <div style={props}>
            <img src={logo} />
          </div>
        </div>
      )}
    </Spring>
  );
}

export default withRouter(Splash);
