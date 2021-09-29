import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import Routess from "Routess";
import AdminLayout from "layouts/Admin.js";
import store from "./Store";
import { Provider } from "react-redux";
import "./Sass/Custom.min.css";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routess />
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
