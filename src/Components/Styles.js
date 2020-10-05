// If you haven't yet, install styled-components package
//To use these, import this into your page, and use the variable names in place of your HTML tags
//For more info, I found this article helpful-> https://www.robinwieruch.de/react-styled-components

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Header} from '../assets/Header.svg';
import { ReactComponent as Footer} from '../assets/Footer.svg';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    
    @font-face {
        font-family: "Grandstander", cursive;
        src: url("https://fonts.googleapis.com/css2?family=Grandstander:wght@100;200;300;400;500;600;700;800;900&display=swap");
      }
      
      @font-face {
        font-family: "Risque", cursive;
        src: url("https://fonts.googleapis.com/css2?family=Risque&display=swap");
      }
}
`;

const Nav = styled.footer`
    position: fixed;
    bottom: 0;
`;

export default function globalNav(props) {
    return ( 
        <>
        <GlobalStyles />
        <Header />
        {props}
        <Nav>
        <Footer />
        </ Nav>
        </>
    );
}

