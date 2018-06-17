import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";

import client from "./networkClient";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <CssBaseline />
          <AppBar position="static" style={{ background: "white" }}>
            <Grid container spacing={16} style={{ justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={8}>
                <Toolbar>
                  <Typography variant="title" style={{ color: "orange" }}>
                    HN
                  </Typography>
                </Toolbar>
              </Grid>
            </Grid>
          </AppBar>
          <Routes />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
