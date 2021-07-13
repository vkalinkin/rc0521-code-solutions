import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, isOn: false };
    this.secondsInterval = null;
    this.buttonName = 'fas fa-play';
    this.handleClick = this.handleClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    if (this.state.isOn) {
      this.setState({ isOn: false });
      this.stopTime();
      this.buttonName = 'fas fa-play';
    } else {
      this.setState({ isOn: true });
      this.startTime();
      this.buttonName = 'fas fa-pause';

    }
  }

  handleFaceClick() {
    if (!(this.state.isOn)) {
      this.setState({ seconds: 0 });
    }
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  startTime() {
    this.secondsInterval = setInterval(this.tick, 1000);
  }

  stopTime() {
    clearInterval(this.secondsInterval);
  }

  render() {
    return <div>
      <div className="circle" onClick={this.handleFaceClick}></div>
      <h2>{this.state.seconds}</h2>
      <i className={this.buttonName} onClick={this.handleClick}></i>
    </div>;
  }
}

export default Stopwatch;
