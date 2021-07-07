import React from 'react';
import ReactDom from 'react-dom';

const divRoot = document.getElementById('root');

const react1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDom.render(react1, divRoot);
