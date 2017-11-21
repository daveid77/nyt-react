import React from "react";

const Nav = () =>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">React Scraper</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/saved">Saved Articles</a></li>
        </ul>
        <form class="navbar-form navbar-left">
          <button class="btn btn-primary scrape-articles">Scrape New Articles</button>
        </form>
      </div>
    </div>
  </nav>;

export default Nav;
