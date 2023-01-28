import React, { useEffect } from "react";
import { useParams } from "react-router";
import { default as Comments } from "./Comments";

function Post() {
  let { postSlug } = useParams();

  let post = require("../data.json").posts[postSlug];
  let users = require("../data.json").users;
  let topics = require("../data.json").topics;

  // Use the current time to get how long ago the post was published or updated
  var now = new Date();
  var published = new Date(post.published);
  var updated = new Date(post.updated);

  var pubDiff = Math.abs(now.getTime() - published.getTime());
  var updDiff = Math.abs(now.getTime() - updated.getTime());


  // Get the number of years, months, days, hours, minutes, and seconds since the post was published
  var pubTimes = {
    years: Math.floor(pubDiff / (1000 * 3600 * 24 * 365)),
    months: Math.floor(pubDiff / (1000 * 3600 * 24 * 30)),
    days: Math.floor(pubDiff / (1000 * 3600 * 24)),
    hours: Math.floor(pubDiff / (1000 * 3600)),
    minutes: Math.floor(pubDiff / (1000 * 60)),
    seconds: Math.floor(pubDiff / 1000),
  };

  // Get the number of years, months, days, hours, minutes, and seconds since the post was updated
  var updTimes = {
    years: Math.floor(updDiff / (1000 * 3600 * 24 * 365)),
    months: Math.floor(updDiff / (1000 * 3600 * 24 * 30)),
    days: Math.floor(updDiff / (1000 * 3600 * 24)),
    hours: Math.floor(updDiff / (1000 * 3600)),
    minutes: Math.floor(updDiff / (1000 * 60)),
    seconds: Math.floor(updDiff / 1000),
  };

  // Get the first time unit that is greater than 1 or say "just now" if none are
  // Loop though each property in the times object and return the first one that is greater than 1

  var publishedTime = Object.keys(pubTimes).find((key) => pubTimes[key] > 1);
  publishedTime = publishedTime == undefined ? "just now" : `${pubTimes[publishedTime]} ${publishedTime} ago`;

  var updatedTime = Object.keys(updTimes).find((key) => updTimes[key] > 1);
  updatedTime = updatedTime == undefined ? "just now" : `${updTimes[updatedTime]} ${updatedTime} ago`;

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">{post.title}</h1>
        <p>
          <span>By </span>
          {post.authors.map((user, index) => (
            // Add a comma after each user's name except the last two, which should have "and" before the last name
            <span>
              <a href={"/user/" + users[user].id}>{users[user].name}</a>
              {index < post.authors.length - 2 ? ", " : ""}
              {index == post.authors.length - 2 ? " and " : ""}
            </span>
          ))}
        </p>
        <p>Last updated {updatedTime}</p>
        <p>Published {publishedTime}</p>
        <p>
          <span>Topics: </span>
          {post.topics.map((topic, index) => (
            // Add a comma after each topic except the last two, which should have "and" before the last topic
            <span>
              <a href={"/topic/" + topics[topic].id}>{topics[topic].name}</a>
              {index < post.topics.length - 2 ? ", " : ""}
              {index == post.topics.length - 2 ? " and " : ""}
            </span>
          ))}
        </p>
        {/* Show the content as a paragraph for each \n in the content */}
        <p>{post.content.split("\n").map((paragraph) => <p>{paragraph}</p>)}</p>
      </div>
      <Comments post={postSlug} />
    </div>
  );
}

export default Post;