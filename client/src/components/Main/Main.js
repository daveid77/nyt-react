import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";

const App = () =>
  <div>
    <Nav />
    <div >
      <Search />
      <Results />
      <Saved />
    </div>
  </div>;

export default App;
