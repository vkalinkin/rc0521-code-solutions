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

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    // console.log('heading clicked!');
    // console.log(event.target);

    // eslint-disable-next-line no-console
    console.log('topicid: ', event.target.getAttribute('topicid'));
    // console.log('header: ', event.target.getAttribute('header'));
    // console.log('open: ', event.target.getAttribute('open'));
    // const targetHeaderId = event.target.getAttribute('topicid');
    // const targetOpen = event.target.getAttribute('open');
    // console.log("0: ", this.state);

  }

  render() {
    const topicsArray = this.state.topics;
    return <div>
      <div>Test2</div>
      <div id="accordion"></div>
      {
        topicsArray.map((topic, index) => {
          return <Topic key={index} topicId={topic.topicId} header={topic.header} details={topic.details} open={topic.open} handleClick={this.handleClick} />;
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
      <h2 onClick={this.props.handleClick} topicid={this.props.topicId} header={this.props.header} open={this.props.open}> {this.props.header}</h2>
      <div className={this.props.open ? 'content open' : 'content closed'}>
        {this.props.details}
      </div>
    </div>;
  }
}

export default Accordion;
