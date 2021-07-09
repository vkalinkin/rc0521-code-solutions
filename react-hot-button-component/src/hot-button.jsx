import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      return <button className="hot-button cool" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      return <button className="hot-button tepid" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return <button className="hot-button warm" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return <button className="hot-button hot" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return <button className="hot-button blazing" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 18) {
      return <button className="hot-button nuclear" onClick={this.handleClick}>Hot Button</button>;
    }
    return <button className="hot-button cold" onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
