import React from "react";
import { Query } from "react-apollo";

import QUERY from "../../queries/getStories.graphql";

const StoriesQuery = props => (
  <Query query={QUERY} {...props}>
    {dataProps => props.children(dataProps)}
  </Query>
);

export default StoriesQuery;
