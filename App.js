import React from 'react';
import { Text, View } from 'react-native';

import {vibrate} from './utils'
import TimeSetterComponent from './TimerSetterComponent.js'
import TimerComponent  from './TimerComponent'
import styles from './styles.js'

export default class App extends React.Component{

  state = {
    sessionLength: 25 * 60,
    breakLength: 5 * 60,
    timerCount: 25 * 60,
    isPlaying: false,
    currentSession: "Session"
  }

  timeIt = (rawSec) => {
    let sec = rawSec >= 0 ? rawSec : null
    let mins = Math.floor(sec / 60)
    let secs = sec % 60
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`
  }

  sessionIncrement = () => {
    this.setState(prevState => ({
      sessionLength: prevState.sessionLength === 60 * 60 ? prevState.sessionLength : prevState.sessionLength + 60,
      timerCount:  (prevState.currentSession === 'Session') ? ( prevState.timerCount === 60 * 60 ? prevState.timerCount : prevState.timerCount + 60) : prevState.timerCount
    }))
  }

  sessionDecrement = () => {
    this.setState(prevState => ({
      sessionLength: prevState.sessionLength === 60 ? prevState.sessionLength : prevState.sessionLength - 60,
      timerCount:  (prevState.currentSession === 'Session') ? ( prevState.timerCount === 60 ? prevState.timerCount : prevState.timerCount - 60) : prevState.timerCount
    }))
  }

  breakIncrement = () => {
    this.setState(prevState => ({
      breakLength: prevState.breakLength === 60 * 60 ? prevState.breakLength : prevState.breakLength + 60,
      timerCount:  (prevState.currentSession === 'Break') ? ( prevState.timerCount === 60 * 60 ? prevState.timerCount : prevState.timerCount + 60) : prevState.timerCount
    }))
  }

  breakDecrement = () => {
    this.setState(prevState => ({
      breakLength: prevState.breakLength === 60 ? prevState.breakLength : prevState.breakLength - 60,
      timerCount:  (prevState.currentSession === 'Break') ? ( prevState.timerCount === 60 ? prevState.timerCount : prevState.timerCount - 60) : prevState.timerCount
    }))
  }

  timerReset = () => {
    this.setState({
      sessionLength: 25 * 60,
      breakLength: 5 * 60,
      timerCount: 25 * 60,
      isPlaying: false,
      currentSession: "Session"
    })
    clearInterval(this.interval)
  }

  timerPlayPause = () => {
    const {isPlaying, breakLength, sessionLength} = this.state

    if(isPlaying){
      clearInterval(this.interval)
      this.setState({isPlaying: false})
    }else{
      this.interval = setInterval(() => {
        if(this.state.timerCount === 0){
          this.setState(prevState => ({
            timerCount: (prevState.currentSession === "Session") ? breakLength : sessionLength,
            currentSession: (prevState.currentSession === "Session") ? "Break" : "Session"
          }))
           vibrate()    
        }else{
        this.setState(prevState => ({
          timerCount: prevState.timerCount - 1
        }))
      }
    },1000)
      this.setState({isPlaying: true})
  }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.mainLabel}>Pomodoro Clock</Text>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 55, paddingBottom: 55 ,alignSelf: 'center', justifyContent: 'center'}}>
          <TimeSetterComponent 
            label="Break Length" 
            timeCount={this.timeIt(this.state.breakLength)} 
            funcInc={this.breakIncrement} 
            funcDec={this.breakDecrement}
            styles={styles}
          />
          <TimeSetterComponent 
            label="Session Length" 
            timeCount={this.timeIt(this.state.sessionLength)} 
            funcInc={this.sessionIncrement} 
            funcDec={this.sessionDecrement} 
            styles={styles}
          />
        </View>
          <View style={[styles.sessionBorder, styles.endFlex]}>
            <TimerComponent 
              funcReset={this.timerReset} 
              funcplayPause={this.timerPlayPause} 
              timerCount={this.timeIt(this.state.timerCount)}
              label={this.state.currentSession}
              isPlaying={this.state.isPlaying}
              styles={styles}
            />
          </View>
        </View>
  );
}
}


