import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topicInfo = [
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
];

ReactDOM.render(
  <Accordion topicInfo={topicInfo}/>,
  document.querySelector('#root')
);
