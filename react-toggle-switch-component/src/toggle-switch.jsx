import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    let className = 'toggle off';
    let spanText;
    let circleName;
    if (this.state.isOn) {
      className = 'toggle on';
      circleName = 'circle right';
      spanText = 'ON';
    } else {
      className = 'toggle off';
      circleName = 'circle left';
      spanText = 'OFF';
    }
    return <div className="base">
      <div className={className} onClick={this.handleClick}></div>
      <div className={circleName}></div>
      <span><h2>{spanText}</h2></span>
    </div>;
  }
}

export default ToggleSwitch;
