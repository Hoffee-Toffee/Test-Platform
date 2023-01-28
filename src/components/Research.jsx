import React from "react";

function Research() {
  return (
    <div className="research">
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
            <h1 class="font-weight-light">Research</h1>
            <p>
            Research - Shows the research, description, and tags for the research
            Main - Shows the research itself, with the ability to view and add flags to individual sections and lines
            Tabs - Comments, related research
            Filters - Sort by date, status, type, source, reputation, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;