import React from "react";
import { Link } from "react-router-dom";

function Feed() {
  // Check if params have been passed to the component from the parent
  let props = arguments[0];
  
  let user = parseInt(props.user);
  if (user) console.log("User: " + user);

  let topic = parseInt(props.topic);
  if (topic) console.log("Topic: " + topic);

  let small = props.small == true;

  let posts = require("../data.json").posts;
  let users = require("../data.json").users;
  let topics = require("../data.json").topics;

  var msg = undefined;

  // Filter the posts by the user if the user param is present
  if (user || user == 0) {
    posts = posts.filter((post) => post.authors.includes(user));
    msg = `${users[user].name}'${users[user].name.endsWith("s") ? "" : "s"} posts`;
  }

  // Filter the posts by the topic if the topic param is present
  if (topic || topic == 0) {
    posts = posts.filter((post) => post.topics.includes(topic));
    msg = `Posts about ${topics[topic].name}`;
  }

  var toReturn = []

  if (small) {
    toReturn.push(<h2 className="text-center mt-5 font-weight-light">{(msg !== undefined) ? msg : "Feed"}</h2>);
  } else {
    toReturn.push(<h1 className="text-center mt-5 font-weight-light">{(msg !== undefined) ? msg : "Feed"}</h1>);
  }

  posts.forEach((post) => {
    var now = new Date();
    var published = new Date(post.published);

    toReturn.push(
      <div className="post card mb-5">
        <div className="card-header">
          <h2 className="card-title">
            <Link to={"/post/" + post.id}>{post.title}</Link>
          </h2>
          <p>
            <span>By </span>
            {post.authors.map((user, index) => (
              // Add a comma after each user's name except the last two, which should have "and" before the last name
              <span>
                <Link to={"/user/" + users[user].id}>{users[user].name}</Link>
                {index < post.authors.length - 2 ? ", " : ""}
                {index == post.authors.length - 2 ? " and " : ""}
              </span>
            ))}
            <span className="text-muted"> - {published.toLocaleDateString()}</span>
          </p>
          <p>
            <span>Topics: </span>
            {post.topics.map((topic, index) => (
              // Add a comma after each topic except the last two, which should have "and" before the last topic
              <span>
                <Link to={"/topic/" + topics[topic].id}>{topics[topic].name}</Link>
                {index < post.topics.length - 2 ? ", " : ""}
                {index == post.topics.length - 2 ? " and " : ""}
              </span>
            ))}
          </p>
        </div>
        <div className="card-body">
          <p>
            {post.content.substring(0, 100)}
            {post.content.length > 100 ? "..." : ""}
          </p>
        </div>
      </div>
    );
  });

  return <div className="feed">
    <div class="container">
    {toReturn}
    </div>
  </div>;
}

export default Feed;