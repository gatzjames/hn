import React, { Component } from "react";
import {
  Grid,
  Tabs,
  Tab,
  IconButton
} from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

import StoriesList from "./StoriesList";
import StoriesQuery from "./StoriesQuery";

const STORIES_PER_PAGE = 10;
const MIN_PAGE = 1;

const storyTypes = ["top", "new", "ask", "show", "job"];

class StoriesView extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      type: "top",
      page: 1
    };
  }

  handleChangePage = page => {
    this.setState({ page });
  };

  handleChangeType = (e, type) => {
    e.preventDefault();
    this.setState({ type, page: 1 });
  };

  render() {
    const { type, page } = this.state;
    return (
      <StoriesQuery
        variables={{ type, page, count: STORIES_PER_PAGE }}
        fetchPolicy="cache-and-network"
      >
        {({ data, loading }) => (
          <Grid container spacing={16} style={{ justifyContent: "center" }}>
            <StoriesList
              loading={loading}
              stories={data.stories}
              subheader={
                <Tabs onChange={this.handleChangeType} value={type}>
                  {storyTypes.map(storyType => (
                    <Tab key={storyType} label={storyType} value={storyType} />
                  ))}
                </Tabs>
              }
            />
            <Grid
              item
              xs={12}
              md={12}
              lg={8}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <IconButton
                onClick={() => {
                  this.handleChangePage(page - 1);
                }}
                aria-label="Previous Page"
                color="primary"
                disabled={page <= MIN_PAGE}
              >
                <NavigateBefore />
              </IconButton>
              <IconButton
                onClick={() => {
                  this.handleChangePage(page + 1);
                }}
                aria-label="Next Page"
                color="primary"
                disabled={
                  data && data.stories && data.stories.length < STORIES_PER_PAGE
                }
              >
                <NavigateNext />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </StoriesQuery>
    );
  }
}

export default StoriesView;
