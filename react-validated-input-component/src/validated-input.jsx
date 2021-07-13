import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', message: 'A password is required.', symbol: 'fas fa-times' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ message: 'A password is required.' });
      this.setState({ symbol: 'fas fa-times' });
    } else if (event.target.value.length > 0 && event.target.value.length < 8) {
      this.setState({ message: 'Your password is too short' });
      this.setState({ symbol: 'fas fa-times' });
    } else if (event.target.value.length >= 8) {
      this.setState({ message: '' });
      this.setState({ symbol: 'fas fa-check' });
    }
  }

  render() {
    return <form>
      <label>Password</label>
      <div>
        <input type="password" value={this.state.value} onChange={this.handleChange}></input>
        <i className={this.state.symbol}></i>
      </div>
      <h4>{this.state.message}</h4>
    </form>;
  }
}

export default ValidatedInput;
