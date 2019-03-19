import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import "./index.css";


//user personality
import Login from "./component/pages/form-user/login";
import Register from "./component/pages/form-user/register";
import Home from "./component/pages/homepage"

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
