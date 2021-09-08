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
      <div id="accordion"></div>
      {
        topicsArray.map((topic, index) => {

          return <Topic key={index} topicId={topic.topicId} header={topic.header} details={topic.details} handleClick={this.handleClick} openId={this.state.openId} />;

        })
      }
    </div>;
  }
}

class Topic extends React.Component {
  render() {

    return <div>
      <div className={'headerBox'} onClick={this.props.handleClick} topicid={this.props.topicId}> {this.props.header}</div>
      <div className={this.props.topicId === parseInt(this.props.openId) ? 'content open' : 'content closed'}>
        {this.props.details}
      </div>
    </div>;
  }
}

export default Accordion;
