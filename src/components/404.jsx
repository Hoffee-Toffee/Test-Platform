import React from "react";

function NoPage() {
  return (
    <div className="404">
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
            <h1 class="font-weight-light">404</h1>
            <p>
                Page not found
            </p>
            <p>
                <a href="/">Go to home page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;