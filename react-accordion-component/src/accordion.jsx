import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: 0
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    const targetId = event.target.getAttribute('topicid');
    const currentId = this.state.openId;
    if (targetId === currentId) {
      this.setState({ openId: 0 });
    } else {
      this.setState({ openId: targetId });
    }

  }

  render() {
    const topicsArray = this.props.topicInfo;
    return <div>
      <div>Test2</div>
      <div id="accordion"></div>
      {
        topicsArray.map((topic, index) => {
          return <Topic key={index} topicId={topic.topicId} header={topic.header} details={topic.details} open={topic.open} handleClick={this.handleClick} openId={this.state.openId}/>;
        })
      }
    </div>;
  }
}

class Topic extends React.Component {

  render() {

    return <div className="topic">
      <div>{this.props.topicId}</div>
      <h2 onClick={this.props.handleClick} topicid={this.props.topicId} header={this.props.header} open={this.props.open}> {this.props.header}</h2>
      <div className={this.props.topicId === parseInt(this.props.openId) ? 'content open' : 'content closed'}>
        {this.props.details}
      </div>
    </div>;
  }
}

export default Accordion;
