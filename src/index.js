import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Blog,
  Post,
  Posts,
  NoPage,
  About,
  Contact,
  Footer,
  Home,
  Navigation,
  Research,
  Topic,
  User
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/research" element={<Research />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/user" element={<User />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);