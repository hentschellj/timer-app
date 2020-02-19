import React from 'react';
import ReactDOM from 'react-dom';
import SetTimer from '../components/SetTimer';
import Countdown from '../components/Countdown';
import './index.css';
import beep from './beep.wav';

function alert() {
  let audio = new Audio(beep)
  audio.play()
}

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      timeRemaining: {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    this.startTimer = this.startTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
  }

  startTimer(hours, minutes, seconds) {
    this.setState({
      isRunning: true,
      timeRemaining: {
        hours,
        minutes,
        seconds
      }
    }, () => {
      let totalTimeRemaining = this.convertToSeconds(this.state.timeRemaining)
      let interval = setInterval(() => {
        totalTimeRemaining--
        this.updateDisplay(totalTimeRemaining)
        if(totalTimeRemaining <= 0) {
          alert()
          this.clearTimer(interval)
        }
      }, 1000)
    })
  }

  updateDisplay(seconds) {
    const timeRemaining = this.convertToNormal(seconds)
    this.setState({
      timeRemaining
    })
  }

  clearTimer(interval) {
    clearInterval(interval)
    this.setState({
      isRunning: false
    })
  }

  convertToSeconds(time) {
    const { hours, minutes, seconds } = time;
    return hours * 60 * 60 + minutes * 60 + seconds;
  }

  convertToNormal(seconds) {
    return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: Math.floor((seconds % 3600) % 60)
    }
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.isRunning)?
          <Countdown timeRemaining={this.state.timeRemaining} clearTimer={this.clearTimer} /> :
          <SetTimer startTimer={this.startTimer} /> 
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
)