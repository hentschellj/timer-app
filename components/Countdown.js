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
          <input type="number" name="hours" readOnly />
        </div>

        <div className="digit">
          <label htmlFor="minutes">Minutes</label><br />
          <input type="number" name="minutes" readOnly />
        </div>

        <div className="digit">
          <label htmlFor="seconds">Seconds</label><br />
          <input type="number" name="seconds" readOnly />
        </div>

        <button>Clear Timer</button>
      </div>
    )
  }
}

export default Countdown;