
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './Styles';
import { GlobalStyles } from './Styles';

const TimerButton = styled.button`
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

export default class Timer extends Component {
    state = {
        minutes: 15,
        seconds: 0,
    }

    componentDidMount() {
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
            <div>
            <GlobalStyles />
                { minutes === 0 && seconds === 0
                    ? <h1>Times up!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
                <TimerButton>Start Timer</TimerButton>
            </div>
        )
    }
}