import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="groups" component={Groups}></Route>
      <Route path="notes" component={Notes}></Route>
      <Route path="profile" component={Profile}></Route>
    </Route>
  </Router>,
app);
