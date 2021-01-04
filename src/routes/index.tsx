import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "~/pages/Home";
import Main from "~/pages/Main";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Main} />
      <Route path="/login" component={Home} />
    </Switch>
  );
};

export default Routes;
