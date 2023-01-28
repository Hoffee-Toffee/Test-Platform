import React from "react";

function Topic() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Topic</h1>
            <p>
            Search bar - Search for topics, proposals, research, and users
            Topic - Shows the topic, description, and tags for the topic
            Tabs - Research, discussion
            Filters - Sort by date, status, type, source, reputation, and more
            Feed - Shows the results of the search or the newest within the tab chosen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;