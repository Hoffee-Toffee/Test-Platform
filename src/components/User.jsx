import React from "react";
import { default as Feed } from "./Feed";
import { useParams } from "react-router";


function User() {
  let { userSlug } = useParams();

  let user = require("../data.json").users[userSlug];

  return (
    <div className="user">
      <div class="container profile">
        <h1 className="mt-5">{user.name}</h1>
        <p>{user.name}'{user.name.endsWith("s") ? "" : "s"} profile information will go here</p>
      </div>
      {/* Pass the user's slug to the Feed component to filter the posts by the user */}
      <Feed user={userSlug} />
    </div>
  );


}

export default User;