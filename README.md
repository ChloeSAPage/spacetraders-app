# Spacetraders

Web app built using React, TypeScript and the [SpaceTraders.io](https://docs.spacetraders.io/quickstart/new-game) API.

> SpaceTraders is a fun, free game driven entirely through API interactions.

## Requirements

NodeJS 18+
NPM

## Running

`npm ci`
`npm run dev`
See `package.json` for more details on available scripts.

## Steps taken and thought processes

1. Initial Commit and Repo rules

Add rule to Github repo to prevent commits to main and require PR.

2. Read and understand code

Make a request to the register endpoint, store the response and token in state.

3. Change page title and favicon

4. Move api calls into 1 file

move given anonymous function into a new function called register. Need to return the ok response from fetch, as well as the body.

5. Mock API call

Using a previous response, create a mock API function which returns a response from a json file.

6. Render information from request

Create new components that are conditionally rendered which contain information needed.

7. Move state into app.jsx

Lift the state up so we can pass the token into other components.

7. Find starting location

# Improvements

1. Better use of the type system

Define types for props and API response instead of using any

2. Better error handling

Errors should be handled according to the HTTP response (404, 401, 418 etc.)

3. Testing and mocking

Write tests

# What I learnt

1. async functions need to return `Promise<T>`

2. You can type props in react

3. That you can make custom types in typescript
