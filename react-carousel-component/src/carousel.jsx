import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openImage: 0,
      circleNames: ['fas fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle']
    };
    this.secondsInterval = null;
    this.startTime = this.startTime.bind(this);
    this.changeImageRight = this.changeImageRight.bind(this);
    this.displayImage = this.displayImage.bind(this);
    this.displayCircles = this.displayCircles.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  displayImage() {
    const images = this.props.images;
    const currentImage = images[this.state.openImage];
    return currentImage;
  }

  displayCircles() {
    const circleId = this.state.openImage;
    const newCircles = ['far fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle'];
    newCircles[circleId] = 'fas fa-circle';
    return newCircles;
  }

  changeImageRight() {
    let currentImageId = this.state.openImage;

    if (currentImageId === 4) {
      this.setState({ openImage: 0 });
    } else {
      currentImageId++;
      this.setState({ openImage: currentImageId });
    }
  }

  changeImageLeft() {
    let currentImageId = this.state.openImage;
    if (currentImageId === 0) {
      this.setState({ openImage: 4 });
    } else {
      currentImageId--;
      this.setState({ openImage: currentImageId });
    }
  }

  changeImageCircle(newId) {
    this.setState({ openImage: newId });
  }

  stopTime() {
    clearInterval(this.secondsInterval);
  }

  handleRightClick() {
    this.changeImageRight();
    this.stopTime();
    this.startTime();
  }

  handleLeftClick() {
    this.changeImageLeft();
    this.stopTime();
    this.startTime();
  }

  handleCircleClick(event) {
    const circleId = parseInt(event.target.getAttribute('circle'));
    const newCircles = ['far fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle', 'far fa-circle'];
    newCircles[circleId] = 'fas fa-circle';
    this.setState({ circleNames: newCircles });
    this.changeImageCircle(circleId);
    this.stopTime();
    this.startTime();
  }

  startTime() {
    this.secondsInterval = setInterval(this.changeImageRight, 3000);
  }

  componentDidMount() {
    this.startTime();
  }

  render() {
    const currentImage = this.displayImage();
    const currentCircles = this.displayCircles();

    return <div className="carousel">
      <div className="row top">
        <i className="fas fa-chevron-left" onClick={this.handleLeftClick}></i>
        <img src={currentImage}></img>
        <i className="fas fa-chevron-right" onClick={this.handleRightClick}></i>
      </div>
      <div className="row bottom">
        <i circle="0" className= {currentCircles[0]} onClick={this.handleCircleClick}></i>
        <i circle="1" className= {currentCircles[1]} onClick={this.handleCircleClick}></i>
        <i circle="2" className= {currentCircles[2]} onClick={this.handleCircleClick}></i>
        <i circle="3" className= {currentCircles[3]} onClick={this.handleCircleClick}></i>
        <i circle="4" className= {currentCircles[4]} onClick={this.handleCircleClick}></i>
      </div>
    </div>;
  }

}
export default Carousel;
