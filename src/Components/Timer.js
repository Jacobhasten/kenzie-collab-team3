
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './Styles';
import { GlobalStyles } from './Styles';
import { TimerButton } from "./Styles";

const TimerWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 30% auto;
    align-content: center;
    justify-content: center;
`;

const TimerNumbers = styled.h1`
    margin: 10px auto;
    margin-bottom: 20px;
    text-align: center;
    color:${colors.primary.dark};
`;

const TimerText = styled.h2`
    margin: 10px auto;
    text-align: center;
    color: ${colors.primary.dark};
`;



export default class Timer extends Component {
    state = {
        minutes: 15,
        seconds: 0,
    }

    timerToggle() {
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
                    ? <TimerText>Times up!</TimerText>
                    : <><TimerText>Time Remaining: </TimerText><TimerNumbers>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</TimerNumbers></>
                }
                <TimerButton onClick = {() => this.timerToggle()}>Start Timer</TimerButton>
            </TimerWrapper>
        )
    }
}