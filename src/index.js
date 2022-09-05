import React from "react";
import ReactDom from "react-dom";
import Avatar from "./Avatar";
import NameWithHandle from "./NameWithHandle";
import Message from "./Message";
import Time from "./Time";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import MoreOptionsButton from "./MoreOptionsButton";
import LikeButton from "./LikeButton";
import "./index.css";

function MapTweets({ tweets }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.message} />
      ))}
    </div>
  );
}

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

var testTweet = [
  {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
      handle: "catperson",
      name: "IAMA Cat Person",
    },
    likes: 2,
    retweets: 3,
    timestamp: "2022-08-30 20:20:37",
  },
  {
    message: "Abiola is a goat",
    gravatar: "abc",
    author: {
      handle: "abiola",
      name: "IAMBIYAYA",
    },
    likes: 5,
    retweets: 10,
    timestamp: "2022-09-04 20:20:37",
  },
  {
    message: "Temiloluwa is a genius",
    gravatar: "lmn",
    author: {
      handle: "mightblowyourmind",
      name: "IAM A genius",
    },
    likes: 150,
    retweets: 300,
    timestamp: "2022-09-04 20:20:37",
  },
];

ReactDom.render(
  <MapTweets tweets={testTweet} />,
  document.querySelector("#root")
);
