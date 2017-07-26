# MEAN Starter Project

This documentation is a work in progress

## Contents

- [Purpose](#purpose)
- [Requirements](#requirements)
- [Development Setup](#development-setup)
- [Scripts](#scripts)
- [Debugging](#debugging)
- [Angular CLI](#angular-cli)
- [Advanced Docker](#advanced-docker)

## Purpose

Quick starter project for getting a MEAN template application up and running. The starter is a rapidly evolving project with several branches (technical spikes) of work. These include:
- `master` branch; the default MEAN template expecting with a MongoDB backend
- `authentication` and `jwt_authentication` branches; technical spikes demonstrating authentication with Passport for session & JWT schmes
- `sql` branch; technical spike switching out the mongoDB backend for an MySQL database using Sequelize

**NOTE: The `master` branch is the only support version of this quick starter**

A Cookbook exists here: [CookBook](https://github.com/atosorigin/DDU-Team3-MEAN-Starter/wiki/MEAN-QuickStart-CookBook)

## Requirements

* [NodeJs](http://nodejs.org) >= 6.10.0
* [mongodb](http://mongodb.org)

## Development Setup

### Installation
- Clone from GitHub
- Run `npm install` from the root of the project; this will install all the dependencies required

### Development Environment
- We *strongly* recommend using [Visual Studio Code](https://code.visualstudio.com) as your IDE

### Database
- The `master` branch of the MEAN Quickstarter requires a MongoDB database to be running for the server to connect too
- The default expects this to be run on `localhost` port `27017`

*Note: You can override this by providing the environment variable `MEAN_MONGO_BASE_URI`, e.g. `MEAN_MONGO_BASE_URI=mongodb://localhost:27017/myDB`*

- One, optional way of running the mongoDB database is by using Docker:
  - Install [Docker](https://docs.docker.com/installation/#installation)
  - Run the following command `docker run -p 27017:27017 -d -v ~/Documents/mongo-data:/data/db --name mongo-db mongo`

*Note: To open a bash shell into that container, run `docker exec -it mongo-db bash`*

### Starting The Server
- From the command line, run `npm run build`
- Browse to `localhost:3000` in your web browser to see the application

## Scripts
- `npm start` or `npm run start:dev` - Basic development build and running of the application - will monitor for changes, and rebuild and restart the server automatically.
- `npm run test` - Runs unit tests for Angular 2 Client; Node Express and e2e tests
- `npm run start:debug` - Performs a single build of the application, and runs it in debug mode so debuggers can be attached.
- `npm run start:prod` - Performs a production build of the application, and runs the express server.
- `npm run build:prod` - Performs a production build of the application without running it.

## Debugging

### Client
The easiest way to debug the client is via Chrome's developer tools. With the application running...
- Open the Developer Tools Tab
- Click 'Sources'
- Under the tree menu, find *'webpack://'*
- Expand the folder *'.'*
- Expand the folder *'src'* - you are now in the src folder of our application
- Find the typescript class you wish to debug, e.g. a service, and open the file
- Place a breakpoint in the window
- You can now debug as per a normal IDE to step over/into methods, evaluate expressions in the console etc.

### Server
The server can be debugged in Visual Studio Code via two methods; *LAUNCH* and *ATTACH*. 

#### Prerequisites
- Open Visual Studio Code's Debug tab (the bug inside a no entry circle!)
- At the top menu, next to the "Lanch" dropdown, click the Settings Cog. This should open `launch.json`
- Replace the `configurations` array with the following:
```json
"configurations": [
        {
            "name": "Launch",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/app.js",
            "stopOnEntry": false,
            "args": [],
            "cwd": "${workspaceRoot}",
            "preLaunchTask": null,
            "runtimeExecutable": null,
            "runtimeArgs": [
                "--nolazy"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "sourceMaps": false,
            "outFiles": []
        },
        {
            "name": "Attach",
            "type": "node",
            "request": "attach",
            "port": 5858,
            "address": "localhost",
            "restart": false,
            "sourceMaps": false,
            "outFiles": [],
            "localRoot": "${workspaceRoot}",
            "remoteRoot": null
        },
        {
            "name": "Attach to Process",
            "type": "node",
            "request": "attach",
            "processId": "${command.PickProcess}",
            "port": 5858,
            "sourceMaps": false,
            "outFiles": []
        }
    ]
```

#### The *LAUNCH* approach
- From the debug menu, select 'Launch' from the dropdown and hit Run
- This will start *JUST THE NODE SERVER* up
- Breakpoints can be placed into the code in Visual Studio. Postman can be used to execute requests.

#### The *ATTACH* approach
- Start the server from the terminal using `npm run build:debug`
- From the debug menu, select 'Attach' from the dropdown and hit Run
- Breakpoints can be placed into the code in Visual Studio.

*Note: Currently this run profile watches for changes, which can make debugging difficult if the server keeps restarting/deploying. This may be fixed in a future release*

## Angular CLI
[Angular CLI](https://github.com/angular/angular-cli) provides command line tools that can aid development. The biggest one is the generation of new Angular 2 components & services, eliminating much of the 'copy/paste' aspect of creating by hand. Installation instructions can be found in the above documentation.
- `ng generate component <path to component>` - generates an Angular 2 component including unit test
- `ng generate service <path to service>` - generates an Angular 2 service including unit test
- `ng build --prod --aot` - builds the Angular 2 front-end for production, including minification/tree-shaking and ahead of time compilation

*Note: this needs hooking into our deployment process*

## Advanced Docker
With [Docker](https://docs.docker.com/installation/#installation) installed, we can build the application and deploy it into it's own docker container. The basic commands are below, however Docker Compose could be used in the future to simplify the process into something far more elegant!
```bash
$ docker build -t mean .
$ docker run -p 27017:27017 -d --name db mongo
$ docker run -p 80:3000 --link db:db_1 mean
```
