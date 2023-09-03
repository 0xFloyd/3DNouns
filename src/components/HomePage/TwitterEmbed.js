import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

function TweetEmbed({ tweetId }) {
  return (
    <div>
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  );
}

export default TweetEmbed;
