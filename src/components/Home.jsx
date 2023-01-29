import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <h1 class="font-weight-light">Home</h1>
          <p>
          Search bar - Search for topics, proposals, research, and users
          Tabs - Trending, following, and pinned topics/research/users
          Filters - Sort by date, status, type, source, reputation, and more
          Feed - Shows the results of the search or the newest within the tab chosen
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;