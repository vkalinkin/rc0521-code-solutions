import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {
          topicId: 1,
          header: 'Hypertest Markup Language',
          details: 'html descript',
          open: true
        },
        {
          topicId: 2,
          header: 'Cascading Style Sheets',
          details: 'css descrip',
          open: false
        },
        {
          topicId: 3,
          header: 'JavaScript',
          details: 'js descrip',
          open: false
        }
      ]
    };

  }

  render() {
    const topicsArray = this.state.topics;
    return <div>
      <div>Accordion:</div>
      <div></div>
        {
          topicsArray.map((topic, index) => {
            return <Topic key={index} topicId = {topic.topicId} header= {topic.header} details={topic.details} open = {topic.open} handleClick = {this.handleClick}/>;
          })
        }
    </div>;
  }
}

class Topic extends React.Component {
  render() {
    // console.log("props:", this.props);
    return <div className="topic">
      <div>{this.props.topicId}</div>
      <div>{this.props.header}</div>
      <div className={this.props.open ? 'content open' : 'content closed'}>
        {this.props.details}
      </div>
    </div>;
  }
}

export default Accordion;
