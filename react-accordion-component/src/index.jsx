import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topicInfo = [
  {
    topicId: 1,
    header: 'Hypertext Markup Language',
    details: 'Hypertext Markup Language (HTML) is the standard markup language for creating webpages and web applications. With Cascading Style Sheets (CSS) and Javascript, it forms a triad of cornerstone technologies for the World Wide Web. ',
    open: true
  },
  {
    topicId: 2,
    header: 'Cascading Style Sheets',
    details: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and Javascript.',
    open: false
  },
  {
    topicId: 3,
    header: 'JavaScript',
    details: 'Javascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the EMCAScript specification. Javascript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    open: false
  }
];

ReactDOM.render(
  <Accordion topicInfo={topicInfo}/>,
  document.querySelector('#root')
);
