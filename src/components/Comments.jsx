import React from "react";
import { useParams } from "react-router";
import { default as Comment } from "./Comment";

function Comments() {
  // Get params passed to the component from the parent
  let props = arguments[0];
  
  let post = parseInt(props.post);
  if (post) console.log("Post: " + post);

  let user = parseInt(props.user);
  if (user) console.log("User: " + user);

  let topic = parseInt(props.topic);
  if (topic) console.log("Topic: " + topic);

  let comment = parseInt(props.comment);
  if (comment) console.log("Comment: " + comment);

  let users = require("../data.json").users;
  let comments = require("../data.json").comments;

  var msg = "Comments";

  // Filter the comments by the user if the user param is present
  if (user || user == 0) {
    comments = comments.filter((comment) => comment.author == user);
    msg = `${users[user].name}'${users[user].name.endsWith("s") ? "" : "s"} comments`;
  }

  // Filter the comments by the topic if the topic param is present
  if (topic || topic == 0) {
    comments = comments.filter((comment) => comment.parent == `topic${topic}`);
  }

  // Filter the comments by the post if the post param is present
  if (post || post == 0) {
    comments = comments.filter((comment) => comment.parent == `post${post}`);
  }

  // Filter the comments by the comment if the comment param is present
  if (comment || comment == 0) {
    comments = comments.filter((comment) => comment.parent == `comment${comment}`);
  }

  var toReturn = []

  comments.forEach((comment) => {
    console.log(comment);
    toReturn.push(<Comment comment={comment.id} />);
  });

  return (
    <div className="comments">
        <div className="container">
            <h1 className="mt-5">{msg}</h1>
            <div className="row">
                {toReturn}
            </div>
        </div>
    </div>
    );
}

export default Comments;