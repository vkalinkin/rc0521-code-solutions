import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.buttonName = 'hot-button cold';
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  changeClassName() {
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      this.buttonName = 'hot-button cool';
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      this.buttonName = 'hot-button tepid';
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      this.buttonName = 'hot-button warm';
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      this.buttonName = 'hot-button hot';
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      this.buttonName = 'hot-button blazing';
    } else if (this.state.clicks >= 18) {
      this.buttonName = 'hot-button nuclear';
    }
  }

  render() {
    this.changeClassName();
    return <button className={this.buttonName} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
