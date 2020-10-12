import React from "react";
import bxLogOut from "@iconify/icons-bx/bx-log-out"; //This is the log-out icon
import playCircle from "@iconify/icons-fa-regular/play-circle"; //This is the Home icon
import Add_Activity_Icon from "../assets/Footer_Icons/Add_Activity_Icon_png.png";
import { Icon, InlineIcon } from "@iconify/react";
import styled from "styled-components";
import { colors } from "./Styles.js";
import { ReactComponent as HeaderSvg } from "../assets/Nav/Header.svg";
import { ReactComponent as FooterSvg } from "../assets/Nav/Footer.svg";
import { GlobalStyles } from "./Styles.js";

const NavButton = styled.button`
  color: ${colors.secondary.main};
  border: none;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  margin: 30px auto;
  padding: 0;
  justify-content: space-around;
  position: absolute;
  width: fit-content;
  height: 70px;
  font-family: "Grandstander", cursive;
  text-transform: uppercase;
  text-align: center;
`;
const NavButtonIcon = styled.img`
  margin: auto;
  width: 60px;
  height: 60px;
`;
const NavFooter = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: inline-grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1, 1fr;
`;
const HeaderStyle = styled.header`
  width: 100%;
`;

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <HeaderStyle>
          <HeaderSvg />
        </HeaderStyle>
        {/* Page Code Goes Here */}
        <NavFooter>
          <NavButton style={{gridColumnStart: "1", gridColumnEnd: "2"}}>
            <NavButtonIcon src={Add_Activity_Icon} />
            Activities
          </NavButton>
          <NavButton style={{gridColumnStart: "2", gridColumnEnd: "3"}}>
            <NavButtonIcon src={Add_Activity_Icon} />
            Activities
          </NavButton>
          <NavButton style={{gridColumnStart: "3", gridColumnEnd: "4"}}>
            <NavButtonIcon src={Add_Activity_Icon} />
            Activities
          </NavButton>
          <NavButton style={{gridColumnStart: "4", gridColumnEnd: "5"}}>
            <NavButtonIcon src={Add_Activity_Icon} />
            Activities
          </NavButton>
          <FooterSvg />
        </NavFooter>
      </>
    );
  }
}
