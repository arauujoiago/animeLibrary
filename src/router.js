import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home/home'
import Profile from './pages/profile/profile'
import Login from './pages/login/login'
import MyAnimes from './pages/myAnimes/myAnimes'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/myAnimes" component={MyAnimes} />
          <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
