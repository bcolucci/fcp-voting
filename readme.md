
# Voting application

## Description

User stories:
- TODO As an authenticated user, I can keep my polls and come back later to access them.
- TODO As an authenticated user, I can share my polls with my friends.
- TODO As an authenticated user, I can see the aggregate results of my polls.
- TODO As an authenticated user, I can delete polls that I decide I don't want anymore.
- TODO As an authenticated user, I can create a poll with any number of possible items.
- TODO As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
- TODO As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
- TODO As an authenticated user, if I don't like the options on a poll, I can create a new option.

## TODO

- Models, all actions, reducer... + tests (unit)
- Server side (koa) + test (functional)
- Documentation generation

## How to test

    git clone https://github.com/bcolucci/fcp-voting.git \
      && cd fcp-voting \
      && npm install \
      && npm start \
      && xdg-open http://localhost:3210/
