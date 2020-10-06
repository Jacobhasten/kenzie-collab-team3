import React from 'react';
import {useSpring} from 'react-spring';
import logo from '../assets/Splash_Screen/Rejoyce_ Logo.png';

function Splash() {
  return (
      <useSpring
      from={{ opacity: 0, }}
      to={{ opacity: 1, mrginTop: 3 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div>
          <div>
          <img src ={logo}/>
          </div>
        </div>
      )}
    </useSpring>
  )

}

export default Splash;

