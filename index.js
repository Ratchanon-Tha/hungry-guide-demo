// index.js

function setSharedCookie() {
  // Set cookie accessible to all subdomains
  document.cookie = "dark-theme=true; path=/; Domain=.github.io";
  alert("Cookie set for .github.io!");
}

function navigate() {
  window.location.href = "https://ratchanontha.github.io/cookie-subdomain-poc/index.html";
}
