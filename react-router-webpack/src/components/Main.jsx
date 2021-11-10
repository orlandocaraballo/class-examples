import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import Bender from "./Bender.jsx";
import Fry from "./Fry.jsx";
import Pups from "./Pups.jsx";
import Pup from "./Pup.jsx";
import pups from "./pups.js";

const Main = () => (
  <main>
    {/*
      Definition: Routes allow us conditionally display certain components
        based on if the browser url matches the path attribute.
        https://v5.reactrouter.com/web/api/Route
    */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fry" component={Fry} />
      <Route path="/bender" component={Bender} />
      <Route
        exact
        path="/pups"
        render={(props) => <Pups {...props} pups={pups} />}
      />
      <Route path="/pups/:pupId" component={Pup} />
      {/*
      Routes are matched inclusively which means that all matches will display
        the corresponding component. To enable exclusive matching, you can use
        the Switch React Router component.
        https://v5.reactrouter.com/web/api/Switch
     */}
    </Switch>
  </main>
);

export default Main;
