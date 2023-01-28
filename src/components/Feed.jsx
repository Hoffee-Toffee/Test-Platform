import React from "react";

function Feed() {
  // Check if params have been passed to the component from the parent
  let props = arguments[0];
  
  let user = parseInt(props.user);
  if (user) console.log("User: " + user);

  let topic = parseInt(props.topic);
  if (topic) console.log("Topic: " + topic);

  let posts = require("../data.json").posts;
  let users = require("../data.json").users;
  let topics = require("../data.json").topics;

  var msg = undefined;

  // Filter the posts by the user if the user param is present
  if (user) {
    posts = posts.filter((post) => post.authors.includes(user));
    msg = `${users[user].name}'${users[user].name.endsWith("s") ? "" : "s"} posts`;
  }

  // Filter the posts by the topic if the topic param is present
  if (topic) {
    posts = posts.filter((post) => post.topics.includes(topic));
    msg = `Posts about ${topics[topic].name}`;
  }

  var toReturn = []

  posts.forEach((post) => {
    // Use the current time to get how long ago the post was published or updated
    var now = new Date();
    var published = new Date(post.published);
    var updated = new Date(post.updated);

    var timeDiff = Math.abs(now.getTime() - published.getTime());

    // Get the number of years, months, days, hours, minutes, and seconds since the post was published
    var times = {
      years: Math.floor(timeDiff / (1000 * 3600 * 24 * 365)),
      months: Math.floor(timeDiff / (1000 * 3600 * 24 * 30)),
      days: Math.floor(timeDiff / (1000 * 3600 * 24)),
      hours: Math.floor(timeDiff / (1000 * 3600)),
      minutes: Math.floor(timeDiff / (1000 * 60)),
      seconds: Math.floor(timeDiff / 1000),
    };

    // Get the first time unit that is greater than 1 or say "just now" if none are
    // Loop though each property in the times object and return the first one that is greater than 1

    var publishedTime = Object.keys(times).find((key) => times[key] > 1);
    publishedTime = publishedTime == undefined ? "just now" : `${times[publishedTime]} ${publishedTime} ago`;

    var updatedTime = Object.keys(times).find((key) => times[key] > 1);
    updatedTime = updatedTime == undefined ? "just now" : `${times[updatedTime]} ${updatedTime} ago`;

    toReturn.push(
      <div className="post">
        <h2>
          <a href={"/post/" + post.id}>{post.title}</a>
        </h2>
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
        <p>
          {post.content.substring(0, 100)}
          {post.content.length > 100 ? "..." : ""}
        </p>
      </div>
    );
  });

  return <div className="feed">
    <div class="container">
    <h1 className="text-center mt-5">{(msg !== undefined) ? msg : "Feed"}</h1>
    {toReturn}
    </div>
  </div>;
}

export default Feed;