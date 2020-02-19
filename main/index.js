import React from 'react';
import ReactDOM from 'react-dom';
import SetTimer from '../components/SetTimer';

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
  }

  startTimer() {

  }

  convertToSeconds(time) {
    const { hours, minutes, seconds } = time;
    return hours * 60 * 60 + minutes * 60 + seconds;
  }

  render() {
    return (
      <div className="container">
        <SetTimer startTimer={this.startTimer} />
      </div>
    )
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
)