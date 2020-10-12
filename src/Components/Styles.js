// If you haven't yet, install styled-components package
//To use these, import this into your page, and use the variable names in place of your HTML tags
//For more info, I found this article helpful-> https://www.robinwieruch.de/react-styled-components

import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import GrandstanderBold from '../fonts/Grandstander/static/Grandstander-Bold.ttf';
import Grandstander from '../fonts/Grandstander/static/Grandstander-Medium.ttf';
export const colors = {
    primary: {
        main: '#1E96FC',
        dark: '#072AC8',
        light: '#A2D6F9'
    },
    secondary: {
        main: '#FCF300',
        dark: '#FFC600'
    }
}
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: Grandstander;
    font-style: normal;
    font-weight: 600;
    src: url(${GrandstanderBold});
  }
  @font-face {
    font-family: Grandstander;
    font-style: normal;
    font-weight: 400;
    src: url(${Grandstander});
  }
body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    font-family: "Grandstander", cursive;
}
`;