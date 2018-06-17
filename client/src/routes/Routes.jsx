import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  // Comments,
  // Error,
  Stories
  // User
} from "../views";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Stories} />
      {/* <Route exact path="comments" component={Comments} />
            <Route exact path="user" component={User} />
            <Route path="*" component={Error} /> */}
    </Router>
  );
};

export default Routes;
