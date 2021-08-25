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

  changeNames() {
    let className;
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
    const names = {
      class: className,
      circle: circleName,
      span: spanText
    };
    return names;

  }

  render() {
    const currentNames = this.changeNames();

    return <div className="base">
      <div className={currentNames.class} onClick={this.handleClick}></div>
      <div className={currentNames.circle}></div>
      <span><h2>{currentNames.span}</h2></span>
    </div>;
  }
}

export default ToggleSwitch;
