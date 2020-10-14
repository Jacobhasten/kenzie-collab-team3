// If you haven't yet, install styled-components package
//To use these, import this into your page, and use the variable names in place of your HTML tags
//For more info, I found this article helpful-> https://www.robinwieruch.de/react-styled-components
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import GrandstanderBold from '../fonts/Grandstander/static/Grandstander-Bold.ttf';
import Grandstander from '../fonts/Grandstander/static/Grandstander-Medium.ttf';
import Risque from '../fonts/Bembo Infant/Bembo Infant MT Std.ttf';
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

export const Headline = styled.h1`
        text-align: center;
        width: 90%;
        margin:  20px auto;
        color: ${colors.primary.dark};
        font-family: Grandstander;
    `;
export const SmallHeadline = styled.h2`
    text-align: center;
    width: 80%;
    margin:  20px auto;
    color: black;
    font-family: Grandstander;
`;

export const LargeButton = styled.button`
    color: black;
    background-color: ${colors.secondary.dark};
    border: none;
    border-radius: 15px;
    font-family: 'Grandstander', cursive;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    -moz-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    height: 70px;
`;

export const TimerButton = styled.button`
    font-family: 'Grandstander', cursive;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    color: black;
    background-color: ${colors.secondary.dark};
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    -moz-box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    box-shadow: 0px 6px 11px 0px rgba(199,199,199,1);
    border: none;
    margin: auto;
    height: 50px;
`;

export const List = styled.ul`
    margin: 40px auto;
    list-style: none;
    padding: 0;
    width: 80%;
`;

export const ListItem = styled.li`
    font-size: 1.5em;
    font-weight: 600;
    color: ${colors.primary.dark};
    margin: 20px auto;
`;

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
  @font-face {
    font-family: Risque;
    font-style: normal;
    font-weight: 400;
    src: url(${Risque});
  }
body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    font-family: "Grandstander", cursive;
}
`;