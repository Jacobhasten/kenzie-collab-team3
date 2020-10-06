import React from "react";
import bxLogOut from "@iconify/icons-bx/bx-log-out"; //This is the log-out icon
import playCircle from "@iconify/icons-fa-regular/play-circle"; //This is the Home icon
import { Icon, InlineIcon } from "@iconify/react";
import styled from "styled-components";
import { colors } from "./Styles.js";
import { ReactComponent as HeaderSvg} from '../assets/Nav/Header.svg';
import { ReactComponent as FooterSvg} from '../assets/Nav/Footer.svg';
import {GlobalStyles} from "./Styles.js";

const NavButton = styled.button`
    color: ${colors.secondary.main}
    border: none;
`;
const NavButtonIcon = styled.svg`
    fill: ${colors.secondary.main}
`;
const NavFooter = styled.footer`
    position: fixed;
    bottom: 0;
`;
const HeaderStyle = styled.header`
    width: 100%;
`;


export default class Nav extends React.Component {
    render() {
        return (
            <>
            <GlobalStyles />
            <HeaderStyle><HeaderSvg /></HeaderStyle>
            {/* Page Code Goes Here */}
            <NavFooter>
            <NavButton>
                <NavButtonIcon></NavButtonIcon>
            </NavButton>
            <FooterSvg />
            </ NavFooter>
            </>
        );
    }
}