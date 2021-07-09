import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ListMovie from "./pages/listMovie/ListMovie";
import ListTvShow from "./pages/listTvShow/ListTvShow";

export default function renderRoutes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Main />} />
      <Route
        exact
        path="/movies"
        render={(params) => <ListMovie params={params} />}
      />
      <Route
        exactpath="/tv-shows"
        render={(params) => <ListTvShow params={params} />}
      />
    </Switch>
  );
}
