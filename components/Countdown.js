import React from 'react';

class Countdown extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <h2>Time Remaining</h2>
        <div className="digit">
          <label htmlFor="hours">Hours</label><br />
          <input type="number" name="hours" value={this.props.timeRemaining.hours} readOnly />
        </div>

        <div className="digit">
          <label htmlFor="minutes">Minutes</label><br />
          <input type="number" name="minutes" value={this.props.timeRemaining.minutes} readOnly />
        </div>

        <div className="digit">
          <label htmlFor="seconds">Seconds</label><br />
          <input type="number" name="seconds" value={this.props.timeRemaining.seconds} readOnly />
        </div>

        <button onClick={this.props.clearTimer}>Clear Timer</button>
      </div>
    )
  }
}

export default Countdown;