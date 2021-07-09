import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
      // } else {
      //   return <button onClick={this.handleCLick}>Click Me!</button>
      //   // return <button>Click Me!</button>
      // }

    // return (
    //   <button>{this.props.state}</button>
    // );
    }
    return <button onClick={this.handleCLick}>Click Me!</button>;
  }
}

// const element = (
//   <div>
//     <CustomButton text="Click Me!" />
//   </div>
// );

// const element = (
//   <div>
//     <CustomButton state="Click Me!" />
//   </div>
// );

// const element2 = (
//   <div>
//     <CustomButton state="Thank you!" />
//   </div>
// );

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
