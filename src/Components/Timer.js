import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './Styles';
import { GlobalStyles } from './Styles';
import { TimerButton } from "./Styles";
import {Link} from "react-router-dom";

const TimerWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 30% auto;
    align-content: center;
    justify-content: center;
    @media (min-width: 768px) {
        margin: 40% auto;
      }
      
      @media (min-width: 1024px) {
        margin: 50% auto;
      }
`;

const TimerNumbers = styled.h1`
    margin: 10px auto;
    margin-bottom: 20px;
    text-align: center;
    color:${colors.primary.dark};
    @media (min-width: 768px) {
        margin: 20px auto;
        margin-bottom: 40px;
        transform: scale(1.25);
      }
      
      @media (min-width: 1024px) {
        margin-bottom: 60px;
        transform: scale(1.5);
      }
`;

const TimerText = styled.h2`
    margin: 10px auto;
    text-align: center;
    color: ${colors.primary.dark};
    @media (min-width: 768px) {
        margin: 20px auto;
        transform: scale(1.25);
      }
      
      @media (min-width: 1024px) {
        transform: scale(1.5);
      }
`;



export default class Timer extends Component {
    state = {
        minutes: 1,
        seconds: 0,
        timerActive: false
    }

    timerToggle() {
        this.setState({timerActive: true})
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    } 
    


    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <TimerWrapper>
            <GlobalStyles />
                { minutes === 0 && seconds === 0
                    ? <><TimerText style={{marginBottom: '60px'}}>Times up!</TimerText>
                    <Link to="/scoreboard" style={{display: "flex", justifyContent: "center", textDecoration: "none"}}><TimerButton>Finish</TimerButton></Link></>
                    : <><TimerText>Time Remaining: </TimerText><TimerNumbers>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</TimerNumbers>
                    <TimerButton onClick = {() => this.timerToggle()}>{this.state.timerActive === false ? "Start Timer": "Stop Timer"}</TimerButton></>
                }
            </TimerWrapper>
        )
    }
}