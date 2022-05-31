import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return (
    <div>
      {/* Task 1 */}
      <div className='book'>
        <div className='title'>
          The Title
        </div>
        <div className='author'>
          The Author
        </div>
        <ul className='stats'>
          <li className='rating'>
            5 stars
          </li>
          <li className='isbn'>
            12-345678-910
          </li>
        </ul>
      </div>

      {/* Task 2 */}
      <div>
      Newline
      Test
      </div>
      <div>
      Empty

      Newlines

      Here
      </div>
      <div>
      &nbsp;Non-breaking
      &nbsp;Spaces&nbsp;
      </div>
      <div>
      Line1
      {' '}
      Line2
      </div>

      {/* Task 3 */}
      <div>
      {
        React.createElement('div', {className:'book'},
          React.createElement('div', {className:'title'}, "The Title"),
          React.createElement('div', {className:'author'}, "The Author"),
          React.createElement('ul', {className:'stats'},
            React.createElement('li', {className:'rating'}, "5 stars"),
            React.createElement('li', {className:'isbn'}, "12-345678-910")
          )
        )
      }
      </div>
      <div>{
        React.createElement('span', {}, "Stevo Iliskovic")
      }</div>

    </div>
  );
}

ReactDOM.render(
  <div>
    <MyThing/><br/>
    Task 4
    <Greeting/><br/>
    Task 5.a
    <testComponent/><br/>
    Task 5.b
    <TestComponent/><br/>
    Task 5.c
    <Task5C/><br/>
    Task 5.d
    <Task5D/><br/>
    Task 5.e
    <Task5E/><br/>
    Task 5.f
    <Task5F/><br/>
    Task 5.g
    <Task5G/>
  </div>,
  document.getElementById('root')
);

// Task 4
function Greeting() {
  var username = false;
  return (
    <div>
      {username != undefined || null ? `Hello ${username}` : "Not logged in"}
    </div>
  );
}

// Task 5.a
function testComponent() {
  return <div>Doesn't get here!</div>;
}

// Task 5.b
function TestComponent() {
  // return <div>Much</div> <div>better!</div>; Doesn't work
  return <div><div>Much</div> <div>better!</div></div>;
}

// Task 5.c
function Task5C() {
  return [<div>Array</div>,<div>Elements</div>];
}

// Task 5.d
function Task5D() {
  let x = 1;
  return (
    <div>
      {
        // x && 5; x && 7 <-- Doesn't work
        x && 5
      }
    </div>
  );
}

// Task 5.e
function Task5E() {
  return
    // <div>{return;}</div> <-- Unexpected token "return"
}

// Task 5.f
function Task5F() {
  return <div>{alert('hi')}</div>; // It does halt rendering
}

// Task 5.g
function Task5G() {
  return <div>"Hello World!"</div>; // --> "Hello World!"
}