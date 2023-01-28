import React from "react";
import { Link } from "react-router-dom";

// function Posts() { // Shows two example posts 
//   return (
//     <div className="home">
//       <div class="container">
//         <Link to="/feed/this-is-a-post-title">
//           <div class="row align-items-center my-5">
//             <div class="col-lg-7">
//               <img
//                 class="img-fluid rounded mb-4 mb-lg-0"
//                 src="http://placehold.it/900x400"
//                 alt=""
//               />
//             </div>
//             <div class="col-lg-5">
//               <h1 class="font-weight-light">This is a post title</h1>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </div>
//           </div>
//         </Link>
//         <Link to="/feed/this-is-another-post-title">
//           <div class="row align-items-center my-5">
//             <div class="col-lg-7">
//               <img
//                 class="img-fluid rounded mb-4 mb-lg-0"
//                 src="http://placehold.it/900x400"
//                 alt=""
//               />
//             </div>
//             <div class="col-lg-5">
//               <h1 class="font-weight-light">This is another post title</h1>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// First line is the title of the post with a link to the post
// Second half of the line is each user's name with a link to their profile
// Second line is the date the post was published
// Third line is the topics of the post with links to the topic page
// Fourth line is the first 100 characters of the post ending with "..." if the post is longer than 100 characters

function Posts() {
  let posts = require("../../data.json").posts;
  let users = require("../../data.json").users;
  let topics = require("../../data.json").topics;

  var toReturn = [];
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
          <a href={"/feed/" + post.id}>{post.title}</a>
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

  return <div className="posts">{toReturn}</div>;
}

export default Posts;