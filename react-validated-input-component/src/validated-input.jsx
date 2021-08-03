import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', message: 'A password is required.', symbol: 'red fas fa-times' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({
        message: 'A password is required.',
        symbol: 'red fas fa-times'
      });
    } else if (event.target.value.length > 0 && event.target.value.length < 8) {
      this.setState({
        message: 'Your password is too short',
        symbol: 'red fas fa-times'
      });
    } else if (event.target.value.length >= 8) {
      let hasCap = false;
      let hasNumber = false;
      let hasSpecial = false;
      const wordTest = event.target.value;
      const word = [];
      for (let a = 0; a < event.target.value.length; a++) {
        word.push(wordTest.charAt(a));
      }
      for (let b = 0; b < word.length; b++) {
        hasCap = word.includes('A') || word.includes('B') || word.includes('C') ||
          word.includes('D') || word.includes('E') || word.includes('F') ||
          word.includes('G') || word.includes('H') || word.includes('I') ||
          word.includes('J') || word.includes('K') || word.includes('L') ||
          word.includes('M') || word.includes('N') || word.includes('O') ||
          word.includes('P') || word.includes('Q') || word.includes('R') ||
        word.includes('S') || word.includes('T') || word.includes('U') ||
          word.includes('V') || word.includes('W') || word.includes('X') ||
          word.includes('Y') || word.includes('Z');
      }
      for (let c = 0; c < word.length; c++) {
        hasNumber = word.includes('0') || word.includes('1') || word.includes('2') ||
          word.includes('3') || word.includes('4') || word.includes('5') ||
          word.includes('6') || word.includes('7') || word.includes('8') ||
          word.includes('5');
      }
      for (let d = 0; d < word.length; d++) {
        hasSpecial = word.includes('!') || word.includes('@') || word.includes('#') ||
          word.includes('$') || word.includes('%') || word.includes('^') ||
          word.includes('^') || word.includes('&') || word.includes('*') ||
          word.includes('(') || word.includes(')');
      }
      if (hasCap === false || hasNumber === false || hasSpecial === false) {
        this.setState({
          message: 'Your password is needs at least one number, capital letter, and special character',
          symbol: 'red fas fa-times'
        });
      } else {
        this.setState({
          message: '',
          symbol: 'green fas fa-check'
        });
      }
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
