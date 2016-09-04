

Easy Nodejs Setup
===============


This project is a simple setup I want to have for other projects. 

It contains the following: 

 - frontend with live-reload and access to backend
 - styling with sass. also reloaded automatically
 - support for font-awesome and POC on images - including style references to images
 - auto-reload for backend with nodemon
 - js-standard linter
 - testing for both with mocha for backend and karma+jasmine for frontend
 - a build that packs minimized version of the project to tar.gz.
 - coverage reports for tests in frontend & backend

# How to use

 - `npm test` - runs linter, frontend tests with coverage, backend tests with coverage   
                write backend tests under `tests/backend` with suffix `.spec.js`   
                write frontend tests under `tests/frontend` with suffix `.spec.js`
 - `npm run build` - annotates angular, minifies code and packs npm in dist folder
 - `npm start` - runs the project in development environment
 - `npm server:dist` - will run the project just like it would in production.

# Using --silent on npm run commands

In some commands it is recommended to use `--silent`.   
For example, running `npm test` might result in error.   
npm has an annoying error print if it exists in none 0 exit code. [read more](https://github.com/npm/npm/issues/6124)   
   
A simple solution is to run `npm test --silent`

# Using no-color

Sometimes it is also recommended to use `npm config set color false`   
Note, this will not always apply to the output coming from a script. 

For example, if log4js is used, it will print with color



