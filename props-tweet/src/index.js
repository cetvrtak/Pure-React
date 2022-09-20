import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

var testTweet = {
  message: "Something about cars.",
  gravatar: "nothing",
  author: {
    handle: "Batman",
    name: "Bruce Wayne 🙊",
  },
  likes: 200,
  retweets: 100,
  timestamp: "2022-07-12 06:27:27",
};

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
// Tweet.propTypes = {
//   tweet: PropTypes.shape({
//     gravatar: PropTypes.string,
//     author: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       handle: PropTypes.string.isRequired,
//     }),
//     timestamp: PropTypes.string,
//     message: PropTypes.string,
//     retweets: PropTypes.number,
//     likes: PropTypes.number,
//   }),
// };
Tweet.propTypes = { tweet: PropTypes.object };

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}
Avatar.propTypes = { hash: PropTypes.string };

function Message({ text }) {
  return <div className="message">{text}</div>;
}
Message.propTypes = {
  text: PropTypes.string,
};

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => <span className="time">{time}</span>;
Time.propTypes = { time: PropTypes.string };

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  return count > 0 ? <span className="retweet-count">{count}</span> : null;
}

const RetweetButton = ({ count }) => (
  <span className="retweetbutton">
    <i className="fa fa-retweet retweet-button" />
    {getRetweetCount(count)}
  </span>
);
RetweetButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton = ({ count }) => (
  <span className="likebutton">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);
LikeButton.propTypes = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
