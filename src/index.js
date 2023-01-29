import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Feed,
  Post,
  NoPage,
  About,
  Contact,
  Footer,
  Home,
  Navigation,
  Topic,
  User
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/feed" element={<Feed />} />
      <Route path="/post/:postSlug" element={<Post />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/topic/:topicSlug" element={<Topic />} />
      <Route path="/user/:userSlug" element={<User />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);