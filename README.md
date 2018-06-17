# hn
Yet another hacker news clone

---

## About

A HackerNews client built with GraphQL, React and Apollo.

## Getting Started

### HackerNews GraphQL Server

```sh
# Navigate to the project directory
$ cd server

# Install dependencies
$ yarn install

#  Start the server in port 4000
$ yarn run start

```

### HackerNews client

```sh
# Navigate to the project directory
$ cd client

# Install dependencies
$ yarn install

# Start the app server in port 3000
$ yarn run start
```

## Roadmap

- [] Use TypeScript for type safety
- [] Use graphql codegen to generate query types for the codebase
- [] Eject the cra and use custom code-splitting
- [] Use webpack-offline-plugin to turn the app into a PWA
- [] Replace custom styles with theming variables
- [] Use the firebase API to implement subscriptions on the server
- [] Tests