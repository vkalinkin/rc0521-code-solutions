import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openImage: 0,
      seconds: 0
    };
    this.secondsInterval = null;
    this.startTime = this.startTime.bind(this);
    this.changeImageRight = this.changeImageRight.bind(this);
  }

  displayImage() {
    // console.log('displayImage fired');
    const images = this.props.images;
    const currentImage = images[this.state.openImage];
    return currentImage;
  }

  changeImageRight() {
    // console.log('props', this.props);
    // console.log('state', this.state);
    // console.log('changeImageRight fired');

    // console.log('this.props.openImage', this.props.openImage);

    // console.log('this.state.openImage', this.state.openImage);

    // let currentImageId = this.props.openImage;
    let currentImageId = this.state.openImage;

    // console.log("currentImageId 1", currentImageId);

    // let currentImageId = this.state.openImage;

    // currentImageId++;
    // console.log("currentImageId 2", currentImageId);
    // this.setState({ openImage: currentImageId });

    if (currentImageId === 4) {
      this.setState({ openImage: 0 });
      // console.log("currentImageId 2", currentImageId);
    } else {
      currentImageId++;
      // console.log("currentImageId 2", currentImageId);
      this.setState({ openImage: currentImageId });
    }
    // this.displayImage();
    // this.displayImage;
  }

  startTime() {
    // console.log('startTime fired');
    this.secondsInterval = setInterval(this.changeImageRight, 8000);
  }

  componentDidMount() {
    this.startTime();
  }

  render() {
    // this.startTime();

    const currentImage = this.displayImage();

    return <div>
      <div>carousel</div>
      <div className="row">
        <i className="fas fa-chevron-left"></i>
        {/* <img src={this.props.image01}></img> */}
        <img src={currentImage}></img>
        <i className="fas fa-chevron-right"></i>
      </div>
      <div className="row"></div>
    </div>;
  }

}
export default Carousel;
