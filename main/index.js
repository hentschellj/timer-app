import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        Timer App
      </div>
    )
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
)