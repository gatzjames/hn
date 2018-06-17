import React from "react";
import {
  ListItem,
  Typography,
  Grid,
  List,
  LinearProgress
} from "@material-ui/core";

import {
  ExpandLess as ArrowUpIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  AccessTime as TimeIcon,
  Link as LinkIcon
} from "@material-ui/icons";

import { distanceInWordsToNow } from "date-fns";

const dateAgo = unixDate => {
  if (!unixDate) return;

  const date = new Date(unixDate * 1000);

  return distanceInWordsToNow(date, {
    addSuffix: true
  });
};

const IconText = ({ icon, text }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      marginRight: "16px"
    }}
  >
    {icon}
    <span style={{ marginLeft: "8px" }}>{text}</span>
  </div>
);

const StoriesList = ({ stories = [], subheader, loading = false }) => {
  return (
    <Grid item xs={12} md={12} lg={8}>
      {loading && <LinearProgress />}
      <List subheader={subheader}>
        {stories.map((story = {}) => {
          const url = story.url ? new URL(story.url).host : "";
          return (
            <ListItem
              key={story.id}
              style={{
                borderBottom: "1px solid rgb(237, 237, 237)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
              onClick={() => {}}
            >
              <Typography
                gutterBottom
                variant="title"
                component="a"
                noWrap={false}
                href={story.url}
                target="__blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(112, 120, 112)"
                }}
              >
                {story.title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  color: "rgb(112, 120, 112)",
                  flexWrap: "wrap"
                }}
              >
                <IconText
                  icon={<ArrowUpIcon />}
                  text={
                    <Typography variant="caption" color="inherit">
                      {story.score}
                    </Typography>
                  }
                />
                <IconText
                  icon={<PersonIcon />}
                  text={
                    <Typography variant="caption" color="inherit">
                      {story.by}
                    </Typography>
                  }
                />
                <IconText
                  icon={<TimeIcon />}
                  text={
                    <Typography variant="caption" color="inherit">
                      {dateAgo(story.time)}
                    </Typography>
                  }
                />
                <IconText
                  icon={<ChatIcon />}
                  text={
                    <Typography color="inherit" variant="caption">
                      {story.descendants}
                    </Typography>
                  }
                />
                {url && (
                  <IconText
                    icon={<LinkIcon />}
                    text={
                      <Typography
                        color="inherit"
                        variant="caption"
                        component="a"
                        href={`https://${url}`}
                        target="__blank"
                      >
                        {url}
                      </Typography>
                    }
                  />
                )}
              </div>
              {story.text && (
                <div style={{ padding: "16px" }}>
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: story.text }}
                  />
                </div>
              )}
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default StoriesList;
