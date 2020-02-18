import React from 'react';

class SetTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  render() {
    return (
      <div>
        <h2>Set Timer</h2>
        <div className="digit">
          <label htmlFor="hours">Hours</label>
          <input type="number" name="hours" placeholder="0" />
        </div>

        <div className="digit">
          <label htmlFor="minutes">Minutes</label>
          <input type="number" name="minutes" placeholder="0" />
        </div>

        <div className="digit">
          <label htmlFor="seconds">Seconds</label>
          <input type="number" name="seconds" placeholder="0" />
        </div>

        <div>
          <button>Start Timer</button>
        </div>
      </div>
    )
  }
}

export default SetTimer;