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