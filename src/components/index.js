export { default as Feed } from "./Feed";
export { default as Post } from "./Post";
export { default as NoPage } from "./404";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
export { default as Footer } from "./Footer";
export { default as Home } from "./Home";
export { default as Navigation } from "./Navigation";
export { default as Topic } from "./Topic";
export { default as User } from "./User";

// Uncheck nav-toggle
function uncheck () {
  document.getElementById('nav-toggle').checked = false;
}

// Uncheck when not clicking on the nav or when scrolling
document.addEventListener('click', e => { if (e.target.classList.contains('nav-link') || e.target.id === 'cover') uncheck(); });
document.addEventListener('scroll', uncheck);