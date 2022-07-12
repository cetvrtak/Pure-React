import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var testTweet = {
  message: "Something about cars.",
  gravatar: "nothing",
  author: {
    handle: "Batman",
    name: "Bruce Wayne 🙊"
  },
  likes: 200,
  retweets: 100,
  timestamp: "2022-07-12 06:27:27"
};

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar({hash}) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

function Message({text}) {
  return (
    <div className="message">
     {text}
    </div>
  );
}

function NameWithHandle({author}) {
  const {name, handle} = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({time}) => (
  <span className="time">{time}</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>,
  document.querySelector('#root'));