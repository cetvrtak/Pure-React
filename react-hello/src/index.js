import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
    <div>
      <Hello/> <World/>!
    </div>
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