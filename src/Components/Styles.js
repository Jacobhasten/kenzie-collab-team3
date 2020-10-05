// If you haven't yet, install styled-components package
//To use these, import this into your page, and use the variable names in place of your HTML tags
//For more info, I found this article helpful-> https://www.robinwieruch.de/react-styled-components

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Header} from '../assets/Nav/Header.svg';
import { ReactComponent as Footer} from '../assets/Nav/Footer.svg';
import { createGlobalStyle } from 'styled-components';

export default function styles(props) {
    const colors = {
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
    const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        position: relative;
        font-family: "Grandstander", cursive;
    }
    `;
    const Nav = styled.footer`
        position: fixed;
        bottom: 0;
    `;
    const HeaderStyle = styled.header`
        width: 100%;
    `;

    const Headline = styled.h1`
        text-align: center;
        width: 90%;
        margin:  20px auto;
        color: ${colors.primary.dark};
    `;

    const NavButton = styled.button`
    color: ${colors.secondary.main}
    `;
    const NavButtonLabel = styled.p;
    return (
        <>
        <GlobalStyles />
        <HeaderStyle><Header /></HeaderStyle>
        {props}
        <Nav>
        <Footer />
        </ Nav>
        </>);
};

function navButton(props) {
    return (
    <>
    <NavButton>${props.icon}</NavButton>
    <NavButtonLabel>${props.label}</NavButtonLabel>
    </>
    )
};
