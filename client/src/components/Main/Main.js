import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Search from "../Search";
// import Results from "../Results";
// import Saved from "../Saved";

const App = () =>
  <div>
    <Header />
    <div>
      <Search />
      {/*<Results />*/}
      {/*<Saved />*/}
    </div>
  </div>;

export default App;
