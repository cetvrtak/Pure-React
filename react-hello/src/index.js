import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
      [<Hello/>, <World/>]
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root'));

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}