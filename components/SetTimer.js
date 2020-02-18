import React from 'react';

class SetTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.updateHours = this.updateHours.bind(this)
    this.updateMinutes = this.updateMinutes.bind(this)
    this.updateSeconds = this.updateSeconds.bind(this)
  }

  updateHours(e) {
    this.setState({
      hours: parseInt(e.target.value)
    })
  }

  updateMinutes(e) {
    this.setState({
      minutes: parseInt(e.target.value)
    })
  }

  updateSeconds(e) {
    this.setState({
      seconds: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <h2>Set Timer</h2>
        <div className="digit">
          <label htmlFor="hours">Hours</label>
          <input type="number" name="hours" placeholder="0" onChange={this.updateHours} />
        </div>

        <div className="digit">
          <label htmlFor="minutes">Minutes</label>
          <input type="number" name="minutes" placeholder="0" onChange={this.updateMinutes} />
        </div>

        <div className="digit">
          <label htmlFor="seconds">Seconds</label>
          <input type="number" name="seconds" placeholder="0" onChange={this.updateSeconds} />
        </div>

        <div>
          <button onClick={()=>{
            this.props.startTimer(this.state.hours, this.state.minutes, this.state.seconds)
          }}>Start Timer</button>
        </div>
      </div>
    )
  }
}

export default SetTimer;