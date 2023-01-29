import React from "react";
import { default as Feed } from "./Feed";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Topic() {
  let { topicSlug } = useParams();

  let topic = require("../data.json").topics[topicSlug];

  return (
    <div className="user">
      <div class="container profile">
        <h1 className="mt-5 font-weight-light">{topic.name}</h1>
        <p>{topic.desc}</p>

        <p>
            <span>Tags: </span>
            {topic.tags.map((tag, index) => (
                // Add a comma after each user's name except the last two, which should have "and" before the last name
                <span>
                    {tag}
                    {index < topic.tags.length - 2 ? ", " : ""}
                    {index == topic.tags.length - 2 ? " and " : ""}
                </span>
            ))}
        </p>
      </div>
      {/* Pass the topic's slug to the Feed component to filter the posts by the topic */}
      <Feed topic={topicSlug} small={true} />
    </div>
  );


}

export default Topic;